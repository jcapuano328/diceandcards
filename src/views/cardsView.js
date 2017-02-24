import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {IconButton} from 'react-native-nub';
import Cards from '../services/cards';
import Images from '../res';

var CardsView = React.createClass({
    getInitialState() {        
        return {            
            cards: Cards.shuffle(),
            card: null
        };
    },    
    onDeckShuffle() {        
        this.setState({cards: Cards.shuffle(), card: null});
    },
    onCardDraw() {
        if (this.state.cards.length > 0) {
            Cards.draw();
            let card = this.state.cards.shift();
            this.setState({cards: this.state.cards, card: card});
        }
    },
    render() {		
		// card width is 74% of height
        let deck = this.state.cards && this.state.cards.length > 0 ? Images.deck : Images.empty;
        let card = Images[this.state.card] || Images.blank;		
        return (
            <View style={{flex: 1}}>
                <Image source={Images.cardtable} resizeMode={'stretch'} style={{
                    flex: 1,
                    width: null,
                    height: null,
                    backgroundColor: 'transparent'
                }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex:1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}}>
                            <TouchableOpacity onPress={this.onCardDraw}>
                                {/*<Image style={{height: 121, width: 96, resizeMode: 'stretch'}} source={deck} />*/}
                                <Image style={{height: 192, width: 142, resizeMode: 'stretch'}} source={deck} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{marginBottom: 10}}>
                            <IconButton image={Images['draw']} height={64} width={64} resizeMode='stretch' onPress={this.onCardDraw} />
                            </View>
                            <View style={{marginTop: 10}}>
                            <IconButton image={Images['shuffle']} height={64} width={64} resizeMode='stretch' onPress={this.onDeckShuffle} />
                            </View>
                        </View>
                        <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10}}>
                            <Image style={{height: 192, width: 142, resizeMode: 'stretch'}} source={card} />
                        </View>                    
                    </View>
                </Image>
            </View>
        );
    }
});

export default CardsView;