import useCart from "@/reactQueryHooks/useCart";
import Image from "next/image";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { TrashSVG } from "./TrashSVG";

const ShowCart = ({ item }: { item: Set }) => {
  const { removeId, Remove } = useCart();

  return (
    <div className="grid grid-cols-5 m-5 border-2 border-gray-400 bg-gray-300 shadow-lg shadow-gray-700 h-32">
      <div className="flex justify-center items-center">
        <Image
          src={item.images.logo}
          alt={"images"}
          height={80}
          width={80}
          priority={true}
        />
      </div>
      <div className="flex justify-start items-center col-span-3 pl-5">
        <p><span className="font-bold">Name : </span>{item?.name}</p>
      </div>

      <div className="flex justify-center items-center">
        <button
          className="fill-white flex justify-center items-center form-button clear w-10 h-10 bg-rose-600 hover:bg-rose-700 transition"
          type="button"
          onClick={() => {
            Remove();
            removeId(item.id);
          }}
        >
          <TrashSVG></TrashSVG>
        </button>
      </div>
    </div>
  );
};

export default ShowCart;
