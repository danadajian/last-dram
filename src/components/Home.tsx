import React from 'react';
import { trpc } from '../trpc';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Home = () => {
  const { data } = trpc.myThing.useQuery({ message: 'hello world!' });

  return (
    <View style={styles.container}>
      <Text>{data || 'Loading...'}</Text>
      <SignOutButton />
      <StatusBar style="auto" />
    </View>
  );
};

const SignOutButton = () => {
  return <Button title="Sign Out" />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
