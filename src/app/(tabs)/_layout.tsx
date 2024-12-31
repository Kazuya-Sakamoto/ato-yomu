import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#60519b',
        tabBarInactiveTintColor: '#bfc0d1',
        headerShown: false,
        tabBarStyle: {
          height: 55,
          backgroundColor: '#ffffff',
          shadowColor: '#1e202c',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          shadowRadius: 10,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="links"
        options={{
          tabBarLabel: 'リンク',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="link-variant"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
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
}
