import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Home } from './components/Home';
import { ClientProvider } from './providers/ClientProvider';
import React, { useMemo } from 'react';
import { useUser } from '@clerk/clerk-expo';

export const App = () => {
  const userResult = useUser();
  const { user } = useMemo(() => userResult, []);
  if (!user) return null;

  return (
    <ClientProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Home userId={user.id} />
      </SafeAreaProvider>
    </ClientProvider>
  );
};
