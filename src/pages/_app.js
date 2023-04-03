import MainLayout from '@component/components/layout/main-layout'
import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} /> 
    </MainLayout>
  )
}
