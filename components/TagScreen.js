import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TagList from './TagList';

export default function HomeScreen() {
    const megaTagList = [
        {
            heading: 'I\'m Craving...',
            tags: ['Burgers', 'Pizza', 'Pasta', 'Salad', 'Tacos', 'Sushi', 'Fried Chicken', 'Coffee', 'Steak', 'Seafood', 'Noodles', 'Rice', 'Barbecue', 'Poke', 'Smoothies', 'Sandwiches', 'Wings', 'Boba', 'Hot Dogs', 'Southern', 'Kava', 'Donuts', 'Ice Cream'],
        },
        {
            heading: 'Distance',
            tags: ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min'],
        },
        {
            heading: 'Style of Restaurant',
            tags: ['Fast Food', 'Counter Service', 'Table Service', 'Dining Hall', 'Food Truck', 'Cafe', 'Upscale', 'Buffet', 'Bar'],
        },
        {
            heading: 'Origin',
            tags: ['American', 'Mexican', 'Thai', 'Indian', 'Italian', 'Japanese', 'Chinese', 'Asian-fusian', 'Korean', 'Mediterranean', 'Vietnamese'],
        },
        {
            heading: 'Additional Filters',
            tags: ['Open Late', 'Online Ordering', 'Local', 'Drive Through',],
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: TECOLOR }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/tallyEatsLogoCropped.png')}
                    />
                </View>
                <View style={styles.tagView}>
                    <TagList tagGroupData={megaTagList} />
                </View>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#32a5c2',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        backgroundColor: TECOLOR,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    headerImage: {
        width: 80,
        height: 40,
    },
    tagView: {
        flex: 10,
        backgroundColor: '#32a5c2',
    },
    continue: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    continueText: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
    },
});