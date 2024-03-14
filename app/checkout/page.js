import Card from "@/components/Card";
import Cart from "@/components/Cart";
import RenderComponent from "@/components/RenderComponent";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-10 lg:flex-row-reverse justify-center items-start mx-3 my-6">
      <RenderComponent>
        <Card />
        <Cart />
      </RenderComponent>
    </div>
  );
};

export default page;
