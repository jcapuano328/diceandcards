import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Body, ListItem, Text, CheckBox, Radio } from 'native-base';
import Spinner from 'rn-spinner';
import Style from '../services/style';
import {setEnabled,setNumber} from '../actions/spin';

var ConfigurationSpinView = React.createClass({
    onEnabledChanged(v) {
        this.props.setEnabled(v);
    },
    onNumberChanged(v) {        
        this.props.setNumber(+v);        
    },    
    render() {
        return (
            <Container>
                <Content>            
                    <Text style={{fontSize: Style.Font.large(),fontWeight: 'bold',backgroundColor: 'silver', textAlign: 'center'}}>Spinners</Text>
                    <ListItem>
                        <CheckBox checked={this.props.enabled} onPress={() => this.onEnabledChanged(!this.props.enabled)} />
                        <Text style={{fontSize: Style.Font.medium()}}>Enabled</Text>
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
    enabled: state.spin.enabled,    
    number: state.spin.number
});

const mapDispatchToProps =  ({setEnabled,setNumber});

module.exports = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfigurationSpinView);