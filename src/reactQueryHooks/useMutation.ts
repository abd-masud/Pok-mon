// import { QueryKeys } from "@/Enums";
// import { editName } from "@/pokemonAPI/pokemonAPI";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

// export const useEditName = (initialSets: PokemonTCG.Set[]) => {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: ({setId, setName}: {setId: string; setName: string}) =>
//         editName(setId,setName),
//         onSuccess:(params, variables) => {
//             console.log("Successful");
//             if(initialSets) {
//                 queryClient.setQueryData([QueryKeys.CardSets], () => {
//                     let foundset = initialSets?.find((set) => set.id === variables.setId);
//                     if(foundset) {
//                         foundset.name = variables.setName;
//                     }
//                     console.log(initialSets);
//                     return [...initialSets];
//                 });
//             }
//         },
//         onError: (err) => {
//             console.log(err);
//         },
//     });
// };