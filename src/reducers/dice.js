import types from '../constants/actionTypes';

const defaultState = {
    enabled: true,
    dice: [
        {sides: 6, diecolor: 'red', dotcolor: 'white', value: 1},
        {sides: 6, diecolor: 'white', dotcolor: 'black', value: 1}
    ]
};

module.exports = (state = defaultState, action) => {
    switch (action.type) {
    case types.SET_DICE_CONFIG:
        if (action.value) {
            return {
                ...state,
                ...action.value
            };
        }
        return state;
        
    case types.SET_DICE_CONFIG_ENABLED:
        return {
            ...state,
            enabled: action.value
        };

    case types.SET_DICE_CONFIG_DICE:
        return {
            ...state,
            dice: [...action.value]            
        };

    default:
        return state;
    }
}
