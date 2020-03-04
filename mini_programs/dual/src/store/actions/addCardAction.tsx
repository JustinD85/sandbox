import { ADD_CARD } from "../constants";
import { ICard } from "../types/ICard";

export const addCardAction = (card: ICard) => (
    {
        type: typeof ADD_CARD,
        payload: card
    }
)

//Usage
// var anAction = addCardAction({ name: 'joe', cost: 1, description: 'descript', power: 2, health: 3, img: 'img.com/png' })