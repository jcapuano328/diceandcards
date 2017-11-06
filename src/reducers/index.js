import { combineReducers } from 'redux';
import info from './info';
import toast from './toast';
import dice from './dice';
import spin from './spin';
import odds from './odds';
import cards from './cards';

module.exports = combineReducers({
    dice: dice,
    spin: spin,
    odds: odds,
    cards: cards,
    info: info,
    toast: toast
});
