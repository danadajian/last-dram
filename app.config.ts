import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'LastDram',
  slug: 'last-dram',
  version: '3.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/d7810d9a-0b36-4926-b882-a60ae58c5246'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    buildNumber: '3.0.0',
    bundleIdentifier: 'com.LastDram'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    bundler: 'metro',
    output: 'single',
    favicon: './assets/favicon.png'
  },
  owner: 'danadajian',
  runtimeVersion: {
    policy: 'sdkVersion'
  },
  extra: {
    apiUrl: 'API_URL' in process.env ? process.env.API_URL : '',
    clerkPublishableKey: 'pk_test_dml0YWwtcGVnYXN1cy05OS5jbGVyay5hY2NvdW50cy5kZXYk',
    eas: {
      projectId: 'd7810d9a-0b36-4926-b882-a60ae58c5246'
    }
  },
  newArchEnabled: true
});
