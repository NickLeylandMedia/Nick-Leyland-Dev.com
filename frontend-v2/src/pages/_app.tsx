import type { AppProps } from "next/app";

import "../styles/globals.scss";

import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VQE7PL298E"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VQE7PL298E');`}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
