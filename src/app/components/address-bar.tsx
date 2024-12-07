import ChevronDown from "../svg/ChevronDown";
import React, { useState } from "react";
import { useDisconnect } from "@starknet-react/core";

interface addressProps {
  address:`0x${string}`
}

const AddressBar:React.FC<addressProps> = ({ address })=> {
  const [showDisconnect, setShowDisconnect] = useState(false);
  const {disconnect,data} = useDisconnect()


  return (
    <div className="relative">
      <button
        role="combobox"
        aria-expanded={showDisconnect}
        aria-controls="disconnect-box"
        className="text-sm bg-[#F6F6F6] text-[#6F6F6F] flex gap-x-2 items-center py-[10px] rounded-full px-6"
        onClick={() => setShowDisconnect((prev) => !prev)}
      >
        {address.slice(0, 6)}...{address.slice(-4)}{" "}
        <span
          className={`${
            showDisconnect ? "-rotate-180" : ""
          } transition-all duration-500`}
        >
          <ChevronDown />
        </span>
      </button>
      <div
        id="disconnect-box"
        role="listbox"
        className={`absolute left-[20px] top-[45px] z-[10] grid -translate-x-1/2 overflow-hidden rounded-xl text-base leading-5 transition-all duration-300 ease-in-out w-[200px] md:translate-x-0 ${
          showDisconnect
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <button
            className="rounded-xl border border-[#EC796B33]/100 bg-[#EC796B33]/10 px-6 py-2 text-[#EC796B33]/100 mt-4 transition-all duration-500"
            onClick={() => {
              disconnect()
              console.log(data)
              setShowDisconnect(false);
            }}
          >
            Disconnect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default  AddressBar