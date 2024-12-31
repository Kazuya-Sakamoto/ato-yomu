import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { data as mockLink, type LinkItem } from '@/mocks/links';

const ProductCard = ({ item }: { item: LinkItem }) => {
  const router = useRouter();

  const navigateToDetails = () => {
    router.push({
      pathname: `/links/${item.id}`,
      params: {
        url: item.url,
        siteName: item.siteName,
      },
    });
  };

  const renderLeftItem = () => (
    <View
      style={[
        styles.swipeAction,
        {
          backgroundColor: theme.color.brand.light,
          borderRadius: 10,
          height: '80%',
          marginTop: theme.spacing(2),
        },
      ]}
    >
      <Text fontSize={'lg'} fontWeight="bold" color="background">
        保存
      </Text>
    </View>
  );

  const renderRightItem = () => (
    <View
      style={[
        styles.swipeAction,
        {
          backgroundColor: theme.color.alert.main,
          borderRadius: 10,
          height: '80%',
          marginTop: theme.spacing(2),
        },
      ]}
    >
      <Text fontSize={'lg'} fontWeight="bold" color="background">
        削除
      </Text>
    </View>
  );

  const handleSwipeLeft = (id: number) => {
    console.log(id, '左');
  };

  const handleSwipeRight = (id: number) => {
    console.log(id, '右');
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftItem}
      renderRightActions={renderRightItem}
      onSwipeableOpen={(d) => {
        if (d === 'left') handleSwipeLeft(item.id);
        if (d === 'right') handleSwipeRight(item.id);
      }}
    >
      <TouchableOpacity onPress={navigateToDetails} style={styles.card}>
        <View style={styles.cardInfo}>
          <View style={styles.header}>
            <View style={styles.siteInfo}>
              {item.iconUrl && (
                <Image
                  source={{ uri: item.iconUrl }}
                  style={styles.icon}
                  resizeMode="contain"
                />
              )}
              <Text fontSize={'sm'}>{item.siteName}</Text>
            </View>
            <Text fontSize={'sm'} color="muted" mb={'$1'}>
              {item.createdDate}
            </Text>
          </View>
          <View style={styles.cardTitle}>
            <Text fontWeight="bold" fontSize={'lg'} mr={'$1'}>
              {item.title}
            </Text>
            {item.ogImage && (
              <Image
                source={{ uri: item.ogImage }}
                style={styles.ogImage}
                resizeMode="cover"
              />
            )}
          </View>
          <Text fontSize={'sm'} color="muted">
            {item.domainUrl}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const Card = () => {
  const [products, setProducts] = useState(mockLink);

  const renderProductItem = ({ item }: { item: LinkItem }) => (
    <ProductCard item={item} />
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={products}
          style={styles.productList}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing(4),
            paddingBottom: theme.spacing(24),
          }}
        />
        <TouchableOpacity style={styles.addLinkButton}>
          <MaterialIcons
            name="add-circle-outline"
            color={theme.color.background.main}
            size={20}
          />
          <Text fontWeight="bold" fontSize={'sm'} color="background">
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
  productList: {
    flex: 1,
    paddingTop: theme.spacing(4),
  },
  card: {
    backgroundColor: theme.color.background.main,
    borderRadius: 8,
    shadowColor: theme.color.background.dark,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    paddingVertical: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  cardInfo: {
    flex: 1,
    marginRight: theme.spacing(3),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  siteInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: theme.spacing(1),
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  ogImage: {
    width: 115,
    height: 60,
    borderRadius: 4,
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
  swipeAction: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
});

export default Card;
