import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Switch } from 'react-native';
import {Style} from 'react-native-nub';
import {setEnabled,setJoker} from '../actions/cards';
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
            <View style={{flex: 1}}>
                <Text style={{fontSize: 18,fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Cards</Text>
                <View style={{flexDirection:'row',alignItems: 'flex-start', marginLeft: 20}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
                    </View>
                    <View style={{flex:2, alignItems:'flex-start'}}>
                        <Switch value={this.props.enabled} onValueChange={this.onEnabledChanged} />
                    </View>
                </View>                
                <View style={{flexDirection:'row',alignItems: 'flex-start', marginLeft: 20}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <Text style={{fontSize: Style.Font.medium()}}>Include Joker</Text>
                    </View>
                    <View style={{flex:2, alignItems:'flex-start'}}>
                        <Switch value={this.props.joker} onValueChange={this.onJokerChanged} />
                    </View>
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
