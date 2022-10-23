import Head from 'next/head'
import Image from 'next/image'
import Tabs from './components/Tabs';


export default function Home() {
  return (
   
    <>
      <Head>
        <title>Nordwest Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Tabs></Tabs>
        
      
      </main>


    </>
   
  )
}
