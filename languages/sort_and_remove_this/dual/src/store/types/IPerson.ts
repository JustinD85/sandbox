import { ICard } from './ICard'


export interface IPerson {
    name: string,
    readonly record: {
        level: number,
        xp: number,
        wins: number,
        losses: number
    },
    readonly deck: ICard[]
}

export default (name: IPerson['name']): IPerson => ({
    name,
    record: {
        level: 0,
        xp: 0,
        wins: 0,
        losses: 0
    },
    deck: []
})