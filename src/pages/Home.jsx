import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import ItemCard from '../components/ItemCard.jsx';
import ReactCardSlider from '../components/ReactSliderCard.jsx';

import {dummyItems, sliderDummy} from '../dummyData.js';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyItems}
        renderItem={({item}) => <ItemCard item={item} />}
        keyExtractor={dummyItems.id}
      />
      <ReactCardSlider slides={sliderDummy} />
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
});

export default Home;
