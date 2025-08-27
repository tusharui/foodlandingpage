import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";
import Provider from "@/components/HOC/Provider";

const font = Manrope ({
  weight :['200','300','400','500','600','700','800'],
  subsets :['latin'],
})

export const metadata: Metadata = {
  title: "Food Landing Page ",
  description: "landing page made in next js with tailwindcss ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      className={`${font.className} antialiased`}>
        <Provider>
        <Responsive/>
        {children}
        </Provider>
        </body>
      
        
    </html>
  );
}
