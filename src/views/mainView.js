import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Style from '../services/style';
import DiceView from './diceView';
import SpinnerView from './spinnerView';
import CardsView from './cardsView';

var MainView = React.createClass({
    render() {
        return (
            <View style={{flex: 1, marginTop: Style.Scaling.scale(44)}}>
                {this.renderDice()}
                {this.renderSpin()}
                {this.renderCards()}
            </View>
        );
    },
    renderDice() {
        if (this.props.dice && this.props.dice.enabled) {
            return (
                <View style={{flex:4}}>
                    <DiceView />
                </View>
            );            
        }
        return null;
    },
    renderSpin() {
        if (this.props.spin && this.props.spin.enabled) {
            return (                                                    
                <View style={{flex:1}}>
                    <SpinnerView />
                </View>                
            );            
        }
        return null;
    },
    renderCards() {
        if (this.props.cards && this.props.cards.enabled) {
            return (
                <View style={{flex:4}}>
                    <CardsView />
                </View>
            );            
        }
        return null;
    }    
});

const mapStateToProps = (state) => ({
    dice: state.dice,
    spin: state.spin,
    cards: state.cards
});

module.exports = connect(
  mapStateToProps
)(MainView);
