import React from 'react';
import { connect } from 'react-redux';
import {About} from 'react-native-nub';
import {logo} from '../res';

const AboutView = (props) => {
    return (
        <About logo={logo}
            title={'About Dice and Cards'}
            version={props.version}
            releasedate={props.releasedate}
            description={'A simple dice roller/card draw(er?)'}
            dependencies={[
                {description: 'react-redux', url: 'https://github.com/reactjs/react-redux'},
                {description: 'react-native-router-flux', url: 'https://github.com/aksonov/react-native-router-flux'},
                {description: 'react-native-audioplayer', url: ''},
                {description: 'react-native-fs', url: ''}
            ]}
        />
    );
}

const mapStateToProps = (state) => ({
    version: state.info.version,
    releasedate: state.info.releasedate
});

module.exports = connect(
  mapStateToProps
)(AboutView);
