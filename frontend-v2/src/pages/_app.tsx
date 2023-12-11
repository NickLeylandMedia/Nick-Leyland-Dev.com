import type { AppProps } from "next/app";

import "../styles/globals.scss";

import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Script
          id="analytics-1"
          strategy="lazyOnload"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        ></Script>
        <Script id="analytics-2" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);`}
        </Script> */}
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
