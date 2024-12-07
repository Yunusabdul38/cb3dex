"use client";

import Header from "./components/Header";
import { useAccount } from "@starknet-react/core";
import swapImg from "../../public/swapImg1.webp";
import Image from "next/image";
import TabButtonInterface from "./components/tabButton";
//import Balance from "./components/Balance";

export default function Home() {
  const { isConnected, isDisconnected } = useAccount();
  
  return (
    <main className="relative flex min-h-svh flex-col justify-between bg-main-bg">
      <Header />
      {/* HERO --> */}
      <section className="">
        <div className="mx-auto flex max-w-[600px] flex-col p-4 text-center md:max-w-[850px] md:py-8">
          <h1 className="text-2xl text-[--headings] md:text-3xl">
            Swap token anytime, at your convenience.
          </h1>
        </div>
      {/* <Balance/> */}
        {isDisconnected && (
          <div className="mx-auto flex items-center justify-center">
            {" "}
            <Image className="w-[35rem] md:max-w-md" src={swapImg} alt="swap image" />
          </div>
        )}
      </section>

      <div className="w-full">{isConnected && <TabButtonInterface />}</div>
    </main>
  );
}
