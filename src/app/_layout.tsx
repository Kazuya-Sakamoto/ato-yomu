import { type FC } from 'react';
import { Tabs } from 'expo-router';
// import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Layout: FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#60519b',
        tabBarInactiveTintColor: '#bfc0d1',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          shadowColor: '#1e202c',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="keeps"
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bookmark-multiple-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: '設定',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
