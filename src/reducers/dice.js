import types from '../constants/actionTypes';

const defaultState = {
    enabled: true,
    numsides: 6,           
    numdice: 6
};

module.exports = (state = defaultState, action) => {
    switch (action.type) {
    case types.SET_DICE_CONFIG:
        if (action.value) {
            return {
                ...action.value
            };
        }
        return state;
        
    case types.SET_DICE_CONFIG_ENABLED:
        return {
            ...state,
            enabled: action.value
        };

    case types.SET_DICE_CONFIG_SIDES:
        return {
            ...state,
            numsides: action.value
        };

    case types.SET_DICE_CONFIG_NUM:
        return {
            ...state,
            numdice: action.value
        };

    default:
        return state;
    }
}
