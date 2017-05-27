import types from '../constants/actionTypes';

const defaultState = {
    enabled: false,
    decks: [
        {jokers: 1,suits: ['hearts','diamonds','clubs','spades'],facecards: true,deck: [],card: null}
    ]
};

module.exports = (state = defaultState, action) => {
    switch (action.type) {
    case types.SET_CARD_CONFIG_ENABLED:
        return {
            ...state,
            enabled: action.value
        };

    case types.SET_CARD_CONFIG_DECKS:
        return {
            ...state,
            decks: [...action.value]            
        };

    case types.SET_CARD_CONFIG_DECK_AND_CARD:
        let decks = [...state.decks];
        decks[action.value.index] = {
            ...decks[action.value.index],
            deck: action.value.deck,
            card: action.value.card            
        };
        return {
            ...state,
            decks: decks
        };

    default:
        return state;
    }
}
