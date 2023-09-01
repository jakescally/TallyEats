import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Tag = ({ label }) => {
    // Declare state (pressed or not)
    const [pressedBool, setPressedBool] = useState(false);
    const [tagContainerStyle, setTagContainerStyle] = useState(styles.tagContainerDefault);


    // onPress function
    const pressed = () => {
        if (pressedBool) {
            setTagContainerStyle(styles.tagContainerDefault);
        } else {
            setTagContainerStyle(styles.tagContainerPressed);
        }
        setPressedBool(!pressedBool);
    }

    return (
        <Pressable style={tagContainerStyle} onPress={pressed}>
            <Text style={styles.tagText}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    tagContainerDefault: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    tagContainerPressed: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderWidth: 3,
        borderColor: 'black',
    },
    tagText: {
        fontSize: 14,
        fontWeight: 'bold',
        //fontFamily: 'tagFont',
    },
});


export default Tag;

