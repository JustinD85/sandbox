import { kuru } from 'kuru'
import { IPerson } from '../store/types/IPerson';

export default ({ name, record, deck }: IPerson) => (
    <div className="person">
        <section>
            <h1>{name}'s Stats</h1>
            <section>
                <h2>Record</h2>
                <div>Wins: {record.wins}</div>
                <div>Losses: {record.losses}</div>
                <div>Xp: {record.xp}</div>
                <div>Level: {record.level}</div>
            </section>
            <section>
                <h2>Deck</h2>
                <ul>
                    {Object.entries(deck)
                        .map(([key, value]) => <li>{key} : {value}</li>)}
                </ul>
            </section>
        </section>
    </div>
)