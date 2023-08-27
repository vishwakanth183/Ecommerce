import Footer from '../src/components/footer';
import Navbar from '../src/components/navbar'
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {

  // Variable to handle next route
  const router = useRouter();

  const exludeRoutes = ['/checkout'];

  // Check if the current route is in the array of routes without layout
  const shouldRender = !(exludeRoutes.includes(router.pathname))

  // console.log("shouldRender", router, shouldRender)

  return (
    <>
      {shouldRender && <Navbar />}
      <Component {...pageProps} />
      {shouldRender && <Footer />}
    </>
  )
}