import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/components/Main';
import { ClientProvider } from './src/providers/ClientProvider';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react-native';
import Constants from 'expo-constants';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    ...Constants.expoConfig?.extra
  }
});

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator loginMechanisms={['email']}>
        <ClientProvider>
          <SafeAreaProvider>
            <StatusBar style="dark" />
            <Main />
          </SafeAreaProvider>
        </ClientProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}
