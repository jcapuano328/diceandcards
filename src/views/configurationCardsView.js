import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import {CheckBox,IconButton} from '../widgets';
import Style from '../services/style';
import ConfigurationDeckView from './configurationDeckView';
import {setEnabled,setDecks} from '../actions/cards';

var ConfigurationCardsView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);        
    },
    onAdd() {
        let decks = [...this.props.decks];
        decks.push({jokers: 0,suits: ['hearts','diamonds','clubs','spades'],facecards: true});
        this.props.setDecks(decks);
    },
    onRemove(d) {
        let decks = [...this.props.decks];
        decks.splice(d,1);
        this.props.setDecks(decks);        
    },
    onChanged(i,d) {
        let decks = [...this.props.decks];
        decks[i] = d;
        this.props.setDecks(decks);
    },
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Cards</Text>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:2, flexDirection:'row', alignItems:'center'}}>
                        <CheckBox label={'Enabled'} selected={this.props.enabled} onSelected={() => this.onEnabledChanged(!this.props.enabled)} />
                    </View>                            
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <IconButton image={'add'} width={32} height={32} resizeMode={'contain'} onPress={this.onAdd}/>
                        <Text style={{fontSize: Style.Font.medium(), alignSelf:'center'}}>Add Deck</Text>
                    </View>
                </View>                        
                <View style={{flex: 3, justifyContent:'flex-start'}}>
                    <ScrollView
                        automaticallyAdjustContentInsets={false}
                        scrollEventThrottle={200}>       
                        {this.props.decks.map((d,i) => 
                            <ConfigurationDeckView key={i}
                                deck={i}
                                color={d.color}
                                suits={d.suits||['hearts','diamonds','clubs','spades']}
                                jokers={d.jokers}
                                facecards={d.facecards}
                                onChanged={this.onChanged}
                                onRemove={this.onRemove}
                            />
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.cards.enabled,
    decks: state.cards.decks
});

const mapDispatchToProps =  ({setEnabled,setDecks});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationCardsView);
