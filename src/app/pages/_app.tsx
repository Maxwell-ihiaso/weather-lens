import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}