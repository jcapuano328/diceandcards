import types from '../constants/actionTypes';

export const setEnabled = (b) => (dispatch) => {    
    dispatch({type: types.SET_DICE_CONFIG_ENABLED, value: b});
}

export const setSides = (n) => (dispatch) => {        
    dispatch({type: types.SET_DICE_CONFIG_SIDES, value: n});
}

export const setNumber = (n) => (dispatch) => {        
    dispatch({type: types.SET_DICE_CONFIG_NUM, value: n});
}
