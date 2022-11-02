import 'styles/styles.scss'
import type {AppProps} from 'next/app'
import Nav from 'src/components/shared/Nav'
import Footer from 'src/components/shared/Footer'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Jake Tripp | Full-Stack Developer | Seattle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Full-stack developer in Seattle with a passion for creating innovative solutions to complex problems."
        />

        {/* favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=jwEEGx2Q9G"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=jwEEGx2Q9G"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=jwEEGx2Q9G"
        />
        <link rel="manifest" href="/site.webmanifest?v=jwEEGx2Q9G" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=jwEEGx2Q9G"
          color="#133253"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=jwEEGx2Q9G" />
        <meta name="msapplication-TileColor" content="#133253" />
        <meta name="theme-color" content="#133253" />

        {/* fb meta tags */}
        <meta property="og:url" content="https://jaketripp.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Jake Tripp | Full-Stack Developer | Seattle"
        />
        <meta
          property="og:image"
          content="https://jaketripp.com/images/fb-meta-img.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta
          property="og:description"
          content="Full-stack developer in Seattle with a passion for creating innovative solutions to complex problems."
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
