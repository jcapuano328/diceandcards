import React from 'react';
import { View,Text,Image } from 'react-native';
import {CheckBox,SpinNumeric,IconButton} from '../widgets';
//import Spinner from 'rn-spinner';
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
            <View style={{flex:1,flexDirection:'row',paddingTop:2,borderWidth:1,borderColor:'rgba(211,211,211,1)',backgroundColor: 'rgba(211,211,211,0.4)'}}>
                <View style={{flex:4}}>
                    <View style={{flex: 1, justifyContent:'flex-start'}}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        {['hearts','diamonds','clubs','spades'].map((s,i) => 
                            <View key={i} style={{flex:1,flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <CheckBox selected={this.props.suits.includes(s)} onSelected={() => this.onSuitChanged(s,!this.props.suits.includes(s))} />
                                </View>
                                <View style={{flex:1}}>
                                    <Image style={{height: 24, width: 24, resizeMode: 'stretch'}} source={Images[s]} />
                                </View>                        
                            </View>
                        )}
                        </View>     
                        <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start'}}>
                            <View style={{flex:3,flexDirection:'row',justifyContent:'center'}}>                                
                                <SpinNumeric label={'Jokers'} value={(this.props.jokers||0).toString()} min={0} max={10} onChanged={this.onJokersChanged} />
                                {/*
                                <Text style={{paddingRight:2}}>Jokers</Text>
                                <Spinner max={10} min={0} default={this.props.jokers} onNumChange={this.onJokersChanged} />                                
                                */}
                            </View>                        
                            <View style={{flex:2,flexDirection:'row',justifyContent:'center'}}>
                                <CheckBox label={'Face Cards'} labelpos={'right'} selected={this.props.facecards} onSelected={() => this.onFaceCardsChanged(!this.props.facecards)} />
                            </View>                                                                        
                        </View>
                    </View>                
                </View>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <IconButton image={'remove'} width={24} height={24} resizeMode={'contain'} onPress={this.onRemove}/>
                </View>                                
            </View>
        );
    }
});

module.exports = ConfigurationDeckView;
