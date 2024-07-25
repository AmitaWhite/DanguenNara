import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';

import ItemCard from '../components/ItemCard.jsx';
import ReactCardSlider from '../components/ReactSliderCard.jsx';

import {dummyItems, sliderDummy} from '../dummyData.js';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.recommendTitle}>Today's Recommend! </Text>
        <ReactCardSlider slides={sliderDummy} />
      </View>
      <FlatList
        data={dummyItems}
        renderItem={({item}) => <ItemCard item={item} />}
        keyExtractor={dummyItems.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  recommendTitle: {
    fontWeight: '700',
    fontSize: 25,
    margin: 5,
    padding: 3,
  },
});

export default Home;
