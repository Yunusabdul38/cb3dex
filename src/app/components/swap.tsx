"use client"
import React, { useState } from "react";
import { FaRotate } from "react-icons/fa6";
import ChevronDown from "../svg/ChevronDown";
import Tokens from "./tokens";
//import AddTokenButton, { AddTokenModal } from "../../components/lib/AddToken";

const SwapContent: React.FC = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [buyToken,setBuyToken] = useState("")
  const [sellToken,setSellToken] = useState("")
  const [swapType,setSwapType] = useState("")
  // const [onSwapLoad,setOnSwapLoad] = useState(false)

  function closeModal (){
    setIsOpen(false)
    setSwapType("")
  }

  function openModal (){
    setIsOpen(true)
  }

  function swapTokensFromByToSell(){
    if(sellToken && buyToken){
    setBuyToken(sellToken)
    setSellToken(buyToken)
    }
  }

  function tokenHandle(token:string){
    console.log(token)
    if(swapType === "buy"){
      setBuyToken(token)
    }
    if(swapType=="sell"){
      setSellToken(token)
    }
    setIsOpen(false)
  }
  
  return (
   <>
  {isOpen &&  <Tokens closeModal={closeModal} tokenHandle={tokenHandle} />}
    <section className="mx-auto mb-7 w-11/12 sm:w-4/5 lg:w-1/2">
      <div className="relative grid w-full gap-4">
        <div className="absolute bottom-1/2 left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full border bg-[#151536] text-4xl text-white z-20 cursor-pointer" onClick={swapTokensFromByToSell}>
          <FaRotate />
        </div>
        <div className="flex h-44 flex-col justify-between rounded-2xl border border-gray-600 p-7 text-white shadow-2xl">
          <div className="flex justify-between text-4xl capitalize">
            <h2>sell</h2>
            <h2>$0</h2>
          </div>
          <div className="flex justify-between">
            <input
              type="number"
              defaultValue="0"
              id="sell"
              inputMode="numeric"
              className="w-20 bg-inherit px-2 py-1 text-4xl sm:w-32 md:w-96 outline-none"
            />
            <button className="flex gap-3 items-center border rounded-full py-2 px-4 hover:border-[#EC796B33]/100"  onClick={()=>{
              openModal()
              setSwapType("sell")
              }}
              >{sellToken?sellToken:"select token"} <ChevronDown/> </button>
          </div>
        </div>
        <div className="flex h-44 flex-col justify-between rounded-2xl border border-gray-600 p-7 text-white shadow-2xl">
          <div className="flex justify-between text-4xl capitalize">
            <h2>buy</h2>
          </div>
          <div className="flex justify-between">
            <input
              type="number"
              defaultValue="0"
              id="buy"
               inputMode="numeric"
              className="w-20 bg-inherit px-2 py-1 text-4xl sm:w-32 md:w-96 outline-none"
            />
             <button className="flex gap-3 items-center border rounded-full py-2 px-4 hover:border-[#EC796B33]/100"
              onClick={()=>{
                openModal()
                setSwapType("buy")
                }}
             >{buyToken?buyToken:"select token"} <ChevronDown/> </button>
          </div>
        </div>
      </div>
      <button className="mt-5 w-full rounded-xl border border-[#EC796B33]/100 bg-[#EC796B33]/10 px-6 py-2 capitalize text-[#EC796B33]/100">
        get started
      </button>
    </section>
   </>
  );
};

export default SwapContent;
