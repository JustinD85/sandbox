import { ADD_CARD } from "../constants";
import { ICard } from "../models/card";

export const addCard = (card: ICard) => ({
    type: ADD_CARD,
    card
})