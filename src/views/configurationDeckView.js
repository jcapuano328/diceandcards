import React from 'react';
import { TouchableOpacity,Image } from 'react-native';
import { View, Container, Content, CheckBox, Text, Radio, Button, Icon } from 'native-base';
import Spinner from 'rn-spinner';
import Style from '../services/style';
import Dice from '../services/dice';
import Images from '../res';

/*

|--------------------------------------------------------------------------------------------------------|
|                                                                                                        |
|  <suits x hearts x diamonds x clubs x spades x all> <face cards> <jokers> <face cards <remove button>  |
|                                                                                                        |
|--------------------------------------------------------------------------------------------------------|

*/

var ConfigurationDeckView = React.createClass({
    onJokersChanged(v) {        
        this.props.onChanged && this.props.onChanged(this.props.deck, {
            jokers: +v,
            color: this.props.color,
            suits: this.props.suits,
            facecards: this.props.facecards
        });        
    },    
    onSuitChanged(s,b) {
        let suits = [...this.props.suits];
        if (!b) {
            suits = suits.filter((suit) => suit != s);
        } else {
            suits.push(s);
        }

        this.props.onChanged && this.props.onChanged(this.props.deck, {
            jokers: this.props.jokers,
            color: this.props.color,
            suits: suits,
            facecards: this.props.facecards
        });        
    },
    onFaceCardsChanged(v) {
        this.props.onChanged && this.props.onChanged(this.props.deck, {
            jokers: this.props.jokers,
            color: this.props.color,
            suits: this.props.suits,
            facecards: v
        });
    },
    onRemove() {        
        this.props.onRemove && this.props.onRemove(this.props.deck);
    },    
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start'}}>
                <View style={{flex:3.5,flexDirection:'row',justifyContent:'space-between'}}>
                {['hearts','diamonds','clubs','spades'].map((s,i) => 
                    <View key={i} style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <CheckBox checked={this.props.suits.includes(s)} 
                                onPress={() => this.onSuitChanged(s,!this.props.suits.includes(s))} />
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{height: 24, width: 24, resizeMode: 'stretch'}} source={Images[s]} />
                        </View>                        
                    </View>
                )}
                </View>     
                <View style={{flex:2,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{paddingRight:2}}>Jokers</Text>
                    <Spinner max={10} min={0} default={this.props.jokers} onNumChange={this.onJokersChanged} />
                </View>                        
                <View style={{flex:2,flexDirection:'row',justifyContent:'center'}}>
                    <CheckBox checked={this.props.facecards} onPress={() => this.onFaceCardsChanged(!this.props.facecards)} />
                    <Text style={{paddingLeft:15}}>Face Cards</Text>
                </View>                                                                        
                <View style={{flex:.5,justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={this.onRemove}>
                        <Icon name='md-close-circle' style={{color:'red'}} />
                    </TouchableOpacity>
                    {/* remove button                                
                    <Button danger rounded transparent small onPress={this.onRemove}>
                        <Icon name='md-close-circle' />
                    </Button>         
                    */}
                </View>                
            </View>
        );
    },
    iconName(s) {
        if (s == 'hearts') {
            return 'md-heart';
        }
        if (s == 'diamonds') {
            return 'md-diamond';
        }
        if (s == 'clubs') {
            return 'md-club';
        }
        if (s == 'spades') {
            return 'md-spade';
        }
    },
    iconColor(s) {
        if (s == 'hearts' || s == 'diamonds') {
            return 'red';
        }
        return 'black';
    }    
});

module.exports = ConfigurationDeckView;
