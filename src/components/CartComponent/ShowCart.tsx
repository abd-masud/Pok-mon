import useCart from "@/reactQueryHooks/useCart";
import Image from "next/image";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";

const ShowCart = ({ item }: { item: Set }) => {
  const { removeId, Remove } = useCart();

  return (
    <div className="grid grid-cols-3 m-5 border-2 border-gray-400">
      <div className="flex justify-start items-center sm:m-10 m-5">
        <Image
          src={item.images.logo}
          alt={"images"}
          width={200}
          height={200}
          priority={true}
        />
      </div>
      <div className="flex justify-start items-center m-10">
        <p><span className="font-bold">Name : </span>{item?.name}</p>
      </div>

      <div className="flex justify-end items-center m-10">
        <button
          className="text-white form-button clear w-10 bg-rose-600 hover:bg-rose-500 transition"
          type="button"
          onClick={() => {
            Remove();
            removeId(item.id);
          }}
        >
          &#9747;
        </button>
      </div>
    </div>
  );
};

export default ShowCart;
