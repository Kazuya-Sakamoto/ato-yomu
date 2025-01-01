import React, { memo, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { data as mockLink, type LinkItem } from '@/mocks/links';
import AddLinkModal from './AddLinkModal';
import Card from './Card';

const Page = () => {
  const router = useRouter();
  const [products] = useState<LinkItem[]>(mockLink);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const renderItem = ({ item }: { item: LinkItem }) => {
    const navigateToDetails = () => {
      router.push({
        pathname: `/links/${item.id}`,
        params: {
          url: item.url,
          siteName: item.siteName,
        },
      });
    };

    const onSwipeLeft = (id: number) => {
      console.log(id, '左');
    };

    const onSwipeRight = (id: number) => {
      console.log(id, '右');
    };

    return (
      <Card
        item={item}
        navigateToDetails={navigateToDetails}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AddLinkModal
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
      />

      <View style={styles.container}>
        <FlatList
          data={products}
          style={styles.ListStyle}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing(3),
            // paddingBottom: theme.spacing(24),
          }}
        />
        <TouchableOpacity
          style={styles.addLinkButton}
          onPress={handleOpenModal}
        >
          <MaterialIcons
            name="add-circle-outline"
            color={theme.color.background.main}
            size={20}
          />
          <Text fontWeight="bold" fontSize="sm" color="background">
            リンクを追加する
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.color.background.light,
  },
  ListStyle: {
    flex: 1,
    paddingTop: theme.spacing(4),
  },
  addLinkButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: theme.color.brand.main,
    borderRadius: 8,
    padding: theme.spacing(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});

export default memo(Page);
