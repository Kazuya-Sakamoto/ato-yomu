import { StyleSheet, View } from 'react-native';

import Card from '@/components/layouts/Links/Card';
import theme from '@/config/style';

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
    backgroundColor: theme.color.background.main,
  },
});
