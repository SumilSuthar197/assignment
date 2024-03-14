import Image from "next/image";
import React from "react";
import Logo from "../assets/groww-logo-light.svg";
const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-gray-300 flex justify-between px-5 py-2 sm:px-5 sm:py-1 items-center">
      <div>
        <Image src={Logo} />
      </div>
    </div>
  );
};

export default Navbar;
