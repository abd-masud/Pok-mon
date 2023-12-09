import { QueryKeys } from "@/Enums";
import { getOneCard } from "@/pokemonAPI/pokemonAPI";
import { Card } from "@/components/CardComponent/Card";
import { useSets } from "@/reactQueryHooks/useCardSets";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";
import cover from "@/Image/cover.png";
import Image from "next/image";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: { dehydratedState: DehydratedState } }> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await getAllSets();
      return sets;
    },
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default function CardSets(props: { set: PokemonTCG.Set[] }) {
  const setObject = useSets();
  const sets = setObject.data;

  return (
    <div className="bg-gray-300">
      <div className="py-40 px-[10%] container m-auto">
        <Image
          className="h-auto w-auto m-auto"
          src={cover}
          alt="Logo"
        ></Image>
      </div>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
          {sets ? (
            sets.map((item, index) => <Card data={item} key={index}></Card>)
          ) : (
            <>
              <div className="transition hover:-translate-y-3 2xl:mx-12 xl:mx-4 md:mx-12 mb-16">
                <div className="card">Loading</div>
              </div>

              <div className="transition hover:-translate-y-3 2xl:mx-12 xl:mx-4 md:mx-12 mb-16">
                <div className="card">Loading</div>
              </div>

              <div className="transition hover:-translate-y-3 2xl:mx-12 xl:mx-4 md:mx-12 mb-16">
                <div className="card">Loading</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function dehydrated(queryClient: QueryClient): DehydratedState {
  throw new Error("Function not implemented.");
}
