import React from "react";
import Image from "next/image";
import Success from "@/assets/success-transaction.gif";
const page = () => {
  return (
    <div className="w-screen flex items-center justify-center flex-col">
      <Image src={Success} />
      <p className="text-2xl text-center font-semibold ">
        Yay! Your Payment was successful
      </p>
    </div>
  );
};

export default page;
