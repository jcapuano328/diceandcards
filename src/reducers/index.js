import { combineReducers } from 'redux';
import info from './info';
import toast from './toast';
import dice from './dice';
import spin from './spin';
import cards from './cards';

module.exports = combineReducers({
    dice: dice,
    spin: spin,
    cards: cards,
    info: info,
    toast: toast
});
