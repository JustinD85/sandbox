import Person from './person'
import { kuru } from 'kuru'

const HelloApp = (divName: string, name: string) => {
    const element = document.getElementById(divName);
    const joe = Person(name)

    element.replaceWith(
        <div className="person">
            <div id="probably">Does this work tho? Let's ask {joe.name}</div>
            <section>
                <h1>{joe.name}'s Stats</h1>
                <section>
                    <h2>Record</h2>
                    <div>Wins: {joe.record.wins}</div>
                    <div>Losses: {joe.record.losses}</div>
                    <div>Xp: {joe.record.xp}</div>
                    <div>Level: {joe.record.level}</div>
                </section>
                <section>
                    <h2>Deck</h2>
                    <ul>
                        {Object.entries(joe.deck).map(([key, value]) => <li>{key} : {value}</li>)}
                    </ul>
                </section>
            </section>
        </div>)
}

HelloApp('app', "Bob");