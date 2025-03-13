import dynamic from 'next/dynamic'
import React, { ComponentType, FC, useEffect, useRef, useState } from 'react'

type LazyHydrateHydrateOptions = {
  rootMargin?: string
  LoadingComponent?: ComponentType
  wrapperElement?: keyof JSX.IntrinsicElements
}

type HydrateOptions = {
  rootMargin: string
  LoadingComponent?: ComponentType
  wrapperElement?: keyof JSX.IntrinsicElements
}

type ComponentProps = {
  [key: string]: unknown
  wrapperProps?: Record<string, any>
}

const hydrate = <P extends ComponentProps>(
  Component: ComponentType<Omit<P, 'wrapperProps'>>,
  options: HydrateOptions,
): FC<P> => {
  const { rootMargin, wrapperElement = 'section' } = options
  const Hydration: FC<P> = ({ wrapperProps = {}, ...props }) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const [isHydrated, setIsHydrated] = useState(false)

    const initIntersectionObserver = (rootMargin: string): (() => void) | undefined => {
      const observerOptions = {
        rootMargin,
      }

      const shouldHydrate = !('IntersectionObserver' in window) || !rootRef.current

      if (shouldHydrate) {
        setIsHydrated(true)
        return
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsHydrated(true)
        }
      }, observerOptions)
      observer.observe(rootRef.current)
      return () => observer.disconnect()
    }

    useEffect(() => {
      if (!isHydrated) {
        return initIntersectionObserver(rootMargin)
      }
      return
    }, [isHydrated])

    const WrapperElement = wrapperElement as unknown as FC<React.HTMLProps<HTMLElement>>

    if (isHydrated) {
      return (
        <WrapperElement {...wrapperProps}>
          <Component {...(props as Omit<P, 'wrapperProps'>)} />
        </WrapperElement>
      )
    }
    return (
      <WrapperElement
        ref={rootRef}
        {...wrapperProps}
        dangerouslySetInnerHTML={{ __html: '' }}
        suppressHydrationWarning
      />
    )
  }
  return Hydration
}

const lazyHydrate = <P extends ComponentProps>(
  component: () => Promise<{ default: ComponentType<Omit<P, 'wrapperProps'>> }>,
  options?: LazyHydrateHydrateOptions,
): FC<P> => {
  const LoadingComponent = options?.LoadingComponent ?? undefined
  const wrapperElement = options?.wrapperElement ?? 'section'

  const Component = dynamic(component, {
    ssr: true,
    ...(!!LoadingComponent && {
      loading: () => <LoadingComponent />,
    }),
  })
  const isServer = typeof window === 'undefined'

  const WrapperElement = wrapperElement as unknown as FC<React.HTMLProps<HTMLElement>>

  return isServer
    ? ({ wrapperProps = {}, ...props }) => (
        <WrapperElement {...wrapperProps}>
          <Component {...(props as Omit<P, 'wrapperProps'>)} />
        </WrapperElement>
      )
    : hydrate(Component, {
        rootMargin: options?.rootMargin || '0px 250px',
        wrapperElement,
      })
}

export { lazyHydrate }
