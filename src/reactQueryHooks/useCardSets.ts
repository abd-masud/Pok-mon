import { QueryKeys } from "@/Enums"
import { useQuery } from "@tanstack/react-query"
import { exportTraceState } from "next/dist/trace";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript"
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk"

export const useSets = (isEnabled: boolean = false) => {
    return useQuery<PokemonTCG.Set[]>({
        queryKey: [QueryKeys.CardSets],
        queryFn:async () => {
            const sets = await getAllSets();
            return sets;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: true,
        retry: 1
    });
};