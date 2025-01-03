import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleTabPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#60519b',
        tabBarInactiveTintColor: '#bfc0d1',
        headerShown: false,
        tabBarStyle: {
          height: 59,
          backgroundColor: '#ffffff',
          shadowColor: '#1e202c',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          shadowRadius: 10,
          elevation: 10,
        },
      }}
      screenListeners={{
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        tabPress: handleTabPress,
      }}
    >
      <Tabs.Screen
        name="links"
        options={{
          tabBarLabel: 'リンク',
          tabBarIcon: ({ color }) => (
            <Animated.View style={{ opacity: fadeAnim }}>
              <Ionicons name="link-outline" color={color} size={26} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          tabBarLabel: '設定',
          tabBarIcon: ({ color }) => (
            <Animated.View style={{ opacity: fadeAnim }}>
              <Ionicons
                name="ellipsis-horizontal-circle"
                color={color}
                size={26}
              />
            </Animated.View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
