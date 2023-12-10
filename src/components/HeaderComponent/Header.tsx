import useCart from "@/reactQueryHooks/useCart";
import pokemon from "@/Image/pokemon.png";
import Image from "next/image";
import Link from "next/link";
import useLogin from "@/reactQueryHooks/useLogin";
import CartSVG from "./CartSVG";
import { useRouter } from "next/router";

export default function HeaderComponent() {
  const router = useRouter();
  const { count } = useCart();
  const { login } = useLogin();
  const { username, updateLogin, updateUsername } = useLogin();
  return (
    <main className="bg-black text-white sticky top-0 z-10">
      <div className="container m-auto grid grid-cols-3">
        <div className="ml-3 my-auto flex items-center">
          <button
            onClick={(e) => {
              router.push("/CartComponent/");
            }}
            type="button"
            className="flex items-center transition bg-gray-900 hover:bg-gray-800 py-1 px-5 rounded-md"
          >
            <CartSVG></CartSVG>
            {count}
          </button>
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
          <button
            onClick={(e) => {
              updateLogin("Login");
              updateUsername("");
              router.push("/LoginComponent");
            }}
            className="transition bg-gray-700 hover:bg-gray-600 py-1 px-5 rounded-md ml-5"
            type="submit"
          >
            {login}
          </button>
        </div>
      </div>
    </main>
  );
}
