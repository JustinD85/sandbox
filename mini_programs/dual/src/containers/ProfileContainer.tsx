import { kuru } from 'kuru'
import Profile from '../components/Profile'
import Person from '../store/types/IPerson'

//Will access a data source later...
export default () => (
  <div>
    <Profile {...Person('Mio')} />
    <br/>
    <Profile {...Person('Kuru')} />
    <br/>
    <Profile {...Person('Jay')} />
  </div>
)
