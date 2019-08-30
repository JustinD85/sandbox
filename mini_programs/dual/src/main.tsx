import Person from './person'

//TODO: Commit to npm package
function kuru(tagOrNodeFunction: any, attrs: any, ...children: any[]) {
    if (typeof tagOrNodeFunction === 'function') return tagOrNodeFunction()
    if (typeof tagOrNodeFunction !== 'string') return

    return children.reduce((element, child) => (
        child instanceof HTMLElement && element.appendChild(child),
        typeof child === 'string' && (element.appendChild(document.createTextNode(child))),
        element),
        Object.assign(document.createElement(tagOrNodeFunction), attrs))
}

const HelloApp = (divName: string, name: string) => {
    const element = document.getElementById(divName);
    const joe = Person("Jody")

    element.replaceWith(
        <div className="foo">
            <div id="probably">Does this work tho? Let's ask {joe.name}</div>
        </div>)
}

HelloApp('app', "Bob");