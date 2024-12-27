import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';

import { ThemeProvider } from '@/theme/ThemeProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
