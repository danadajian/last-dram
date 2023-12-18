import React, { PropsWithChildren } from 'react';
import Constants from 'expo-constants';
import { Text } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Text>You are Signed out</Text>
      </SignedOut>
    </ClerkProvider>
  );
}
