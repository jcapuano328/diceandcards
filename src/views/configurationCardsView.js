import React from 'react';
import { connect } from 'react-redux';
import { View, Container, Content, Body, ListItem, Text, CheckBox, Button, Icon } from 'native-base';
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
            <Container>
                <Content>            
                    <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Cards</Text>
                    <ListItem>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{flex:3, flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                <CheckBox checked={this.props.enabled} onPress={() => this.onEnabledChanged(!this.props.enabled)} />
                                </View>
                                <View style={{flex:9}}>
                                <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Button rounded bordered small iconRight onPress={this.onAdd}>
                                    <Text>Add Deck</Text>
                                    <Icon name='md-add-circle' />
                                </Button>                                
                            </View>
                        </View>
                    </ListItem>
                    {this.props.decks.map((d,i) => 
                    <ListItem key={i}>
                        <ConfigurationDeckView key={i}
                            deck={i}
                            color={d.color}
                            suits={d.suits||['hearts','diamonds','clubs','spades']}
                            jokers={d.jokers}
                            facecards={d.facecards}
                            onChanged={this.onChanged}
                            onRemove={this.onRemove}
                        />
                    </ListItem>
                    )}
                </Content>
            </Container>
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
