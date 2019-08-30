import Person from './person'
import { kuru } from 'kuru'
import { type } from 'os';

//TODO: Commit to npm package
// function kuru(tagOrNodeFunction, attrs: any, ...children: any[]) {
//     if (typeof tagOrNodeFunction === 'function') return tagOrNodeFunction()//this allows for custom JSX functions(Components)
//     if (Array.isArray(children[0])) children = children[0]//this allow for jsx to be put in array and rendered still

//     return children.reduce((element, child) => (
//         child instanceof HTMLElement && element.appendChild(child),
//         (typeof child === 'string' || typeof child === 'number') && (element.appendChild(document.createTextNode(String(child)))),
//         element),//returns the mutated element
//         Object.assign(document.createElement(tagOrNodeFunction), attrs))//this allows attributes on elements, ie. class,id,etc..
// }

const HelloApp = (divName: string, name: string) => {
    const element = document.getElementById(divName);
    const joe = Person(name)

    element.replaceWith(
        <div className="foo">
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