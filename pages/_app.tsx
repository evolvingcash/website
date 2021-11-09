import '../styles/global.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { ChakraProvider } from "@chakra-ui/react"
// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react"

// 2. Add your color mode config
const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        margin: 0,
        // fontSize: "sm",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        // lineHeight: "tall",
        fontFamily: '"TT Norms Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;',
      },
    }),
  },
})

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App