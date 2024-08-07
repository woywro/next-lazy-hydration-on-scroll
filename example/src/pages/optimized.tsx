import Component1 from '@/components/Component1'
import { lazyHydrate } from 'next-lazy-hydration-on-scroll'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const Component2 = dynamic(() => import('@/components/Component2'), {
  ssr: true,
})

const Component3 = lazyHydrate(() => import('@/components/Component3'))

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LAZY HYDRATION OPTIMIZED</title>
      </Head>
      <main className={`${inter.className}`}>
        {/* Component1 is statically imported */}
        <Component1 />
        {/* Component2 is dynamically imported */}
        <Component2 />
        {/* Component3 is lazy loaded and hydrated on scroll */}
        <Component3 />
      </main>
    </>
  )
}
