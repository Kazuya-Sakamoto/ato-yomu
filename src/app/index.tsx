import { StyleSheet, Text, View } from 'react-native';

import Card from '@/components/layouts/Links/Card';
import theme from '@/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
});
