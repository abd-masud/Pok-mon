import { useSets } from "@/reactQueryHooks/useCardSets";
import useCart from "@/reactQueryHooks/useCart";
import ShowCart from "./ShowCart";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";

const CartList = () => {
  const { CartStore } = useCart();
  const cardSets = useSets();
  const sets = cardSets.data;

  let findData: Set[] = [];

  CartStore.forEach((id) => {
    const result = sets?.filter((x) => x.id === id);
    findData.push(...(result as Set[]));
  });

  return (
    <div className="min-h-[760px]">
      <div className="lg:px-60 py-10">
        {findData?.map((x, index) => (
          <ShowCart item={x} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
