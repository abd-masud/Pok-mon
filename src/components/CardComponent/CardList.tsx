import { getAllCard } from "@/pokemonAPI/pokemonAPI";
import { useState, useEffect } from "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { Card } from "./Card";

export const CardList = () => {
  const [pokemonData, setPokemonData] = useState<PokemonTCG.Set[]>([]);

  useEffect(() => {
    const getAllData = getAllCard().then((AllCard) => {
      setPokemonData(AllCard);
    });
  }, []);

  return (
    <div>
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