import React, { PropsWithChildren } from 'react';
import Constants from 'expo-constants';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut, useAuth, useOAuth } from '@clerk/clerk-expo';
import { coolDownAsync, maybeCompleteAuthSession, warmUpAsync } from 'expo-web-browser';
import { getItemAsync, setItemAsync } from 'expo-secure-store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const tokenCache = {
  async getToken(key: string) {
    try {
      return getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }
};

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          {children}
          <SignOut />
        </SignedIn>
        <SignedOut>
          <SignInWithOAuth />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

maybeCompleteAuthSession();

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void warmUpAsync();
    return () => {
      void coolDownAsync();
    };
  }, []);
};

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return <Button title="Sign in with Google" onPress={onPress} />;
};
