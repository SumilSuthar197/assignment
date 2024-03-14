"use client";
import { decrementQuantity, incrementQuantity } from "@/lib/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex flex-row space-y-3 py-6 text-left space-x-3 sm:space-x-5 sm:space-y-0">
      <div className="shrink-0 mt-3 sm:mt-0 border-2 bg-white border-gray-200 rounded-md p-1 h-full">
        <img
          className="h-24 w-24 rounded-lg object-contain "
          src={product?.image}
          alt="image"
        />
      </div>
      <div className="flex justify-between flex-col sm:flex-row w-full items-start">
        <div className="pr-8 sm:pr-5">
          <p className="text-base font-medium ">{product?.title}</p>
          <p class="hidden sm:block mx-0 mt-1 mb-0 text-sm text-gray-400">
            ${product?.price} per/item
          </p>
        </div>

        <div className="mt-1 flex flex-col-reverse gap-2 sm:gap-0 items-start sm:items-end justify-between sm:mt-0 sm:flex-row  sm:justify-end">
          <p className="shrink-0 w-20 text-base font-semibold  sm:order-2 sm:ml-8 sm:text-right">
            ${(product?.price * product?.quantity).toFixed(2)}
          </p>

          <div className="sm:order-1">
            <div className="mx-auto flex h-8 items-stretch text-gray-600">
              <button
                onClick={() => {
                  dispatch(decrementQuantity({ id: product?.id }));
                }}
                className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-gray-800 hover:text-white"
              >
                -
              </button>
              <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                {product?.quantity || 1}
              </div>
              <button
                onClick={() => {
                  dispatch(incrementQuantity({ id: product?.id }));
                }}
                className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-gray-800 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
