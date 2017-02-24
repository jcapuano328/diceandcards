import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Switch } from 'react-native';
import {SpinNumeric,RadioButtonGroup} from 'react-native-nub';
import {setEnabled,setSides,setNumber} from '../actions/dice';
import {save} from '../actions/config';

var ConfigurationDiceView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);
        this.props.save().done();        
    },
    onSidesChanged(v) {
        this.props.setSides(+v);
        this.props.save().done();
    },    
    onNumberChanged(v) {
        this.props.setNumber(+v);
        this.props.save().done();
    },    
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize: 18,fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Dice</Text>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Text>Enabled</Text>
                    <Switch value={this.props.enabled} onValueChange={this.onEnabledChanged} />
                </View>                
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Text>Sides</Text>
                    <RadioButtonGroup direction={'horizontal'}
                        buttons={[{label:'6',value:'6'},{label:'10',value:'10'}]}
                        state={this.props.sides.toString()}
                        onSelected={this.onSidesChanged}/>
                </View>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Text>Number</Text>
                    <SpinNumeric value={this.props.number.toString()} min={1} onChanged={this.onNumberChanged} />
                </View>                
            </View>
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.dice.enabled,
    sides: state.dice.numsides,
    number: state.dice.numdice
});

const mapDispatchToProps =  ({setEnabled,setSides,setNumber,save});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationDiceView);
