import React from "react";
import { FaRotate } from "react-icons/fa6";
//import AddTokenButton, { AddTokenModal } from "../../components/lib/AddToken";

const SwapContent: React.FC = () => {
  return (
    <section className="mx-auto mb-7 w-11/12 sm:w-4/5 lg:w-1/2">
      <div className="relative grid w-full gap-4">
        <div className="absolute bottom-1/2 left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full border bg-[#151536] text-4xl text-white">
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
              className="w-20 bg-inherit px-2 py-1 text-4xl sm:w-36 md:w-fit"
            />
            {/* <AddTokenButton
              className="flex items-center gap-3 rounded-3xl border px-6"
              text={"select a token"}
            /> */}
            <div>select token</div>
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
              className="w-20 bg-inherit p-2 py-1 text-4xl sm:w-36 md:w-fit"
            />
            {/* <AddTokenButton
              className="flex items-center gap-3 rounded-3xl border px-6"
              text={"select a token"}
            /> */}
             <div>select token</div>
          </div>
        </div>
      </div>
      <button className="mt-5 w-full rounded-xl border border-[#EC796B33]/100 bg-[#EC796B33]/10 px-6 py-2 capitalize text-[#EC796B33]/100">
        get started
      </button>
    </section>
  );
};

export default SwapContent;
