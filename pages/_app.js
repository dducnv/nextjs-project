import Layout from "../components/Layout";
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/globals.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-medium-image-zoom/dist/styles.css'
import Header from "../components/Head";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
