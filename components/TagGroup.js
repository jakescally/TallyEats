import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Tag from './Tag';

const TagGroup = ({ tags, heading }) => {

    const styles = StyleSheet.create({
        heading: {
            marginLeft: 20,
            marginTop: 15,
            fontSize: 25,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'white',
            //fontFamily: 'tagFont'
        },
        group: {
            marginHorizontal: 30,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
    });

    return (
        <View>
            <Text style={styles.heading}>{heading}</Text>
            <View style={styles.group}>
                {tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                ))}
            </View>
        </View>
    );
};

export default TagGroup;