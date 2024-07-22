import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </SafeAreaView>
  );
}
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
