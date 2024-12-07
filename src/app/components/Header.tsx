import { CiSearch } from "react-icons/ci";
import Connector from "./connector";

const Header = () => {

  return (
    <div
      id="nav"
      className="z-[9999] w-full px-2 pt-4 transition-all duration-500 md:px-8 md:pt-0"
    >
      <header className="md:rounded-[32px rounded-[12px]">
        <div className="">
          <div className="mx-auto flex h-16 max-w-[--header-max-w] items-center justify-between px-4 md:h-28 md:px-8">
            <div className="text-xl text-white">cb3dex</div>

            <div className="relative hidden md:block">
              <CiSearch className="absolute left-1 top-2 text-[1.7rem] text-white" />
              <input
                type="text"
                className="rounded-lg border bg-inherit py-2 pl-8 text-[1.4rem] text-white outline-none"
                placeholder="search for tokens"
              />
            </div>
            <div className="relative">
             {/* <button className="">connect button</button> */}
             <Connector  />
            </div>
          </div>
          <div className="relative w-full md:hidden">
            <CiSearch className="absolute left-1 top-2 text-[1.7rem] text-white" />
            <input
              type="text"
              className="mx-auto w-4/5 rounded-lg border bg-inherit py-2 pl-8 text-[1.4rem] text-white outline-none"
              placeholder="search for tokens"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
