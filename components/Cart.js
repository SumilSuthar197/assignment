"use client";
import Image from "next/image";
import EmptyCart from "../assets/empty-cart.png";
import CartCard from "./CartCard";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Cart = () => {
  const allState = useSelector((state) => state);
  console.log(allState);
  const { products, totalPrice } = useSelector((state) => state);
  const { push } = useRouter();
  return (
    <section className="w-full lg:w-3/5 ">
      <div className=" border-gray-200 border-2 rounded-md overflow-hidden">
        <div className="flex items-center px-4 border-b-2 py-2 justify-between">
          <h1 className="text-base sm:text-2xl font-semibold ">Your Cart</h1>
          <button
            onClick={() => push("/")}
            className="rounded-md bg-gray-900 px-6 py-1 text-base font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
          >
            Refresh
          </button>
        </div>

        <div className="shadow">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            <div className="flow-root">
              {products.length > 0 ? (
                <ul className="-my-8">
                  {products.map((product) => (
                    <CartCard key={product.id} product={product} />
                  ))}
                </ul>
              ) : (
                <div className="flex justify-center items-center w-full flex-col mt-3">
                  <Image
                    className="max-w-96"
                    src={EmptyCart}
                    alt="empty cart"
                  />
                  <p className="text-xl font-semibold ">Your cart is empty</p>
                </div>
              )}
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Subtotal</p>
                <p className="text-base font-semibold ">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Shipping</p>
                <p className="text-base font-semibold ">$0.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-400">Total</p>
              <p className="text-xl font-semibold ">
                <span className="text-xs font-normal">USD</span>{" "}
                {totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  if (products.length <= 0) {
                    alert("Cart is Empty");
                    return;
                  }
                  push("/payment");
                }}
                type="button"
                className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
