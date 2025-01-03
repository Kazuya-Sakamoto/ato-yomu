import React, { memo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { type LinkItem } from '@/mocks/links';

type Props = {
  navigateToDetails: () => void;
  item: LinkItem;
  onSwipeLeft: (item: LinkItem) => void;
  onSwipeRight: (id: number) => void;
};

const Card = ({
  navigateToDetails,
  item,
  onSwipeLeft,
  onSwipeRight,
}: Props) => {
  const renderLeftItem = () => {
    // if (item.status !== 2) {
    return (
      <View style={[styles.swipeAction, styles.swipeActionLeft]}>
        <MaterialCommunityIcons
          name="note-edit-outline"
          color={theme.color.background.main}
          size={32}
        />
        <Text fontSize="xs" fontWeight="bold" color="background">
          編集
        </Text>
      </View>
    );
    // }
  };

  const renderRightItem = () => (
    <View style={[styles.swipeAction, styles.swipeActionRight]}>
      <MaterialCommunityIcons
        name="delete-outline"
        color={theme.color.background.main}
        size={32}
      />
      <Text fontSize="xs" fontWeight="bold" color="background">
        削除
      </Text>
    </View>
  );

  const handleSwipeLeft = (item: LinkItem) => {
    onSwipeLeft(item);
  };

  const handleSwipeRight = (id: number) => {
    onSwipeRight(id);
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftItem}
      renderRightActions={renderRightItem}
      onSwipeableOpen={(d) => {
        if (d === 'left') handleSwipeLeft(item);
        if (d === 'right') handleSwipeRight(item.id);
      }}
    >
      <TouchableOpacity
        onPress={navigateToDetails}
        style={[
          styles.card,
          // item.status === 2 && {
          //   borderWidth: 3,
          //   borderColor: theme.color.brand.light,
          //   backgroundColor: theme.color.base.light,
          // },
        ]}
      >
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
    borderRadius: 5,
    height: '80%',
    marginTop: theme.spacing(2),
  },
  swipeActionRight: {
    backgroundColor: theme.color.alert.main,
    borderRadius: 5,
    height: '80%',
    marginTop: theme.spacing(2),
  },

  card: {
    backgroundColor: theme.color.background.main,
    borderRadius: 4,
    shadowColor: theme.color.background.dark,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    paddingVertical: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
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
