import dynamic from 'next/dynamic'
import React, { ComponentType, FC, useEffect, useRef, useState } from 'react'

type LazyHydrateHydrateOptions = {
  rootMargin?: string
  LoadingComponent?: ComponentType
}

type HydrateOptions = {
  rootMargin: string
  LoadingComponent?: ComponentType
}

type ComponentProps = {
  [key: string]: unknown
}

const hydrateClientSide = <P extends ComponentProps>(Component: ComponentType<P>, options: HydrateOptions): FC<P> => {
  const { rootMargin } = options
  const Hydration: FC<P> = ({ ...props }) => {
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

    if (isHydrated) {
      return (
        <section>
          <Component {...props} />
        </section>
      )
    }
    return <section ref={rootRef} dangerouslySetInnerHTML={{ __html: '' }} suppressHydrationWarning />
  }
  return Hydration
}

const lazyHydrate = <P extends ComponentProps>(
  component: () => Promise<any>,
  options?: LazyHydrateHydrateOptions,
): FC<P> => {
  const LoadingComponent = options?.LoadingComponent ?? undefined

  const Component = dynamic(component, {
    ssr: true,
    ...(!!LoadingComponent && {
      loading: () => <LoadingComponent />,
    }),
  })
  const isServer = typeof window === 'undefined'
  return isServer
    ? ({ ...props }) => (
        <section>
          <Component {...props} />
        </section>
      )
    : hydrateClientSide(Component, { rootMargin: options?.rootMargin || '0px 250px' })
}

export { lazyHydrate }
