import { combineReducers } from 'redux';
import info from './info';
import toast from './toast';
import dice from './dice';
import cards from './cards';

module.exports = combineReducers({
    dice: dice,
    cards: cards,
    info: info,
    toast: toast
});
