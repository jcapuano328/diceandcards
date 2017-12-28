import Sound from './sound';
import Images from '../res';

let shuffle = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
	return a;
}

let contains = (opts) => {
    let o = {...opts};
    let a = [
        "ace",
        "duece",	
        "trey",	
        "four",	
        "five",	
        "six",	
        "seven",	
        "eight",	
        "nine",	
        "ten",	
        "jack",	
        "queen",	
        "king"  
    ].filter((c) => o.facecards || (c != 'jack' && c != 'queen' && c != 'king' /*&& c != 'ace'*/));        
    let deck = [];
    while (o.jokers-- > 0)
        deck.push('joker-' + ((o.jokers % 2 == 0) ? 'black':'red'));         
    o.suits.filter((s) => {
        if (o.color == 'red') {
            return s == 'diamonds' || s == 'hearts';
        } 
        if (o.color == 'black') {
            return s == 'clubs' || s == 'spades';
        } 
        return true;      
    }).forEach((s) => {
        a.forEach((c) => {
            deck.push(c+s);
        });
    });
    
    return (s) => {
        return deck.some((e) => s.includes(e));
    }
}

module.exports = {
    draw(deck) {
        Sound.play('carddraw.wav');
        return deck.shift();        
    },
    shuffle(opts) {
        opts = opts || {};
        let defopts = {
            jokers: 0,
            color: null,
            suits: ['diamonds','clubs','hearts','spades'],
            facecards: true            
        };
        let o = {
            ...defopts,
            ...opts
        };        
        Sound.play('cardshuffle.wav');             
        return shuffle(Object.keys(Images||{}).filter(contains(o)));
    }
}
