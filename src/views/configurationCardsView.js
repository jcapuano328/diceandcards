import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Switch } from 'react-native';
import {setEnabled,setJoker} from '../actions/dice';
import {save} from '../actions/config';

var ConfigurationCardsView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);
        this.props.save().done();        
    },
    onJokerChanged(v) {
        this.props.setJoker(v);
        this.props.save().done();
    },    
    render() {
        return (
            <View style={{flex: 1, marginTop: 50}}>
                <Text style={{fontSize: 18,fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Cards</Text>
                <View style={{flex: 1}}>
                    <Text>Enabled</Text>
                    <Switch value={this.props.enabled} onValueChange={this.onEnabledChanged} />
                </View>                
                <View style={{flex: 1}}>
                    <Text>Include Joker</Text>
                    <Switch value={this.props.joker} onValueChange={this.onJokerChanged} />
                </View>                
            </View>
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.cards.enabled,
    joker: state.cards.joker
});

const mapDispatchToProps =  ({setEnabled,setJoker,save});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationCardsView);
