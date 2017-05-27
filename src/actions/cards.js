import types from '../constants/actionTypes';

export const setEnabled = (b) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_ENABLED, value: b});
}

export const setDecks = (v) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_DECKS, value: v});
}

export const setDeckAndCard = (i,d,c) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_DECK_AND_CARD, value: {index: i, deck: d, card: c}});
}