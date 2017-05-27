import React from 'react';
import { connect } from 'react-redux';
import { View, Container, Content, Body, ListItem, Text, CheckBox } from 'native-base';
import Spinner from 'rn-spinner';
import Style from '../services/style';
import {setEnabled,setNumber,setFollowDice} from '../actions/spin';

var ConfigurationSpinView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);
    },
    onNumberChanged(v) {        
        this.props.setNumber(+v);        
    },    
    onFollowDiceChanged(v) {
        this.props.setFollowDice(v);
    },
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Spinners</Text>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:2, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex:1}}>
                        <CheckBox checked={this.props.enabled} onPress={() => this.onEnabledChanged(!this.props.enabled)} />
                        </View>
                        <View style={{flex:5}}>
                        <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
                        </View>
                    </View>                            
                    <View style={{flex:3, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex:1}}>
                            <Text style={{fontSize: Style.Font.medium()}}>Number</Text>
                        </View>
                        <View style={{flex:2, alignItems:'flex-start'}}>
                            <Spinner max={10} min={1} default={this.props.number} onNumChange={this.onNumberChanged} />                                
                        </View>
                    </View>                            
                    <View style={{flex:2, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex:1}}>
                            <CheckBox checked={this.props.followdice} onPress={() => this.onFollowDiceChanged(!this.props.followdice)} />
                        </View>
                        <View style={{flex:5}}>
                            <Text style={{fontSize: Style.Font.medium()}}>Follow Dice</Text>                                
                        </View>
                    </View>                            
                </View>                        
            </View>
        );
    }
});

const mapStateToProps = (state) => ({
    enabled: state.spin.enabled,    
    number: state.spin.number,
    followdice: state.spin.followdice
});

const mapDispatchToProps =  ({setEnabled,setNumber,setFollowDice});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationSpinView);