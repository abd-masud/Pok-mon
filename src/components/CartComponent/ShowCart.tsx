import useCart from "@/reactQueryHooks/useCart";
import Image from "next/image";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";

const ShowCart = ({ item }: { item: Set }) => {
  const { removeId, Remove } = useCart();

  return (
    <div className="pt-20 ml-[400px]">
      <div className="grid grid-cols-3">
        <div className="ml-3 mb-3 flex items-center border-2 border-gray-400 py-10 px-20">
          <Image
            src={item.images.logo}
            alt={"images"}
            width={100}
            height={100}
            priority={true}
          />
          <h2 className="text-xl mt-2 mx-10">Name: {item?.name}</h2>

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
    </div>
  );
};

export default ShowCart;
