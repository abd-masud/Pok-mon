import { QueryKeys } from "@/Enums";
import { editName } from "@/pokemonAPI/pokemonAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const useEditName = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({setId, setName}: {setId: string; setName: string}) =>
        editName(setId,setName),
        onSuccess:(params, variables) => {
            queryClient.setQueryData(
                [QueryKeys.CardSets],
                (initialSets: PokemonTCG.Set[]) => {
                    let foundSet = initialSets?.find((set) => set.id === variables.setId);
                    if(foundSet) {
                        foundSet.name = variables.setName;
                    }
                    return initialSets;
                }
            )
        },
        onError: (err) => {
            console.log(err);
        },
    });
};