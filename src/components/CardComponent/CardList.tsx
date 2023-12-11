import { getAllCard } from "@/pokemonAPI/pokemonAPI";
import { useState, useEffect } from "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { Card } from "./Card";
import cover from "@/Image/cover.png";
import Image from "next/image";

export const CardList = () => {
  const [pokemonData, setPokemonData] = useState<PokemonTCG.Set[]>([]);

  useEffect(() => {
    const getAllData = getAllCard().then((AllCard) => {
      setPokemonData(AllCard);
    });
  }, []);

  return (
    <div>
      <div className="py-20 container m-auto">
        <Image
          className="h-[400px] w-auto m-auto"
          src={cover}
          alt="Logo"
        ></Image>
      </div>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
          {pokemonData.map((item, index) => (
            <Card data={item} key={index}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};
