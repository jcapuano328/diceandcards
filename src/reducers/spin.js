import {REHYDRATE} from 'redux-persist/constants';
import types from '../constants/actionTypes';

let getValues = (v,c) => {
    let values = v.slice(0, c);
    for (var i = values.length; i<c; i++) {
        values.push(0);
    }
    return values;
}


const defaultState = {
    enabled: true,
    number: 1,
    values: [0]
};

module.exports = (state = defaultState, action) => {
    switch (action.type) {
    case REHYDRATE:
        if (action.payload.spin) {
            return {
                ...state,
                ...action.payload.spin                
            };            
        }
        return state;
        
    case types.SET_SPIN_CONFIG_ENABLED:
        return {
            ...state,
            enabled: action.value
        };

    case types.SET_SPIN_CONFIG_NUMBER:
        return {
            ...state,
            number: action.value,
            values: [...getValues(state.values,action.value)]
        };

    case types.SET_SPIN_CONFIG_FOLLOWDICE:
        return {
            ...state,
            followdice: action.value
        };


    case types.SET_SPIN_CONFIG_VALUES:
        return {
            ...state,
            values: [...action.value]
        };

    case types.SET_SPIN_CONFIG_VALUE:
        let l = [...state.values];
        l[action.value.index] = action.value.value;
        return {
            ...state,
            values:  l
        };

    default:
        return state;
    }
}
