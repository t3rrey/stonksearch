import React from "react";
import Image from "next/image";
import searchIcon from "../public/assets/search-icon.svg";
const Searchbar = () => {
  return (
    <div
      id="swrap"
      className="flex bg-white rounded-3xl border border-black w-1/4 p-2 absolute top-20 right-28"
    >
      <input className="h-12 w-11/12 rounded-l-3xl outline-transparent" />
      <div className="w-10 h-10 text-center ">
        <Image src={searchIcon} className="" />
      </div>
    </div>
  );
};

export default Searchbar;
