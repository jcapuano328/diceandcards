import types from '../constants/actionTypes';

const defaultState = {
    enabled: true,
    joker: false,
    deck: [],
    card: null
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

    case types.SET_CARD_CONFIG_DECK:
        return {
            ...state,
            deck: action.value
        };

    case types.SET_CARD_CONFIG_CARD:
        return {
            ...state,
            card: action.value
        };

    case types.SET_CARD_CONFIG_DECK_AND_CARD:
        return {
            ...state,
            deck: action.value.deck,
            card: action.value.card
        };

    default:
        return state;
    }
}
