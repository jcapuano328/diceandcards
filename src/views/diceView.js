import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import {DiceRoll} from 'react-native-dice';
import Dice from '../services/dice';
import Images from '../res';

var DiceView = React.createClass({
    dice: [],
    getInitialState() {
        return this.buildDice();
    },    
    buildDice(state) {
        state = state || {};
        if (state.number != this.props.number || state.sides != this.props.sides) {
            let prevstate = {
                ...this.state
            };
            
            state.number = this.props.number;
            state.sides = this.props.sides;
            
            this.dice = [];
            Object.keys(state).filter((k) => k.startsWith('die')).forEach((k) => delete state[k]);

            let low = this.props.sides == 10 ? 0 : 1;
            let high = this.props.sides == 10 ? 9 : this.props.sides;

            for (var i=1; i<=this.props.number; i++) {                
                state['die'+i.toString()] = prevstate['die'+i.toString()] || 1;
                
                this.dice.push({num: 1, low: low, high: high, color: Dice.dieColor(i), dotcolor: Dice.dotColor(i)});
            }
        }
        return state;
    },    
    onDieChanged(d,v) {
        this.state['die'+d] = v;    
		this.setState(this.state);
    },
    onDiceRoll(d) {
        d.forEach((die,i) => this.state['die'+(i+1)] = die.value);        
		this.setState(this.state);
    },    
    render() {
        this.buildDice(this.state);
        return (
            <Image source={Images.dicetable} resizeMode={'stretch'} style={{
                flex: 1,
                width: null,
                height: null,
                backgroundColor: 'transparent'
            }}>            
                <View style={{flex: 1, alignItems: 'center'}}>
                    <DiceRoll size={64} dice={this.dice} values={this.dice.map((d,i) => this.state['die'+(i+1)])} 
                                onRoll={this.onDiceRoll} onDie={this.onDieChanged}/>                
                </View>
            </Image>
        );
    }
});

const mapStateToProps = (state) => ({    
    sides: state.dice.numsides,
    number: state.dice.numdice
});

module.exports = connect(
  mapStateToProps
)(DiceView);
