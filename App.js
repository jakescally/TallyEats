// Constants
const TECOLOR = "#3ad7f0";

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import TagList from './components/TagList';

export default class App extends React.Component {
  state = {
    dataLoaded: false,
  };

  // Load fonts
  async componentDidMount() {
    await Font.loadAsync({
      'tagFont': require('./assets/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf'),
    });
    this.setState({ dataLoaded: true });
  }


  render() {
    // Create the mega list (eventually this will be stored in the database)
    const megaTagList = [
      {
        heading: 'Food',
        tags: ['Burgers', 'Pizza', 'Pasta', 'Salad', 'Taco', 'Sushi', 'Fried Chicken'],
      },
      {
        heading: 'Distance',
        tags: ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min'],
      },
    ];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require('./assets/tallyEatsLogoCropped.png')}
          />
        </View>
        <View style={styles.tagView}>
          <TagList tagGroupData={megaTagList} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: TECOLOR,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 80,
    height: 40,
    marginBottom: 30,
  },
  tagView: {
    flex: 9,
  },
});