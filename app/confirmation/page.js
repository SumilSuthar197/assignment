"use client";
import React from "react";
import Image from "next/image";
import Success from "@/assets/success-transaction.gif";
import { useSelector } from "react-redux";
const page = () => {
  const data = useSelector((state) => state);
  return (
    <div className="w-screen flex items-center justify-center flex-col">
      <Image src={Success} />
      <p className="text-lg sm:text-2xl text-center font-semibold ">
        Yay! Your Payment was successful
      </p>
      <p className="text-base sm:text-xl text-center font-semibold ">
        Total Amount:{data.totalPrice}
      </p>
      <p className="text-base sm:text-xl text-center font-semibold">
        Payment methods: {data.methodSelected}
      </p>
    </div>
  );
};

export default page;
