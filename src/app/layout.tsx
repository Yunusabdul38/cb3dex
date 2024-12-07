import type { Metadata } from "next";
import "./globals.css";
import { StarknetProvider } from "./components/StarknetProvider";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "cb3dex",
  description: "Fast and reliable token exchange!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <StarknetProvider>
        {children}
        </StarknetProvider>
        <Footer/>
      </body>
    </html>
  );
}
