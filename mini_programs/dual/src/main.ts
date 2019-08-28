import Person from './person'

const HelloApp = (divName: string, name: string) => {
    const element = document.getElementById(divName);
    const joe = Person("Joe")
    element.innerText = `${joe.name}`
}

HelloApp('app', "Bob");