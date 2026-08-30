import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.github.dajiaohuang.evoatlas',
  appName: 'Evo Atlas',
  webDir: 'dist-mobile',
  backgroundColor: '#081115',
  server: {
    androidScheme: 'https',
    iosScheme: 'capacitor',
  },
  android: {
    backgroundColor: '#081115',
    allowMixedContent: false,
  },
  ios: {
    backgroundColor: '#081115',
    contentInset: 'automatic',
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#081115',
      showSpinner: false,
      launchFadeOutDuration: 180,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#081115',
      overlaysWebView: false,
    },
  },
}

export default config
