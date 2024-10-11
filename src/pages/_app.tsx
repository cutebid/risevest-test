import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import {DM_Sans, Hanken_Grotesk, Poppins} from "next/font/google";
import localFont  from "next/font/local"



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const dmSans = DM_Sans({
  weight: ["100","200", "300","400", "500", "600", "700", "800", "900"], // You can specify the weights you need
  subsets: ["latin"], // Specify the subsets if needed
  display: "swap", // Add other font options if required
});

const poppins = Poppins({
  weight: ["100","200", "300","400", "500", "600", "700", "800", "900"], // You can specify the weights you need
  subsets: ["latin"], // Specify the subsets if needed
  display: "swap", // Add other font options if required
});


const grotesk = Hanken_Grotesk({
  weight: ["100","200", "300","400", "500", "600", "700", "800", "900"], // You can specify the weights you need
  subsets: ["latin"], // Specify the subsets if needed
  display: "swap", // Add other font options if required
});




export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <div className={`${poppins} ${dmSans}`}>{getLayout( <Component {...pageProps} />)}</div>
  )
}
