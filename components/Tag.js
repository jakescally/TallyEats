import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tag = ({ label }) => {
    // Find the label length
    const labelLength = label.length;

    // Define constants for the min and max size
    const minWidth = 80;
    const maxWidth = 300;

    // Perform caluclation
    const labelWidth = Math.max(minWidth, Math.min(maxWidth, labelLength * 9));

    const styles = StyleSheet.create({
        tagContainer: {
            backgroundColor: '#e0e0e0',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 50,
            width: labelWidth,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
        },
        tagText: {
            fontSize: 14,
            fontFamily: 'tagFont',
        },
    });

    return (
        <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{label}</Text>
        </View>
    );
};

export default Tag;

