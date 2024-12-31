import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Layout = () => {
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
        name="links"
        options={{
          tabBarLabel: 'リンク',
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
