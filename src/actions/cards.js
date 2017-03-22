import types from '../constants/actionTypes';

export const setEnabled = (b) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_ENABLED, value: b});
}

export const setJoker = (b) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_JOKER, value: b});
}

export const setDeck = (v) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_DECK, value: v});
}

export const setCard = (v) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_CARD, value: v});
}

export const setDeckAndCard = (d,c) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_DECK_AND_CARD, value: {deck: d, card: c}});
}