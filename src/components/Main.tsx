import React from 'react';
import { trpc } from '../trpc';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { queryClientContext } from '../providers/ClientProvider';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

export const Main = () => {
  const { data } = trpc.myThing.useQuery({ message: 'hello world!' }, { context: queryClientContext });

  return (
    <View style={styles.container}>
      <Text>{data || 'Loading...'}</Text>
      <SignOutButton />
      <StatusBar style="auto" />
    </View>
  );
};

const SignOutButton = () => {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
