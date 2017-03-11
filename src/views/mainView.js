import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Style from '../services/style';
import DiceView from './diceView';
import CardsView from './cardsView';

var MainView = React.createClass({
    render() {
        return (
            <View style={{flex: 1, marginTop: Style.Scaling.scale(44)}}>
                {this.renderDice()}
                {this.renderCards()}
            </View>
        );
    },
    renderDice() {
        if (this.props.dice && this.props.dice.enabled) {
            return (
                <View style={{flex:1}}>
                    <DiceView />
                </View>
            );            
        }
        return null;
    },
    renderCards() {
        if (this.props.cards && this.props.cards.enabled) {
            return (
                <View style={{flex:1}}>
                    <CardsView />
                </View>
            );            
        }
        return null;
    }    
});

const mapStateToProps = (state) => ({
    dice: state.dice,
    cards: state.cards
});

module.exports = connect(
  mapStateToProps
)(MainView);
