import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Style from '../services/style';

var Button = React.createClass({
    render() {
        return (
            <TouchableOpacity style={{
                justifyContent: 'center',
                backgroundColor: this.props.buttonBackgroundColor || 'silver',//'#3F51B5',
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 1,
                marginTop: Style.Padding.pad(15),
                paddingLeft: Style.Padding.pad(25),
                paddingRight: Style.Padding.pad(25),
                marginBottom: Style.Padding.pad(15)
            }} onPress={this.props.onPress}>
                <Text style={{fontSize:this.props.labelFontSize || Style.Font.large(), fontWeight:this.props.labelFontWeight || 'bold', textAlign:'center'}}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
});

module.exports = Button;
