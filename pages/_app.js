import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`

// theme styles
const theme = {
  colors: {
    primary: '#4a4637',
    white: '#e9eef1',
    background: '#efeae4',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
