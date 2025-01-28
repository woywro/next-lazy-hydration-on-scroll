import Component1 from '@/components/Component1'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection/HeroSection'
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
        <title>next-lazy-hydration-on-scroll - Optimize Your Next.js App Hydration</title>
        <meta
          name="description"
          content="Boost your Next.js application performance with lazy hydration. Hydrate components only when they enter the viewport."
        />
      </Head>
      <main className={`min-h-screen bg-white ${inter.className}`}>
        <HeroSection />
        <Component1 />
        <Component2 />
        <Component3 />
        <Footer />
      </main>
    </>
  )
}
