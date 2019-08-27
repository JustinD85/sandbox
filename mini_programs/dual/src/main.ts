import { hello } from './greet'


const HelloApp = (divName: string, name: string) => {
    const element = document.getElementById(divName);
    element.innerText = hello(name);
}

HelloApp('greeting', "Justin Duncan");