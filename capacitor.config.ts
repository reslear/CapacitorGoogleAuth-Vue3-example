// <reference types="@reslear/capacitor-google-auth" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.company.auth',
  appName: 'CapacitorGoogleAuth-Vue3-example',
  webDir: 'dist',
  plugins: {
    GoogleAuth: {
      clientId: process.env.GOOGLE_CLIENT_ID_IOS,
      scopes: ['profile', 'email'],
      serverClientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
