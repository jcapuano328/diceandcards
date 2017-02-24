import React from 'react';
import { View } from 'react-native';
import ConfigurationDiceView from './configurationDiceView';
import ConfigurationCardsView from './configurationCardsView';

var ConfigurationView = React.createClass({
    render() {
        return (
            <View style={{flex: 1, marginTop: 50}}>
                <View style={{flex:1}}>
                    <ConfigurationDiceView />
                </View>
                <View style={{flex:1}}>
                    <ConfigurationCardsView />
                </View>                
            </View>
        );
    }
});

module.exports = ConfigurationView;
