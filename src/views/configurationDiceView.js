import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Switch } from 'react-native';
import {SpinNumeric,RadioButtonGroup,Style} from 'react-native-nub';
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
                <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Dice</Text>
                <View style={{flex: 1, flexDirection:'row',alignItems: 'flex-start', marginLeft: 20}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
                    </View>
                    <View style={{flex:2, alignItems:'flex-start'}}>
                        <Switch value={this.props.enabled} onValueChange={this.onEnabledChanged} />
                    </View>
                </View>                
                <View style={{flex: 1, flexDirection:'row',alignItems: 'center', justifyContent:'center', marginLeft: 20}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <Text style={{fontSize: Style.Font.medium()}}>Sides</Text>
                    </View>
                    <View style={{flex:2}}>
                        <RadioButtonGroup direction={'horizontal'}                        
                            buttons={[{label:'6',value:'6'},{label:'10',value:'10'}]}
                            state={this.props.sides.toString()}
                            onSelected={this.onSidesChanged}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection:'row',alignItems: 'flex-start', justifyContent:'center',marginLeft: 20}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <Text style={{fontSize: Style.Font.medium()}}>Number</Text>
                    </View>
                    <View style={{flex:2}}>
                        <SpinNumeric value={this.props.number.toString()} min={1} onChanged={this.onNumberChanged} />
                    </View>
                </View>                
                <View style={{flex:3}} />
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
