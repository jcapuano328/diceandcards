import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Container, Content, Picker, Item, Text, Radio, Button, Icon } from 'native-base';
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
           dotcolor: v
        });
    },
    onRemove() {        
        this.props.onRemove && this.props.onRemove(this.props.die);
    },    
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:3,justifyContent:'center', alignItems:'flex-start'}}>
                    {/* sides 
                    <Text style={{fontSize: Style.Font.medium()}}>Sides</Text>
                    */}
                    <View style={{flexDirection:'row'}}>
                        {[6,8,10].map((s,i) => 
                            <View key={i} style={{flexDirection:'row',paddingLeft:2,paddingRight:2}}>
                                <Radio selected={this.props.sides==s} onPress={this.onSidesChanged(s)}/>                            
                                <Text style={{paddingLeft:2}}>{s.toString()}</Text>
                            </View>
                        )}
                    </View>
                </View>        
                <View style={{flex:2,justifyContent:'center'}}>
                    {/* die color 
                    <Text style={{fontSize: Style.Font.medium()}}>Die</Text>
                    */}
                    <Picker
                        iosHeader="Select Die Color"
                        mode="dropdown"
                        selectedValue={this.props.diecolor}
                        onValueChange={this.onDieColorChanged}>
                            {Dice.colors.map((c,i) => <Item key={i} label={c} value={c} />)}
                   </Picker>                    
                </View>        
                <View style={{flex:2,justifyContent:'center'}}>
                    {/* dot color 
                    <Text style={{fontSize: Style.Font.medium()}}>Dot</Text>
                    */}
                    <Picker
                        iosHeader="Select Dot Color"
                        mode="dropdown"
                        selectedValue={this.props.dotcolor}
                        onValueChange={this.onDotColorChanged}>
                            {Dice.colors.map((c,i) => <Item key={i} label={c} value={c} />)}
                   </Picker>                    
                </View>        
                <View style={{flex:1}}>
                    {/* die preview */}                    
                    <Die die={this.props.die} value={this.props.sides} sides={this.props.sides}
                        size={Style.Scaling.scale(24)} diecolor={this.props.diecolor} dotcolor={this.props.dotcolor}                         
                    />                                    
                </View>        
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={this.onRemove}>
                        <Icon name='md-close-circle' style={{color:'red'}} />
                    </TouchableOpacity>
                    {/* remove button                                
                    <Button danger rounded transparent small onPress={this.onRemove}>
                        <Icon name='md-close-circle' />
                    </Button>         
                    */}
                </View>                
            </View>
        );
    }
});

module.exports = ConfigurationDieView;
