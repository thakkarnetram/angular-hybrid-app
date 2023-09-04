import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'test-prj',
  webDir: 'dist/test-prj',
  server: {
    // url:'http://192.168.29.154:4200',
    url:'http://192.168.1.2:4200',
    cleartext:true
  }
};

export default config;
