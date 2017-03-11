import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Body, ListItem, Text, CheckBox } from 'native-base';
import Style from '../services/style';
import {setEnabled,setJoker} from '../actions/cards';

var ConfigurationCardsView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);        
    },
    onJokerChanged(v) {
        this.props.setJoker(v);        
    },    
    render() {
        return (
            <Container>
                <Content>            
                    <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Cards</Text>
                    <ListItem>
                        <CheckBox checked={this.props.enabled} onPress={() => this.onEnabledChanged(!this.props.enabled)} />
                        <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={this.props.joker} onPress={() => this.onJokerChanged(!this.props.joker)} />
                        <Text style={{fontSize: Style.Font.medium()}}>Include Joker</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.cards.enabled,
    joker: state.cards.joker
});

const mapDispatchToProps =  ({setEnabled,setJoker});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationCardsView);
