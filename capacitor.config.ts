import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'omdb.it',
  appName: 'omdb',
  webDir: './src/assets',
  server: {
    androidScheme: 'https'
  }
};

export default config;
