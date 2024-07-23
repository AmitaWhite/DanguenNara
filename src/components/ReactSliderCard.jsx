import React, {useRef} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const ReactCardSlider = ({slides}) => {
  const scrollViewRef = useRef();

  return (
    <View style={styles.mainSliderContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        automaticallyAdjustContentInserts
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
        contentContainerStyle={styles.sliderContent}
        pagingEnabled
        snapToInterval={Dimensions.get('window').width * 0.92} // FIX: 7개 카드 했을 때, 티는 안나지만 약간씩 밀림
        snapToAlignment="center"
        decelerationRate="fast">
        {slides.map((slide, index) => (
          <TouchableOpacity key={index} style={styles.sliderCard}>
            <Image source={{uri: slide.image}} style={styles.sliderCardImage} />
            <Text style={styles.sliderCardTitle}>{slide.title}</Text>
            <Text style={styles.sliderCardDescription}>
              {slide.description}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainSliderContainer: {
    width: '100%',
    height: 305,
    position: 'relative',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
  },
  sliderContent: {
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width * 0.02,
  },
  sliderCard: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: Dimensions.get('window').width * 0.01,
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.12)',
    elevation: 5, // Android shadow
  },
  sliderCardImage: {
    width: '100%',
    height: 220,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sliderCardTitle: {
    fontWeight: '500',
    marginTop: 10,
    marginHorizontal: 10,
  },
  sliderCardDescription: {
    opacity: 0.5,
    fontSize: 13,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default ReactCardSlider;
