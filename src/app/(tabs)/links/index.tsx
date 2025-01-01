import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';

import theme from '@/config/style';
import Page from '@/features/Links/components/Page';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: '',
          // headerStyle: { backgroundColor: '#f4511e' },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      />
      <Page />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.color.background.main,
  },
});
