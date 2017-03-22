import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import NavBar from '../components/navBar';
import {MainView,ConfigurationView,AboutView} from '../views';
import Icons from '../res';

const rightButtons = [
    {image:'config', onPress: () => Actions.config()},
    {image:'info', onPress: () => Actions.about() }
];

const navBarOpts = {
    icons: Icons,
    style: {
        backgroundColor: '#267F00'
    },    
    textcolor: 'white',
    menu: 'logo',
    rightButtons: rightButtons
};

const navBarOptsBack = {
    ...navBarOpts,
    left: 'back',
    onBack: Actions.pop,
    rightButtons: []
};

const NavBarMain = NavBar(navBarOpts);
const NavBarBack = NavBar(navBarOptsBack);

export default Actions.create(
    <Scene key="root" navBar={NavBarMain}>
        <Scene key="home" type="reset" component={MainView} title="Dice and Cards" initial={true} />
        <Scene key="config" navBar={NavBarBack} component={ConfigurationView} title="Configuration" />
        <Scene key="about" navBar={NavBarBack} component={AboutView} title="About" />
    </Scene>
);
