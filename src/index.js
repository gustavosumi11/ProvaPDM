import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Sacola from './pages/sacola';


const Stack = createStackNavigator();
export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Carrinho de compras"component={Sacola}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}