import React, { useContext } from "react";
import useCount from "@/reactQueryHooks/useCart";
import pokemon from "@/Image/pokemon.png";
import Image from "next/image";
import Link from "next/link";
import useLogin from "@/reactQueryHooks/useLogin";
import CartSVG from "../CartSVG";

export default function HeaderComponent() {
  const { login } = useLogin();
  const { username } = useLogin();
  const { count } = useCount();
  return (
    <main className="bg-black text-white sticky top-0 z-10">
      <div className="container m-auto grid grid-cols-3">
        <div className="ml-3 my-auto">
          <div className="flex items-center">
            <button
              id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center transition bg-gray-900 hover:bg-gray-800 py-1 px-5 rounded-md"
            >
              <CartSVG></CartSVG>
              {count}
            </button>
          </div>

          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
              </ul>
          </div>

        </div>
        <div className="flex justify-center items-center">
          <Link href={"/"}>
            <Image
              className="h-auto w-48 my-2"
              src={pokemon}
              alt="Logo"
            ></Image>
          </Link>
        </div>
        <div className="flex justify-end items-center mr-3">
          {username}
          <Link className="ml-10" href="/LoginComponent/">
            <button className="transition bg-gray-700 hover:bg-gray-600 py-1 px-5 rounded-md">
              {login}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
