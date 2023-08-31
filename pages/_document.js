import { Html, Head, Main, NextScript } from 'next/document'

import Menu from '../components/menu/Menu'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
