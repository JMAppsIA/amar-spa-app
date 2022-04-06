import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, Home, Profile, Services, Settings, Details } from 'Screens';
import DrawerMenu from '../DrawerMenu';

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Home"
            component={DrawerMenu}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Services"
            component={Services}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Details"
            component={Details}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

export default Stacks;
