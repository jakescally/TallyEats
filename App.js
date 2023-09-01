// Constants
const TECOLOR = "#3ad7f0";

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
// import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TagScreen from './components/TagScreen';

// Create navigation stack
const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TagScreen" component={TagScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}