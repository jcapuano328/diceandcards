import {Repository} from 'react-native-nub';
let store = Repository('diceandcards.app.config');

module.exports = {
	load() {		
		return store.load()
		.then((config) => {        	
		return config || {};
		});
	},
	save(config) {
		return store.save(config);
	},
	remove() {
		return store.remove();
	}
};
