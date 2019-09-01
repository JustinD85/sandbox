import { kuru } from 'kuru'
import Profile from '../components/Profile'
import Person from '../models/person'

export default () => (
    <Profile
        name={Person('Kuru').name}
        record={Person('Kuru').record}
        deck={Person('Kuru').deck}
    />
)
