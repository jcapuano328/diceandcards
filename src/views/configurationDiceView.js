import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Body, ListItem, Text, CheckBox, Button, Icon } from 'native-base';
import Spinner from 'rn-spinner';
import ConfigurationDieView from './configurationDieView';
import Style from '../services/style';
import {setEnabled,setDice} from '../actions/dice';

/*

|-------------------------------------------|
|             [ Dice ]                      |
|  [switch enabled]                         |
|  <add button>                             |
|  [list of die definitions]                |
|                                           |
|                                           |
|-------------------------------------------|

*/

var ConfigurationDiceView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);
    },
    onAdd() {

    },
    onRemove(d) {

    },
    onChanged(d) {

    },
    render() {
        return (
            <Container>
                <Content>            
                    <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Dice</Text>
                    <ListItem>
                        <CheckBox checked={this.props.enabled} onPress={() => this.onEnabledChanged(!this.props.enabled)} />
                        <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={{fontSize: Style.Font.medium()}}>Dice</Text>
                        <Button onPress={this.onAdd}>
                            <Icon name='ion-plus-circled' />
                        </Button>                        
                    </ListItem>                    
                    {this.props.dice.map((d,i) => 
                        <ListItem key={i}>
                            <ConfigurationDieView
                                sides={d.sides}
                                diecolor={d.diecolor}
                                dotcolor={d.dotcolor}
                                onChanged={this.onChanged}
                            />                                
                        </ListItem>                        
                    )}
                </Content>
            </Container>                        
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.dice.enabled,
    dice: state.dice.dice
});

const mapDispatchToProps =  ({setEnabled,setDice});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationDiceView);
