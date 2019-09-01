import { kuru } from 'kuru'
import Profile from '../components/Profile'
import Person from '../models/person'

//Will access a data source later...
export default () => <Profile {...Person('Mio')} />
