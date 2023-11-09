import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

//screens import

import Home from '../screens/Home';
import Settings from '../screens/Settings'

const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Settings" component={Settings}/>
        </Drawer.Navigator>
    );
};

export default Drawer;