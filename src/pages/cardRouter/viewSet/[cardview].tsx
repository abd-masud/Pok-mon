import Image from "next/image";
import { getOneCard } from "@/pokemonAPI/pokemonAPI";
import { useRouter } from "next/router";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";

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

const SetComponent = ({ card }: { card: PokemonTCG.Set }) => {
  const router = useRouter();
  const setId = router.query?.cardview as string | undefined;
  const [singleCard, setSingleCard] = useState<PokemonTCG.Set>(card);
  useEffect(() => {
    //   if (router.query?.setid) {
    //     _getData(router.query?.setid as string).then((tempState) => {
    //       setSingleCard(tempState);
    //     });
    setSingleCard(card);
    //   }
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
    <div className="h-[860px] flex justify-center items-center bg-gray-500 overflow-hidden">
      <>
        <div className="bg-gray-300 md:flex py-20 rounded-xl shadow-lg">
          <div className="p-20 w-[400px] h-[300px] flex justify-center items-center md:border-r-2 border-black">
            <Image
              width={300}
              height={300}
              priority
              src={singleCard.images.logo}
              alt="Card Image"
            />
          </div>
          <div className=" p-20">
            <h1>
              <strong>Name : </strong>
              {singleCard.name}
            </h1>
            <h1>
              <strong>Printed Total : </strong>
              {singleCard.printedTotal}
            </h1>
            <h1>
              <strong>PTCGO Code : </strong>
              {singleCard.ptcgoCode}
            </h1>
            <h1>
              <strong>Series : </strong>
              {singleCard.series}
            </h1>
            <h1>
              <strong>Total : </strong>
              {singleCard.total}
            </h1>
            <h1>
              <strong>Release Date : </strong>
              {singleCard.releaseDate}
            </h1>
            <h1>
              <strong>Updated At : </strong>
              {singleCard.updatedAt}
            </h1>
          </div>
        </div>
      </>
    </div>
  );
};
export default SetComponent;
