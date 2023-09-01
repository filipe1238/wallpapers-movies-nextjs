import React from 'react'
import { useEffect, useState } from 'react'

function useGetCurrentTheme() {
    const [theme, setTheme] = useState();

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          setTheme(storedTheme);
        }
      }, []);
  return theme;
}

export default useGetCurrentTheme