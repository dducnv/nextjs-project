import Layout from "../components/Layout";
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
