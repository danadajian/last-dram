import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/components/Main';
import { ClientProvider } from './src/providers/ClientProvider';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react-native';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_COGNITO_CLIENT_ID
  }
});

function App() {
  return (
    <ClientProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Main />
      </SafeAreaProvider>
    </ClientProvider>
  );
}

export default withAuthenticator(App);
