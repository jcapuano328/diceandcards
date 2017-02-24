import { Store } from 'react-native-nub';
import rootReducer from '../reducers';
/*  the "store" will look like so:
    {
        info: {
            version: string,
            releasedate: datetime
        },
        toast: {
            active: bool,
            message: string,
            duration: integer
        },
        dice: { 
            enabled: bool,
            numsides: int,           
            numdice: int
        },
        cards: {
            enabled: bool,
            joker: bool
        }
    }
*/
const store = Store(rootReducer);

export default store;