import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack, useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';

const DetailsScreen = () => {
  const { url, siteName } = useLocalSearchParams();

  if (!url || !String(url).startsWith('http')) {
    return (
      <View style={styles.container}>
        <Text>有効なURLが指定されていません</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: String(siteName),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('test')}>
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={theme.color.brand.main}
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
