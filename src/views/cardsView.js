import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import CardDeckView from './cardDeckView';

var CardsView = React.createClass({
    render() {		
        return (
            <View style={{flex: 1}}>
                {this.props.decks.map((d,i) => <CardDeckView key={i} index={i} deck={d} /> )}
            </View>
        );
    }
});

const mapStateToProps = (state) => ({    
    decks: state.cards.decks || []
});

module.exports = connect(
  mapStateToProps
)(CardsView);
