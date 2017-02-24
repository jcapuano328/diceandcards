import types from '../constants/actionTypes';

export const setEnabled = (b) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_ENABLED, value: b});
}

export const setJoker = (b) => (dispatch) => {    
    dispatch({type: types.SET_CARD_CONFIG_JOKER, value: b});
}