import React, { PropsWithChildren } from 'react';
import Constants from 'expo-constants';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
