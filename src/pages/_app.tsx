import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import {DM_Sans, Poppins} from "next/font/google";




export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};


type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const dmSans = DM_Sans({
  weight: ["100","200", "300","400", "500", "600", "700", "800", "900"], 
  subsets: ["latin"], 
  display: "swap", 
});

const poppins = Poppins({
  weight: ["100","200", "300","400", "500", "600", "700", "800", "900"], 
  subsets: ["latin"],
  
  display: "swap", 
});






export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
	const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div className={`${poppins} ${dmSans}`}>{getLayout( <Component {...pageProps} />)}</div>
  )
}
