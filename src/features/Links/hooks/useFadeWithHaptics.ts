import { useRef } from 'react';
import { Animated } from 'react-native';

import { useHaptics } from '@/hooks/useHaptics';

export const useFadeWithHaptics = (duration = 240) => {
  const { onHaptics } = useHaptics();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const triggerAnimationAndHaptics = async (callback: () => void) => {
    await onHaptics();

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();

    callback();
  };

  return { fadeAnim, triggerAnimationAndHaptics };
};
