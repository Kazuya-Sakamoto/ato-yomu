import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Clipboard from 'expo-clipboard';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { useHaptics } from '@/hooks/useHaptics';

const DetailsScreen = () => {
  const { url, siteName } = useLocalSearchParams();
  const { onHaptics } = useHaptics();

  if (!url || !String(url).startsWith('http')) {
    return (
      <View style={styles.container}>
        <Text>有効なURLが指定されていません</Text>
      </View>
    );
  }

  const handleCopy = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await Clipboard.setStringAsync(String(url));
    await onHaptics();
    if (Platform.OS === 'android') {
      ToastAndroid.show('リンクをコピーしました', ToastAndroid.SHORT);
    } else {
      Alert.alert('リンクをコピーしました');
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: String(siteName),
          headerRight: () => (
            <TouchableOpacity onPress={handleCopy}>
              <Ionicons
                name="copy-outline"
                color={theme.color.base.main}
                size={28}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <WebView source={{ uri: String(url) }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default DetailsScreen;
