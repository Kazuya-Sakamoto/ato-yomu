import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { data as mockLink, type LinkItem } from '@/mocks/links';

const ProductCard = ({ item }: { item: LinkItem }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text fontSize={'sm'} mb={'$1'}>
          {item.siteName}
        </Text>
        <Text fontWeight="bold" fontSize={'xl'} mb={'$1'}>
          {item.title}
        </Text>
        <Text fontSize={'sm'} color="muted">
          {item.createdDate}
        </Text>
      </View>
    </View>
  );
};

const Card = () => {
  const [products, setProducts] = useState(mockLink);

  const renderProductItem = ({ item }: { item: LinkItem }) => (
    <ProductCard item={item} />
  );

  return (
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
        <MaterialCommunityIcons
          name="link-variant-plus"
          color={'#fff'}
          size={20}
        />
        <Text fontWeight="bold" fontSize={'sm'} color="background">
          リンクを追加する
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.color.background.light,
    paddingTop: theme.spacing(11),
  },
  productList: {
    flex: 1,
    paddingTop: theme.spacing(4),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.color.background.main,
    borderRadius: 8,
    shadowColor: theme.color.background.dark,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  cardInfo: {
    flex: 1,
    marginRight: theme.spacing(4),
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

export default Card;
