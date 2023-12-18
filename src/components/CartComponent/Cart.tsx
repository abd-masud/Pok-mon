import { useSets } from "@/reactQueryHooks/useCardSets";
import useCart, { useCartCount } from "@/reactQueryHooks/useCart";
import ShowCart from "./ShowCart";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import emptyCart from "@/Image/emptyCart.png";
import Image from "next/image";
import { StampedSet } from "@/types";
import { useEffect, useState } from "react";
import { getItem } from "@/tempStorage/storageFunction";

const CartList = () => {
  const { CartStore } = useCart();
  const cardSets = useSets();
  const { random, setRandom } = useCartCount();
  const sets = cardSets.data;

  const defaultState: { count: 0; items: StampedSet[] } = {
    count: 0,
    items: [],
  };
  const [cart, setCartCount] = useState<{ count: number; items: StampedSet[] }>(
    defaultState
  );

  let findData: Set[] = [];
  CartStore.forEach((id) => {
    const result = sets?.filter((x) => x.id === id);
    findData.push(...(result as Set[]));
  });

  useEffect(() => {
    let c = getItem("Cart");
    if (!c) c = defaultState;
    setCartCount(c);
  }, [random]);

  if (cart.count == 0) {
    return (
      <div className="min-h-[85vh] flex justify-center items-center flex-col dark:bg-gray-900">
        <p className="text-center sm:text-[25px] text-[16px] dark:text-white">
          <span className="font-bold">Oops!</span>
          <br />
          Add to cart something first...
        </p>
        <Image src={emptyCart} alt={"Empty"} priority></Image>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] dark:bg-gray-900">
      <div className="lg:px-60 py-10">
        {cart?.items.map((x, index) => (
          <ShowCart item={x} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
