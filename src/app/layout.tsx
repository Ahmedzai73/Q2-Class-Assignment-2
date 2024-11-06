import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
// import { Montserrat } from "next/font/google";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin']})
// const h1font = Montserrat({
//   weight: "400",
//   style: "normal",
//   subsets: ["latin"],
//   display: "swap",
// });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>  
        {/* ${inter.className}  */}
      {/* <div
      className="font-bold text-[14px]font-[Montserrat] mt-[20px] ml-[40px] w-[222px] tracking-tight text-[#737373]
"
    >
      <h1 className={h1font.className}>Hello world</h1></div> */}
        <Header />
        {children}
      </body>
    </html>
  );
}