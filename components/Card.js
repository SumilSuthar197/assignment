import { MdOutlineLocationOn } from "react-icons/md";
const Card = () => {
  return (
    <div className="lg:w-1/4 w-full border-gray-300 rounded-md border-solid border-2 ">
      <h1 className="font-semibold text-base  px-4 py-2 border-b-2 border-gray-300">
        Delivery Details
      </h1>
      <div className="flex flex-row gap-2 px-3 py-2 text-sm t font-medium">
        <div className="bg-gray-800 text-lg h-max rounded-sm p-1 text-white">
          <MdOutlineLocationOn />
        </div>
        <div>
          <h1 className="text-base ">Mr Sumil Suthar</h1>
          <p className="text-sm text-gray-400">+91 12345 67890</p>
          <p className="text-sm text-gray-400">sumil.suthar@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
