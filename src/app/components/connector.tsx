"use client";
import { createPortal } from "react-dom";
import { useConnect, useAccount } from "@starknet-react/core";
import React, { useState } from "react";
import AddressBar from "./address-bar";
import { FaXmark } from "react-icons/fa6";

interface connectProps {
  setIsOpen: (T:boolean) => void;
}

const ConnectModal:React.FC<connectProps> = ({ setIsOpen }) => {
  const { connect, connectors } = useConnect();
  console.log({connect,connectors})
  return (
    <div
      className="absolute inset-0 bg-gray-700 bg-opacity-65 backdrop-blur-md flex gap-x-4 justify-center z-[100] items-center"
      onClick={() => setIsOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col sm:flex-row gap-4 bg-black/55 pt-16 h-fit p-4 rounded-md relative">
        <FaXmark className="absolute right-4 top-2 border text-4xl rounded text-white  p-1 " onClick={() => setIsOpen(false)}/>
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => {
              connect({ connector });
              setIsOpen(false);
            }}
            className="rounded-xl border border-[#EC796B33]/100 bg-[#EC796B33]/10 px-6 py-2 text-[#EC796B33]/100 h-fit"
          >
            Connect {connector.id}
          </button>
        ))}
      </div>
    </div>
  );
};

const Connector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useAccount();

  return (
    <div className="flex flex-col items-center space-y-4 relative">
      {isOpen &&
        createPortal(<ConnectModal setIsOpen={setIsOpen} />, document.body)}
      {!address ? (
        <button
          className="rounded-xl border border-[#EC796B33]/100 bg-[#EC796B33]/10 px-6 py-2 text-[#EC796B33]/100"
          onClick={() => {
            console.log("clicked!!");
            console.log(isOpen);
            setIsOpen((prev) => !prev);
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <AddressBar address={address} />
      )}
    </div>
  );
};

export default Connector;
