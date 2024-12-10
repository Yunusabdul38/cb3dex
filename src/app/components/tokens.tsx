import React from "react"
import { CiSearch } from "react-icons/ci"
import { FaXmark } from "react-icons/fa6"

interface close{
    closeModal:()=>void,
    tokenHandle:(T:string)=>void,
}


const tokens = [
    {
        name:"ARTToken",
        symbol:"ART"
    },
    {
        name:"MTNToken",
        symbol:"MTN"
    },
]

const  Tokens:React.FC<close> = ({closeModal,tokenHandle})=>{
    return (
        <>
        <div className="top-0 absolute inset-0 bg-gray-700 bg-opacity-65 backdrop-blur-md flex gap-x-4 justify-center z-[500] items-center" onClick={()=>closeModal()}/>
        <section className="bg-[#181830] px-5 rounded-md pt-5 pb-4 h-[533px] -mt-28 transition-all duration-500 w-[90%] sm:w-fit fixed top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[600]">
           <div className="flex justify-between items-center text-white mb-4">
           <h1 className="font-medium text-xl">Select a token</h1>
           <FaXmark
            onClick={()=>closeModal()}
           />
           </div>
             <div className="relative mb-4">
              <CiSearch className="absolute left-5 top-3 text-[1.7rem] text-white" />
              <input
                type="text"
                className="rounded-full border bg-inherit py-2 pl-12 text-[1.4rem] text-white outline-none focus:border-[#EC796B33]/100 w-full"
                placeholder="search for tokens"
              />
            </div>
           <div className="grid gap-4">
          {tokens.map((data,index)=>{
            return <div className="flex items-center gap-4 hover:border-[#EC796B33]/100 border border-transparent rounded-full px-5 cursor-pointer" key={index}
                onClick={()=>tokenHandle(data.symbol)}
            >
             <div className="w-10 h-10 rounded-full bg-gray-500"/>
             <div className="font-medium text-xl">
                 <h1>{data.name}</h1>
                 <h2 className="text-base text-[#868686]">{data.symbol}</h2>
             </div>
         </div>
          })}
           </div>
        </section>
        </>
    )
}

export default Tokens