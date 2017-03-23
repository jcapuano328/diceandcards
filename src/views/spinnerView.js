import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Spinner from 'rn-spinner';
import {setValues} from '../actions/spin';
import Style from '../services/style';

var SpinnerView = React.createClass({
    onChange(i) {
        return (v) => {
            this.props.values[i] = +v;
            this.props.setValues(this.props.values);
        }            
    },
    render() {
        //let justify = this.props.values.length > 1 ? 'space-between' : 'center';
        return (
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', 
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'lightgray',
                marginLeft: 10, marginRight: 10}}>
                {this.props.values.map((v,i) => 
                    <View key={i} style={{marginLeft: 10, marginRight: 10}}>
                    <Spinner max={100} min={-100} 
                        width={Style.Scaling.scale(90)} 
                        height={Style.Scaling.scale(30)} 
                        fontSize={Style.Font.large()}
                        btnFontSize={Style.Font.large()} 
                        default={v} 
                        onNumChange={this.onChange(i)} />
                    </View>
                )}                
            </View>
        );
    }
});

const mapStateToProps = (state) => ({    
    values: state.spin.values
});

const mapDispatchToProps =  ({setValues});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SpinnerView);
