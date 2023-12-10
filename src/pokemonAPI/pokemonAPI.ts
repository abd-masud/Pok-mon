import { PokemonTCG } from "pokemon-tcg-sdk-typescript"

export const getAllCard = async () => {
    const AllCard = await PokemonTCG.getAllSets();
    return AllCard;
}

export const getOneCard = async (setId: string) => {
    const OneCard = await PokemonTCG.findSetByID(setId);
    return OneCard;
}

export const editName = async (setId: string, setName: string) => {
    return{
        message: "name changed",
    };
};