import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import DiceTray from '../components/diceTray';
import RollButton from '../components/diceRollButton';
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
            
            let dice = [];
            Object.keys(state).filter((k) => k.startsWith('die')).forEach((k) => delete state[k]);

            let low = this.props.sides == 10 ? 0 : 1;
            let high = this.props.sides == 10 ? 9 : this.props.sides;

            for (var i=1; i<=this.props.number; i++) {                
                state['die'+i.toString()] = prevstate['die'+i.toString()] || 1;
                
                dice.push({num: 1, low: low, high: high, color: Dice.dieColor(i), dotcolor: Dice.dotColor(i)});
            }

            this.dice = new Dice.Dice(dice);
        }
        return state;
    },    
    onDieChanged(e) {
        let die = this.dice.dieEx(e);
        die.increment(true);
        this.state['die'+d] = die.value();    
        this.setState(this.state);
    },
    onDiceRoll() {
        this.dice.roll();
        this.dice.dice().forEach((die,i) => this.state['die'+(i+1)] = die.value);        
		this.setState(this.state);
    },    
    render() {
        this.buildDice(this.state);                
        return (
            <Image source={Images.dicetable} resizeMode={'stretch'} style={{
                flex: 1,
                alignItems: 'center', justifyContent: 'center',
                width: null,
                height: null,
                backgroundColor: 'transparent'
            }}>           
                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
                    <DiceTray size={64} dice={this.dice} values={this.dice.map((d,i) => this.state['die'+(i+1)])} onDie={this.onDieChanged}/>
                </View>
                <View style={{flex:2, flexDirection:'row', alignItems: 'center', marginBottom: 10}}>
                    <View style={{flex:1}} />
                    <View style={{flex:1}}>
                        <RollButton direction={'vertical'} onRoll={this.onDiceRoll} />
                    </View>
                    <View style={{flex:1}} />
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
