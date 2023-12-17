module.exports = {
  name: 'LastDram',
  extra: {
    apiUrl: process.env.API_URL,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_USER_POOL_CLIENT_ID,
    eas: {
      projectId: 'd7810d9a-0b36-4926-b882-a60ae58c5246'
    }
  },
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
    favicon: './assets/favicon.png'
  },
  owner: 'danadajian',
  runtimeVersion: {
    policy: 'sdkVersion'
  }
};
