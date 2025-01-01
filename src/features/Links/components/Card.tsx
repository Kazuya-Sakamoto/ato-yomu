import React, { memo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { type LinkItem } from '@/mocks/links';

type Props = {
  navigateToDetails: () => void;
  item: LinkItem;
  onSwipeLeft: (id: number) => void;
  onSwipeRight: (id: number) => void;
};

const Card = ({
  navigateToDetails,
  item,
  onSwipeLeft,
  onSwipeRight,
}: Props) => {
  const renderLeftItem = () => (
    <View style={[styles.swipeAction, styles.swipeActionLeft]}>
      <Text fontSize="lg" fontWeight="bold" color="background">
        保存
      </Text>
    </View>
  );

  const renderRightItem = () => (
    <View style={[styles.swipeAction, styles.swipeActionRight]}>
      <Text fontSize="lg" fontWeight="bold" color="background">
        削除
      </Text>
    </View>
  );

  const handleSwipeLeft = (id: number) => {
    onSwipeLeft(id);
  };

  const handleSwipeRight = (id: number) => {
    onSwipeRight(id);
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
              <Text fontSize="sm">{item.siteName}</Text>
            </View>
            <Text fontSize="sm" color="muted" mb="$1">
              {item.createdDate}
            </Text>
          </View>
          <View style={styles.cardTitle}>
            <Text fontWeight="bold" fontSize="lg" mr="$1">
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
          <Text fontSize="sm" color="muted">
            {item.domainUrl}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  swipeAction: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  swipeActionLeft: {
    backgroundColor: theme.color.brand.light,
    borderRadius: 10,
    height: '80%',
    marginTop: theme.spacing(2),
  },
  swipeActionRight: {
    backgroundColor: theme.color.alert.main,
    borderRadius: 10,
    height: '80%',
    marginTop: theme.spacing(2),
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
});

export default memo(Card);
