import "app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import ReactGA from "react-ga4";
import Script from "next/script";
 
// *** Google Analytics *** Here

ReactGA.initialize("G-Y5NCYWGM1N");

//Fonts within the app
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Carlquist | Developer & Teacher",
  description: "Max Carlquist a developer and teacher based in Helsingborg, Sweden.",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y5NCYWGM1N`}
      />

      <Script strategy="lazyOnload" id="script-loading">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-Y5NCYWGM1N', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}