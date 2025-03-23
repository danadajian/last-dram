import React from 'react';
import { trpc } from '../trpc';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Home = ({ userId }: { userId: string }) => {
  const { data } = trpc.getCollection.useQuery({ userId });

  return (
    <View style={styles.container}>
      {!data?.length ? <Text style={styles.item}>Your collection is empty!</Text> : null}
      <FlatList data={data} renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>} />
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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
