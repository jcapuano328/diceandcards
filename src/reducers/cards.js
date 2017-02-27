import types from '../constants/actionTypes';

const defaultState = {
    enabled: false,
    joker: false
};

module.exports = (state = defaultState, action) => {
    switch (action.type) {
    case types.SET_CARD_CONFIG:
        if (action.value) {
            return {
                ...action.value
            };
        }
        return state;

    case types.SET_CARD_CONFIG_ENABLED:
        return {
            ...state,
            enabled: action.value
        };

    case types.SET_CARD_CONFIG_JOKER:
        return {
            ...state,
            joker: action.value
        };

    default:
        return state;
    }
}
