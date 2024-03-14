"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setPaymentMethod } from "@/lib/slices/cartSlice";
const Payment = () => {
  const { push } = useRouter();
  const { products, totalPrice } = useSelector((state) => state);
  const { paymentMethods } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(paymentMethods[0] || "");
  return (
    <section className="w-full lg:w-3/5 sm:w-max ">
      <div className=" border-gray-200 border-2 rounded-md overflow-hidden">
        <div className="flex items-center px-4 border-b-2 py-2">
          <h1 className="text-base sm:text-2xl font-semibold ">
            Payment Details
          </h1>
        </div>
        <div className="shadow">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            <div className="flow-root">
              <ul className="-mt-4 space-y-3">
                {paymentMethods.map((item, idx) => (
                  <li key={idx}>
                    <label htmlFor={item} className="block relative">
                      <input
                        id={item}
                        type="radio"
                        defaultChecked={idx == 0 ? true : false}
                        name="payment"
                        onChange={() => setSelected(item)}
                        className="sr-only peer"
                      />
                      <div className="w-full flex gap-x-3 items-start p-4 cursor-pointer rounded-lg border  shadow-sm ring-slate-400 peer-checked:ring-2 duration-200">
                        <div>
                          <h3 className="leading-none  font-medium pr-3">
                            {item}
                          </h3>
                          <p className="mt-1 text-sm text-gray-400">
                            It's the faster, safer way to send and receive
                            money.
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-slate-400 text-white peer-checked:text-white duration-200">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 12 10">
                          <polyline
                            fill="none"
                            stroke-width="2px"
                            stroke="currentColor"
                            stroke-dasharray="16px"
                            points="1.5 6 4.5 9 10.5 1"
                          ></polyline>
                        </svg>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
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
              <p className="text-sm font-medium ">Total</p>
              <p className="text-xl font-semibold ">
                <span className="text-xs font-normal ">USD</span>{" "}
                {totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  if (selected === "") {
                    alert("Payment method not selected");
                    return;
                  }
                  dispatch(setPaymentMethod(selected));
                  push("/confirmation");
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

export default Payment;
