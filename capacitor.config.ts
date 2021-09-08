/// <reference types="@reslear/capacitor-google-auth" />

import { CapacitorConfig } from '@capacitor/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const config: CapacitorConfig = {
  appId: 'com.company.auth',
  appName: 'CapacitorGoogleAuth-Vue3-example',
  webDir: 'dist',
  plugins: {
    GoogleAuth: {
      clientId: process.env.GOOGLE_CLIENT_ID_IOS || '',
      scopes: [
        'profile',
        'email',
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/contacts.readonly',
      ],
      serverClientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
