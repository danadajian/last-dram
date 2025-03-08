import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Home } from './components/Home';
import { ClientProvider } from './providers/ClientProvider';
import React from 'react';

export const App = () => (
  <ClientProvider>
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Home />
    </SafeAreaProvider>
  </ClientProvider>
);
