import Card from "@/components/Card";
import Cart from "@/components/Cart";
import Payment from "@/components/Payment";
import RenderComponent from "@/components/RenderComponent";

const page = () => {
  return (
    <div className=" flex flex-col gap-10 lg:flex-row-reverse justify-center items-start mx-3 my-6">
      <RenderComponent>
        <Card />
        <Payment />
      </RenderComponent>
    </div>
  );
};

export default page;
