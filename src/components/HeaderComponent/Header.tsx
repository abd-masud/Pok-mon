import React, { useContext } from "react";
import useCount from "@/reactQueryHooks/useCount";
import pokemon from "@/Image/pokemon.png";
import Image from "next/image";
import Link from "next/link";
import HeaderSVG from "../CartSVG";
import useLogin from "@/reactQueryHooks/useLogin";

export default function HeaderComponent() {
  const { login } = useLogin();
  const { count } = useCount();
  return (
    <main className="bg-black text-white sticky top-0 z-10">
      <div className="container m-auto grid grid-cols-3">
        <div className="flex items-center ml-3">
          <HeaderSVG></HeaderSVG>
          {count}
          <div></div>
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
          <Link href="/LoginComponent/">
            <button className="transition bg-gray-700 hover:bg-gray-600 py-1 px-5 rounded-md">
              {login}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
