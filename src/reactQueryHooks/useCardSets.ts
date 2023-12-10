import { QueryKeys } from "@/Enums"
import { getAllCard, getOneCard } from "@/pokemonAPI/pokemonAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { exportTraceState } from "next/dist/trace";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript"
import { findSetByID, getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk"

export const useSets = () => {
    return useQuery<PokemonTCG.Set[]>({
        queryKey: [QueryKeys.CardSets],
        queryFn: async () => {
            const sets = await getAllCard();
            return sets;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: true,
        retry: 1
    });
};

export const useCards = (id: string) => {
    return useQuery({
      queryKey: [QueryKeys.CardSets],
      queryFn: async () => {
        const singleCard = await getOneCard(id);
        return singleCard;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      enabled: true,
    });
};

