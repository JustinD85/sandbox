import { kuru } from 'kuru'
import Profile from '../containers/ProfileContainer'
import  BattleField  from '../containers/BattleField'

export default () => (
    <main>
        <h1>Dual</h1>
        <section>
            Battle!
        </section>
        <Profile />
        <BattleField />
    </main>
)