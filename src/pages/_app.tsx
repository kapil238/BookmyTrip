import "@/styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return;
  <>
    <Script
      strategy="afterInteractive"
      src="https://www.profitableratecpm.com/wyxpk9spv?key=9eebf7181383ac967b2b48d90467a9ad"
    />
    <Component {...pageProps} />;
  </>;
}
