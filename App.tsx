import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/components/Main';
import { ClientProvider } from './src/providers/ClientProvider';
import Constants from 'expo-constants';

export default function App() {
  return (
    <ClientProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Main />
      </SafeAreaProvider>
    </ClientProvider>
  );
}
