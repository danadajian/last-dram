import React from 'react';
import { trpc } from '../trpc';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Home = () => {
  const { data } = trpc.myThing.useQuery({ message: 'hello world!' });

  return (
    <View style={styles.container}>
      <Text>{data || 'Loading...'}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
