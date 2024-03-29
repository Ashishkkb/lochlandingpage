import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/global.scss';
import { useEffect } from 'react';
const mouseFollower = import('../utils/mouseFollower').then((module) => {
  return module.default;
});

export default function App({ Component, pageProps }: AppProps) {
  const handleMouseEnter = async () => {
    const cursor = await mouseFollower;
    (cursor).show();
  };

  useEffect(() => {
    handleMouseEnter()
  }, [])
  
  return (
    <>
          <Component {...pageProps} />
    </>
  )
}
