import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Home } from './components/Home';
import { ClientProvider } from './providers/ClientProvider';
import React, { useMemo } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { StyleSheet, View } from 'react-native';

export const App = () => {
  const userResult = useUser();
  const { user } = useMemo(() => userResult, []);
  if (!user) return null;

  return (
    <ClientProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <Home userId={user.id} />
        </View>
      </SafeAreaProvider>
    </ClientProvider>
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
