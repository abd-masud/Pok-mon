import Image from "next/image";
import { getOneCard } from "@/pokemonAPI/pokemonAPI";
import { useRouter } from "next/router";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import Link from "next/link";
import useCart from "@/reactQueryHooks/useCart";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  const data = await getAllSets();
  const tempPaths = data.map((x) => x.id);
  let tempParams: { params: { cardview: any } }[] = [];
  tempPaths.forEach((x) => {
    tempParams.push({ params: { cardview: x } });
  });
  return {
    paths: tempParams.splice(0, 5),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  let card = {};
  try {
    card = await getOneCard(context.params?.cardview as string);
  } catch (e) {
    return {
      props: {},
      revalidate: 120,
    };
  }

  return {
    props: { card },
    revalidate: 120,
  };
};

const setShowModal = ({ card }: { card: PokemonTCG.Set }) => {
  const { AddToCart } = useCart();
  const router = useRouter();

  const setId = router.query?.cardview as string | undefined;
  const [singleCard, setSingleCard] = useState<PokemonTCG.Set>(card);
  useEffect(() => {
    setSingleCard(card);
  }, [card]);
  if (router.isFallback) {
    return (
      <div className="h-[860px] bg-gray-300 flex justify-center items-center">
        <h1 className="text-[35px] px-[320px] py-[140px]">Loading...</h1>
      </div>
    );
  }
  if (!card) {
    return (
      <main className="h-[860px] flex justify-center items-center overflow-y-hidden bg-gray-300">
        <h3 className="text-center text-[60px]">No items found :(</h3>
      </main>
    );
  }
  return (
    <div className="h-[860px] flex justify-center items-center bg-gray-300 overflow-hidden">
      <>
        <div className="bg-white py-14 rounded-xl shadow-lg shadow-black/50">
          <div className="md:flex">
            <div className="p-20 w-[400px] h-[300px] flex justify-center items-center">
              <Image
                width={300}
                height={300}
                priority
                src={singleCard.images.logo}
                alt="Card Image"
              />
            </div>
            <div className="md:border-l-2 border-black px-14 pr-24 py-2 mb-10">
              <p className="py-2">
                <strong>Name : </strong>
                {singleCard.name}
              </p>
              <p className="py-2">
                <strong>Printed Total : </strong>
                {singleCard.printedTotal}
              </p>
              <p className="py-2">
                <strong>PTCGO Code : </strong>
                {singleCard.ptcgoCode}
              </p>
              <p className="py-2">
                <strong>Series : </strong>
                {singleCard.series}
              </p>
              <p className="py-2">
                <strong>Total : </strong>
                {singleCard.total}
              </p>
              <p className="py-2">
                <strong>Release Date : </strong>
                {singleCard.releaseDate}
              </p>
              <p className="py-2">
                <strong>Updated At : </strong>
                {singleCard.updatedAt}
              </p>
            </div>
          </div>

          <div className="w-[500px] m-auto">
            <div className="px-10 grid grid-cols-2">
              <div className="flex justify-start">
                <button
                  className="form-button submit w-32"
                  type="button"
                  onClick={() => AddToCart()}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex justify-end">
                <Link href={"/"}>
                  <button
                    className="form-button clear w-32 justify-end"
                    type="button"
                  >
                    Close
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default setShowModal;
