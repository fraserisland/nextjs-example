import { Layout } from "../src/components"
import { ThemeProvider } from "../src/context/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
