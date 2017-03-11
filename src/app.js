import React from 'react';
import { Router } from 'react-native-router-flux';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './stores/store';
import codePush from "react-native-code-push";

let Main = React.createClass({
    render () {
        return (
            <Provider store={store}>
                <Router style={{flex:1}} scenes={routes} />
            </Provider>
        );
    }
});

module.exports = codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME })(Main);