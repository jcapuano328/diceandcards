import React from 'react';
import { connect } from 'react-redux';
import { View, Container, Content, Body, ListItem, Text, CheckBox, Button, Icon } from 'native-base';
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
        let dice = [...this.props.dice];
        dice.push({sides: 6, diecolor: 'red', dotcolor: 'white', value: 1});        
        this.props.setDice(dice);        
    },
    onRemove(d) {
        let dice = [...this.props.dice];
        dice.splice(d,1);
        this.props.setDice(dice);        
    },
    onChanged(i,d) {
        let dice = [...this.props.dice];
        dice[i] = d;
        this.props.setDice(dice);
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
                        <View style={{flex:1}}>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Button rounded bordered small iconRight onPress={this.onAdd}>
                                    <Text>Add Die</Text>
                                    <Icon name='md-add-circle' />
                                </Button>                        
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex:3, alignItems:'center'}}>
                                    <Text style={{fontSize: Style.Font.medium(), alignSelf:'center'}}>Sides</Text>
                                </View>        
                                <View style={{flex:2, alignItems:'center'}}>
                                    <Text style={{fontSize: Style.Font.medium(), alignSelf:'center'}}>Die</Text>
                                </View>        
                                <View style={{flex:2, alignItems:'center'}}>
                                    <Text style={{fontSize: Style.Font.medium(), alignSelf:'center'}}>Dot</Text>
                                </View>        
                                <View style={{flex:2}}/>
                            </View>                                                
                            {this.props.dice.map((d,i) => 
                                <ConfigurationDieView key={i}
                                    die={i}
                                    sides={d.sides}
                                    diecolor={d.diecolor}
                                    dotcolor={d.dotcolor}
                                    onChanged={this.onChanged}
                                    onRemove={this.onRemove}
                                />
                            )}
                        </View>
                    </ListItem>                    
                    
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
