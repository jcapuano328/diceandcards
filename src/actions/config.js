import types from '../constants/actionTypes';
import {toast} from './toast';
import Config from '../services/config';

export const load = () => (dispatch) => {
    return Config.load()
    .then((data) => {
        dispatch({type: types.SET_DICE_CONFIG, value: data.dice});
        dispatch({type: types.SET_CARD_CONFIG, value: data.cards});
    })
    .catch((err) => {
        console.error(err);
        toast(err.message || err)(dispatch);
    });
}

export const save = () => (dispatch,getState) => {
    const {dice,cards} = getState();
    return Config.save({dice: dice, cards: cards})
    .catch((err) => {
        console.error(err);
        toast(err.message || err)(dispatch);
    });
}

export const remove = () => (dispatch) => {
    return Config.remove()
    .then(() => {
        dispatch({type: types.SET_DICE_CONFIG, value: null});
        dispatch({type: types.SET_CARD_CONFIG, value: null});
    })
    .catch((err) => {
        console.error(err);
        toast(err.message || err)(dispatch);
    });
}
