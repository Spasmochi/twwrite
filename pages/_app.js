// pages/_app.js
import React from 'react'
import NextApp from 'next/app'
import '../styles/Tailwind.css'

import { theme } from 'essential-slices'

import { ThemeProvider, BaseStyles } from 'theme-ui'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <BaseStyles>
          <Component {...pageProps} />
        </BaseStyles>
      </ThemeProvider>
    )
  }
}
