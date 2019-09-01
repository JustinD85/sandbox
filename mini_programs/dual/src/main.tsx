import { kuru } from 'kuru'
import Person from './models/person'
import Home from './views/home'

const App1 = (divName: string) => {
    document.getElementById(divName).replaceWith(<Home />)
}

App1('app');
// const joe = Person(name)
{/* <div className="person">
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
</div> */}