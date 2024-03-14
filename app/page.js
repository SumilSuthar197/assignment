"use client";
import { setProducts } from "@/lib/slices/cartSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  let root;
  if (typeof window !== "undefined") {
    root = document.documentElement;
  }
  const { push } = useRouter();
  const dispatch = useDispatch();
  const [theme, setTheme] = useState({
    "--background": "",
    "--foreground": "",
    "--primary": "",
    "--primary-foreground": "",
  });

  useEffect(() => {
    for (const [property, value] of Object.entries(theme)) {
      if (property == "--background") {
        root.style.backgroundColor = value;
      } else if (property == "--foreground") {
        root.style.setProperty("color", value);
      }
    }
  }, [theme]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          "https://groww-intern-assignment.vercel.app/v1/api/order-details",
          { cache: "no-store" }
        );

        dispatch(setProducts(response.data));
        const themeData = await axios.get(
          "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata",
          { cache: "no-store" }
        );
        setTheme(themeData.data.theme);
        push("/checkout");
      } catch (error) {
        console.error("Axios error: ", error);
      }
    };
    fetchOrderDetails();
    return () => {};
  }, []);

  return (
    <div className="flex h-screen items-center justify-center space-x-3">
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-800"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-800"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-800"></div>
    </div>
  );
};
export default Home;
