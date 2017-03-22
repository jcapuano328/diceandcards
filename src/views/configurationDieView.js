import React from 'react';
import {View,Platform} from 'react-native';
import { Container, Content, Picker, Item, Text, Radio, Button, Icon } from 'native-base';
import Die from '../components/die';
import Style from '../services/style';
import Dice from '../services/dice';

/*

|-------------------------------------------------------------------------------|
|                                                                               |
|  <sides o 6 o 8 o 10> <die color> <dot color> [die preview]  <remove button>  |
|                                                                               |
|-------------------------------------------------------------------------------|

*/

var ConfigurationDieView = React.createClass({
    onSidesChanged(v) {
        return () => {
            this.props.onChanged && this.props.onChanged(this.props.die, {
            sides: v,
            diecolor: this.props.diecolor,
            dotcolor: this.props.dotcolor
            });        
        }
    },    
    onDieColorChanged(v) {
        this.props.onChanged && this.props.onChanged(this.props.die, {
           sides: this.props.sides,
           diecolor: v,
           dotcolor: this.props.dotcolor
        });
    },
    onDotColorChanged(v) {
        this.props.onChanged && this.props.onChanged(this.props.die, {
           sides: this.props.sides,
           diecolor: this.props.diecolor,
           dotcolor: this.props.dotcolor
        });
    },
    onRemove() {        
        return () => {
            this.props.onRemove && this.props.onRemove(this.props.die);
        }        
    },    
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1}}>
                    {/* sides */}
                    <Text style={{fontSize: Style.Font.medium()}}>Sides</Text>
                    {[6,8,10].map((s,i) => 
                        <Item key={i} selected={this.props.sides==s}>
                            <Radio selected={this.props.sides==s} onPress={() => this.onSidesChanged(s)}/>                            
                            <Text>{s.toString()}</Text>
                        </Item>
                    )}
                </View>        
                <View style={{flex:1}}>
                    {/* die color */}
                    <Picker
                        iosHeader="Select Die Color"
                        mode="dropdown"
                        selectedValue={this.props.diecolor}
                        onValueChange={this.onDieColorChanged}>
                            {Dice.colors.map((c,i) => <Item key={i} label={c} value={c} />)}
                   </Picker>                    
                </View>        
                <View style={{flex:1}}>
                    {/* dot color */}
                </View>        
                <View style={{flex:1}}>                    
                    {/* die preview */}                    
                    <Die die={this.props.die} value={this.props.sides} sides={this.props.sides}
                        size={Style.Scaling.scale(32)} diecolor={this.props.diecolor} dotcolor={this.props.dotcolor}                         
                    />                                    
                </View>        
                <View style={{flex:1}}>
                    {/* remove button */}
                    <Button onPress={this.onRemove()}>
                        <Icon name='ion-close-circled' />
                    </Button>                                        
                </View>                
            </View>
        );
    }
});

module.exports = ConfigurationDieView;
