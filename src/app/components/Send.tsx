import { Contract, RpcProvider } from "starknet"
import { mtn_abi, mtn_contract_address } from "../abi/mtn"
import { art_abi, art_contract_address } from "../abi/art"
import React, { useRef } from "react"
import { useAccount } from "@starknet-react/core"

function SendToken(){
    const {account} = useAccount()
    const amountRef = useRef<HTMLInputElement>(null)
    const tokenRef = useRef<HTMLSelectElement>(null)
    const accountRef = useRef<HTMLInputElement>(null)
    const provider = new RpcProvider({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL })
    const mtnTokenContract = new Contract(mtn_abi,mtn_contract_address,provider)
    const artTokenContract = new Contract(art_abi,art_contract_address,provider)

    if(account){
        mtnTokenContract.connect(account)
        artTokenContract.connect(account)
    }

    async function onSubmitdata(e:React.FormEvent){
        e.preventDefault()
        let amount = amountRef?.current?.value
        let token = tokenRef?.current?.value
        let account = accountRef?.current?.value

        if(!amount || !token || !account ){
            return
        }

        if(token === "MTN"){
            const mtntokenCall = mtnTokenContract.populate("transfer",[account,amount])
            const response = mtnTokenContract.transfer(mtntokenCall.calldata)
            await provider.waitForTransaction(response?.transaction_hash)
        }
        if (token=== "ART"){
            const mtntokenCall = artTokenContract.populate("transfer",[account,amount])
            const response = artTokenContract.transfer(mtntokenCall.calldata)
            await provider.waitForTransaction(response?.transaction_hash)
        }

      }

    return <form action="" className="max-w-lg mx-auto grid gap-4 my-10" onSubmit={(e)=>onSubmitdata(e)}>
        <div className="flex flex-col gap-1">
        <label htmlFor="to">To</label>
        <input type="text" name="to" id="to" className="w-full bg-inherit border rounded-md h-10 px-4 outline-none focus:border-[#EC796B33]/100"  ref={accountRef}/>
        </div>
        <div className="flex flex-col gap-1">
        <label htmlFor="to">Amount</label>
        <input type="number" name="Amount" id="Amount" className="rounded-md h-10 border bg-inherit px-4 focus:border-[#EC796B33]/100 outline-none" ref={amountRef} />
        </div>
        <div className="flex flex-col gap-1">
        <label htmlFor="token">select token</label>
        <select name="token" id="token" className="border outline-none bg-transparent px-2 h-10 rounded-md" ref={tokenRef}>
            <option value="" className="bg-transparent">selecct a token</option>
            <option value="ART" className="bg-transparent" >ART</option>
            <option value="MTN" className="bg-none" >MTN</option>
        </select>
        </div>
        <button type="submit" className="mt-5 w-full rounded-xl border border-[#EC796B33]/100 bg-[#EC796B33]/10 px-6 py-2 capitalize text-[#EC796B33]/100" 
      >
        send
      </button>
    </form>
}

export default SendToken