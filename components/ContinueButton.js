import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContinueButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.textStyle}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textStyle: {
        borderRadius: 20,
        marginHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: TECOLOR,
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
});

export default ContinueButton;