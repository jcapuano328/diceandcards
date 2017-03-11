import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Body, ListItem, Text, CheckBox, Radio } from 'native-base';
import Spinner from 'rn-spinner';
import Style from '../services/style';
import {setEnabled,setSides,setNumber} from '../actions/dice';

var ConfigurationDiceView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);
    },
    onSidesChanged(v) {
        this.props.setSides(+v);        
    },    
    onNumberChanged(v) {        
        this.props.setNumber(+v);        
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
                        <Text style={{fontSize: Style.Font.medium()}}>Sides</Text>
                        <ListItem selected={this.props.sides==6}>                                    
                            <Radio selected={this.props.sides==6} onPress={() => this.onSidesChanged(6)}/>                            
                            <Text>6</Text>                            
                        </ListItem>
                        <ListItem selected={this.props.sides==10}>                                    
                            <Radio selected={this.props.sides==10} onPress={() => this.onSidesChanged(10)}/>
                            <Text>10</Text>
                        </ListItem>                        
                    </ListItem>
                    <ListItem>
                        <Text style={{fontSize: Style.Font.medium()}}>Number</Text>
                        <Spinner max={10} min={1} default={this.props.number} onNumChange={this.onNumberChanged} />
                    </ListItem>
                </Content>
            </Container>                        
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.dice.enabled,
    sides: state.dice.numsides,
    number: state.dice.numdice
});

const mapDispatchToProps =  ({setEnabled,setSides,setNumber});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationDiceView);
