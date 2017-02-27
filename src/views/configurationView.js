import React from 'react';
import { View } from 'react-native';
import {Style} from 'react-native-nub';
import ConfigurationDiceView from './configurationDiceView';
import ConfigurationCardsView from './configurationCardsView';

var ConfigurationView = React.createClass({
    render() {
        return (
            <View style={{flex: 1, marginTop: Style.Scaling.scale(44)}}>
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