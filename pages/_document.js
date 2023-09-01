import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react';
import Menu from '../components/menu/Menu'
import useGetCurrentTheme from '../hooks/useGetCurrentTheme';

export default function Document() {
  const [theme, setTheme] = useState(useGetCurrentTheme() || "dark");
  return (
    <Html data-bs-theme={theme} lang="en">
      <Head />
      <body>
        <Menu />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
