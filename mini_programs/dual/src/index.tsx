import { kuru } from 'kuru'
import Home from './views/home'

const App1 = (divName: string) => {
    document.getElementById(divName).replaceWith(<Home />)
}

App1('app');