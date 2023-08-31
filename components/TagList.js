import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import TagGroup from './TagGroup';

const TagList = ({ tagGroupData }) => {

    return (
        <ScrollView>
            {tagGroupData.map((tagGroup, index) => (
                <TagGroup
                    key={index}
                    heading={tagGroup.heading}
                    tags={tagGroup.tags}
                />
            ))}
        </ScrollView>
    )
}

export default TagList;