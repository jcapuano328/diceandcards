import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import {SpinNumeric} from '../widgets';
//import Spinner from 'rn-spinner';
import Style from '../services/style';
import {setAttack,setDefend} from '../actions/odds';

var ConfigurationOddsView = React.createClass({
    onAttackChanged(v) {        
        this.props.setAttack(+v);        
    },    
    onDefendChanged(v) {        
        this.props.setDefend(+v);        
    },    
    render() {        
        let attack = this.props.attack;
        let defend = this.props.defend;
        let odds = '';
        if (attack > 0 && defend > 0) {
            let ratio = attack >= defend ? attack/defend : defend/attack;
            if (this.props.round) {
                if (this.props.method == 'up') {
                    ratio = Math.ceil(ratio);
                } else if (this.props.method == 'down') {
                    ratio = Math.floor(ratio);
                } else if (this.props.method == 'std') {
                    ratio = Math.round(ratio);
                }
            }
            let places = Number.isInteger(ratio) ? 0 : 1;
            let v = ratio.toFixed(places);
            odds =  (attack>=defend)
                ? v + ':1'
                : '1:' + v;
        }
        return (
            <View style={{flex:1, flexDirection:'row', backgroundColor: 'gainsboro',paddingLeft:3, paddingRight:3}}>
                <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <SpinNumeric value={(this.props.attack == null ? 1 : this.props.attack).toString()} min={0} onChanged={this.onAttackChanged} />                    
                </View>
                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:Style.Font.large(), fontWeight:'bold', textAlign:'center'}}>{odds}</Text>
                </View>                    
                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>                    
                    <SpinNumeric value={(this.props.defend == null ? 1 : this.props.defend).toString()} min={0} onChanged={this.onDefendChanged} />
                </View>
            </View>
        );
    }
});

const mapStateToProps = (state) => ({
    round: state.odds.round,
    method: state.odds.method||'std',
    attack: state.odds.attack,
    defend: state.odds.defend
});

const mapDispatchToProps =  ({setAttack,setDefend});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationOddsView);