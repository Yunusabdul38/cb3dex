"use client"
import React, { useEffect, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import ChevronDown from "../svg/ChevronDown";
import Tokens from "./tokens";
import { useAccount, useReadContract } from "@starknet-react/core";
import {mtn_abi,mtn_contract_address} from "../abi/mtn"
import {art_abi,art_contract_address} from "../abi/art"
import {swapAbi,swap_contract_address} from "../abi/swap"
import { Contract, RpcProvider } from "starknet";


const SwapContent: React.FC = () => {
  const provider = new RpcProvider({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL })
  const swapContract = new Contract(swapAbi,swap_contract_address,provider)

  const [isOpen,setIsOpen] = useState(false)
  const [buyToken,setBuyToken] = useState("")
  const [sellToken,setSellToken] = useState("")
  const [swapType,setSwapType] = useState("")
  const [sellAmount,setSellAmount] = useState("0")
  const [buyAmount,setBuyAmount] = useState(0)

  const firstTokenAddress = sellToken==="MTN"?mtn_contract_address:sellToken==="ART"?art_contract_address:"0"
  const secondTokenAddress = buyToken==="ART"?art_contract_address:buyToken==="MTN"?mtn_contract_address:"0"

  const {address,account} =useAccount()
  if(account){
    swapContract.connect(account)
  }
  const {data:mtn_token} = useReadContract({
   abi:mtn_abi,
   address:mtn_contract_address,
   functionName:"balance_of",
   args:[address]
  })


  const {data:get_AmountResultToken,isSuccess} = useReadContract({
    abi:swapAbi,
    address:swap_contract_address,
    functionName:"get_AmountResultToken",
    args:[sellAmount,firstTokenAddress,secondTokenAddress]
   })
  console.log({get_AmountResultToken,firstTokenAddress,secondTokenAddress})
  const {data:art_token,} = useReadContract({
    abi:art_abi,
    address:art_contract_address,
    functionName:"balance_of",
    args:[address]
   })

  
  function closeModal (){
    setIsOpen(false)
    setSwapType("")
  }

  function openModal (){
    setIsOpen(true)
  }

  function swapTokensFromBuyToSell(){
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

  async function onSubmitdata(){
    console.log({firstTokenAddress,secondTokenAddress})
    const swapCall = swapContract.populate("swap",[firstTokenAddress,secondTokenAddress,sellAmount])
    const response = swapContract.swap(swapCall.calldata)
    console.log(response)
    await provider.waitForTransaction(response?.transaction_hash)
  }

  useEffect(()=>{
    if(+sellAmount>0 && isSuccess){
      console.log(isSuccess)
      setBuyAmount(get_AmountResultToken)
    }
  },[sellAmount,isSuccess])

  return (
   <>
  {isOpen &&  <Tokens closeModal={closeModal} tokenHandle={tokenHandle} />}
    <section className="mx-auto mb-7 w-11/12 sm:w-4/5 lg:w-1/2">
      <div className="relative grid w-full gap-4">
        <div className="absolute bottom-1/2 left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full border bg-[#151536] text-4xl text-white z-20 cursor-pointer" onClick={swapTokensFromBuyToSell}>
          <FaRotate />
        </div>
        <div className="flex h-44 flex-col justify-between rounded-2xl border border-gray-600 p-7 text-white shadow-2xl">
          <div className="flex justify-between relative pb-2">
            <input
              value={sellAmount}
              onChange={(e)=>{
               setSellAmount(e.target.value)
              }}
              type="number"
              defaultValue="0"
              id="sell"
              className="w-20 bg-inherit px-2 py-1 text-4xl sm:w-32 md:w-96 outline-none"
            />
            <button className="flex gap-3 items-center border rounded-full py-2 px-4 hover:border-[#EC796B33]/100"  onClick={()=>{
              openModal()
              setSwapType("sell")
              }}
              >{sellToken?sellToken:"select token"} <ChevronDown/> </button>
              {sellToken && <h5 className="right-6 -bottom-6 absolute text-[#868686] text-sm">balance: <span className="text-white">{sellToken==="MTN"?mtn_token:art_token}</span> </h5>}
          </div>
        </div>
        <div className="flex h-44 flex-col justify-between rounded-2xl border border-gray-600 p-7 text-white shadow-2xl">
          <div className="flex justify-between text-4xl capitalize">
            <h2>buy</h2>
          </div>
          <div className="flex justify-between pb-2 relative">
            <h2
              id="buy"
              className="w-20 bg-inherit px-2 py-1 text-4xl sm:w-32 md:w-96 outline-none"
            >
              {buyAmount}
            </h2>
             <button className="flex gap-3 items-center border rounded-full py-2 px-4 hover:border-[#EC796B33]/100"
              onClick={()=>{
                openModal()
                setSwapType("buy")
                }}
             >{buyToken?buyToken:"select token"} <ChevronDown/> </button>
             {buyToken && <h5 className="right-6 -bottom-6 absolute text-[#868686] text-sm">balance: <span className="text-white">{buyToken==="MTN"?mtn_token:art_token}</span> </h5>}
          </div>
        </div>
      </div>
      <button className="mt-5 w-full rounded-xl border border-[#EC796B33]/100 bg-[#EC796B33]/10 px-6 py-2 capitalize text-[#EC796B33]/100" 
      onClick={onSubmitdata}
      >
        get started
      </button>
    </section>
   </>
  );
};

export default SwapContent;