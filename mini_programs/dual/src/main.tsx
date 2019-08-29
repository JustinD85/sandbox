import Person from './person'

function kuru(tag, attrs, ...children) {
    return 'custom system.'
}

const HelloApp = (divName: string, name: string) => {
    const element = document.getElementById(divName);
    const joe = Person("Jody")

    element.innerText = <div> {joe.name} </div>
}

HelloApp('app', "Bob");