import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logon from '../src/pages/Logon';
import Home from '../src/pages/Home';
import NewEvent from '../src/pages/NewEvent';
import Register from '../src/pages/Register';
import NewMember from '../src/pages/NewMember';


const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#f0f0f5' } }}>
                <AppStack.Screen name="Logon" component={Logon} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="NewEvent" component={NewEvent} />
                <AppStack.Screen name="NewMember" component={NewMember} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;