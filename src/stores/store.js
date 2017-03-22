import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk';
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
            dice: [
                {sides: int, diecolor: string, dotcolor: string, value: int}
            ]
        },
        cards: {
            enabled: bool,
            joker: bool,
            deck: [string],
            card: string
        }
    }
*/

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares),autoRehydrate())(createStore)(rootReducer);

persistStore(store, { storage: AsyncStorage });

export default store;