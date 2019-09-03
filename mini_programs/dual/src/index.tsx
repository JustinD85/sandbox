import { kuru } from 'kuru'
//create dom handler library, import here
import Home from './views/home'


const App1 = (divName: string) => {
    //For state reconcilliation and updating I need to keep a ref to this
    document.getElementById(divName).replaceWith(<Home />)
}

App1('app');

//hold root node
//anytime a value changes
  //re-render