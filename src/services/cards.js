import Sound from './sound';
import Images from '../res';

let shuffle = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
	return a;
}

let contains = (s) => {
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
    ];

    return a.some((e) => s.includes(e));
}

module.exports = {
    draw() {
        Sound.play('carddraw.wav');
    },
    shuffle() {
        Sound.play('cardshuffle.wav');
        return shuffle(Object.keys(Images||{}).filter(contains));
    }
}