import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
//import { View, Container, Content, Body, ListItem, Text, CheckBox, Radio, Button, Icon } from 'native-base';
import {RadioButtonGroup,SpinNumeric,CheckBox,IconButton} from '../widgets';
import ConfigurationDieView from './configurationDieView';
import Style from '../services/style';
import {setEnabled,setZero,setDice} from '../actions/dice';

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
    onZeroChanged(v) {
        this.props.setZero(v);
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
            <View style={{flex:1}}>
                <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Dice</Text>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:2, flexDirection:'row', alignItems:'center'}}>
                        <CheckBox label={'Enabled'} selected={this.props.enabled} onSelected={() => this.onEnabledChanged(!this.props.enabled)} />
                    </View>                            
                    <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                        <CheckBox label={'0 = 10'} selected={this.props.zero} onSelected={() => this.onZeroChanged(!this.props.zero)}/>                        
                    </View>                            
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <IconButton image={'add'} width={32} height={32} resizeMode={'contain'} onPress={this.onAdd}/>
                        <Text style={{fontSize: Style.Font.medium(), alignSelf:'center'}}>Add Die</Text>
                    </View>
                </View>                        
                <View style={{flex: 3, justifyContent:'flex-start'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex:2, alignItems:'flex-start'}}>
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
                    <View style={{flex:3}}>
                    <ScrollView
                        automaticallyAdjustContentInsets={false}
                        scrollEventThrottle={200}>                    
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
                    </ScrollView>
                    </View>
                </View>
            </View>
            /*
            <Container>
                <Content>            
                    <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Dice</Text>
                    <ListItem>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{flex:2, flexDirection:'row', alignItems:'center'}}>
                                <View style={{flex:1}}>
                                <CheckBox checked={this.props.enabled} onPress={() => this.onEnabledChanged(!this.props.enabled)} />
                                </View>
                                <View style={{flex:7}}>
                                <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
                                </View>
                            </View>                            
                            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                                <View style={{flex:1}}>
                                <CheckBox checked={this.props.zero} onPress={() => this.onZeroChanged(!this.props.zero)} />
                                </View>
                                <View style={{flex:3, alignItems:'flex-start'}}>
                                <Text style={{fontSize: Style.Font.medium()}}>0 = 10</Text>                                
                                </View>
                            </View>                            
                            <View style={{flex:1, alignItems:'center'}}>
                                <Button rounded bordered small iconRight onPress={this.onAdd}>
                                    <Text>Add Die</Text>
                                    <Icon name='md-add-circle' />
                                </Button>
                            </View>
                        </View>                        
                    </ListItem>
                    <ListItem>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex:2, alignItems:'flex-start'}}>
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
                    </ListItem>
                    {this.props.dice.map((d,i) => 
                        <ListItem key={i}>
                            <ConfigurationDieView key={i}
                                die={i}
                                sides={d.sides}
                                diecolor={d.diecolor}
                                dotcolor={d.dotcolor}
                                onChanged={this.onChanged}
                                onRemove={this.onRemove}
                            />
                        </ListItem>
                    )}
                    
                </Content>
            </Container>    
            */                 
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.dice.enabled,
    zero: state.dice.zero,
    dice: state.dice.dice
});

const mapDispatchToProps =  ({setEnabled,setDice,setZero});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationDiceView);
