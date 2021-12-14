import React from "react";
import homeIcon from "../public/assets/home-icon.svg";
import listIcon from "../public/assets/list-icon.svg";
import settingsIcon from "../public/assets/settings-icon.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className=" fixed top-0 left-0 h-screen w-30 m-0 flex flex-col bg-gray-200">
      <div className="my-auto">
        <h1 id='stonk' className="absolute top-5 left-10 text-4xl text-red-600 stonk">
          STONKSEARCH
        </h1>
        <div className="p-10">
          <Image src={homeIcon} width={50} height={50} />
        </div>
        <div className="p-10">
          <Image src={listIcon} width={50} height={50} />
        </div>
        <div className="p-10">
          <Image src={settingsIcon} width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
