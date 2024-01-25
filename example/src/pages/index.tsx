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
        <title>next-lazy-hydration-on-scroll-example</title>
      </Head>
      <main className={`${inter.className}`}>
        <Component1 />
        <Component2 />
        <Component3 />
      </main>
    </>
  )
}
