import React from 'react';
import { connect } from 'react-redux';
import { View, Image, TouchableOpacity } from 'react-native';
import IconButton from '../components/iconButton';
import Cards from '../services/cards';
import {setDeckAndCard} from '../actions/cards';

import Images from '../res';

var CardsView = React.createClass({
    getInitialState() {        
        return {      
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            viewHeight: 100
        };
    },    
    onLayout(e) {                
        if (this.state.width == 0) {
            this.setState({
                x: e.nativeEvent.layout.x,
                y: e.nativeEvent.layout.y,
                width: e.nativeEvent.layout.width,
                height: e.nativeEvent.layout.height
            });
        }
    },    
    onDeckShuffle() {    
        this.props.setDeckAndCard(Cards.shuffle(this.props.includejoker), null);
    },
    onCardDraw() {
        if (this.props.deck.length > 0) {
            let card = Cards.draw(this.props.deck);
            this.props.setDeckAndCard(this.props.deck, card);
        }
    },
    render() {		
		// card width is 74% of height; card height is 126% of card width
        let cwidth = (this.state.width * 0.85) || 96;
        let cheight = cwidth * 1.26;
        let bsize = cwidth * 0.66;
        let deck = this.props.deck.length > 0 ? Images.deck : Images.empty;
        let card = Images[this.props.card] || Images.blank;		        
        return (
            <View style={{flex: 1}}>
                <Image source={Images.cardtable} resizeMode={'stretch'} style={{
                    flex: 1,
                    width: null,
                    height: null,
                    backgroundColor: 'transparent'
                }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex:1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}} onLayout={this.onLayout}>
                            <TouchableOpacity onPress={this.onCardDraw}>
                                {/*<Image style={{height: 121, width: 96, resizeMode: 'stretch'}} source={deck} />*/}
                                <Image style={{height: cheight, width: cwidth, resizeMode: 'stretch'}} source={deck} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{marginBottom: 10}}>
                            <IconButton image={Images['draw']} height={bsize} width={bsize} resizeMode='stretch' onPress={this.onCardDraw} />
                            </View>
                            <View style={{marginTop: 10}}>
                            <IconButton image={Images['shuffle']} height={bsize} width={bsize} resizeMode='stretch' onPress={this.onDeckShuffle} />
                            </View>
                        </View>
                        <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10}}>
                            <Image style={{height: cheight, width: cwidth, resizeMode: 'stretch'}} source={card} />
                        </View>                    
                    </View>
                </Image>
            </View>
        );
    }
});

const mapStateToProps = (state) => ({    
    includejoker: state.cards.joker,
    deck: state.cards.deck || [],
    card: state.cards.card
});

const mapDispatchToProps =  ({setDeckAndCard});


module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(CardsView);
