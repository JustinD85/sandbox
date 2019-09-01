export interface ICard {
    readonly name: string,
    readonly cost: number,
    readonly description: string,
    readonly power: number,
    readonly health: number,
    readonly img: string
}


export default function Card({ name, cost, description, power, health, img }: ICard) {
    return {
        name,
        cost,
        description,
        power,
        health,
        img
    }
}