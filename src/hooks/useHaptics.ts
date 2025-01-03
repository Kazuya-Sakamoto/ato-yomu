import * as Haptics from 'expo-haptics';

export const useHaptics = () => {
  const onHaptics = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return { onHaptics };
};
