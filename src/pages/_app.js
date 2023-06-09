import MainLayout from '@component/components/layout/main-layout'
import '@component/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Generated by create next app and edited by Leonardo Diman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Lustria&display=swap" rel="stylesheet" />        
      </Head>
      <MainLayout>
        <Component {...pageProps} /> 
      </MainLayout>    
    </>
  )
}
