import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';

type IconName =
  | 'settings-outline'
  | 'person-add-outline'
  | 'notifications-outline'
  | 'help-outline'
  | 'mail-outline'
  | 'reader-outline'
  | 'shield-checkmark-outline';

type Menu = {
  id: number;
  name: string;
  icon: IconName;
  image: string;
};

export default function SettingsScreen() {
  const menus: Menu[] = [
    {
      id: 1,
      name: '設定',
      icon: 'settings-outline',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 2,
      name: '認証する',
      icon: 'person-add-outline',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 3,
      name: '通知',
      icon: 'notifications-outline',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 4,
      name: 'よくあるご質問',
      icon: 'help-outline',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 5,
      name: 'お問い合わせ',
      icon: 'mail-outline',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 6,
      name: '利用規約',
      icon: 'reader-outline',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 7,
      name: 'プライバシーポリシー',
      icon: 'shield-checkmark-outline',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
  ];

  const [items] = useState(menus);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          }}
        />
        <Text fontSize={'2xl'} fontWeight="bold" color="muted">
          AtoYomu
        </Text>
      </View>

      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.list}>
            <View style={styles.listLeft}>
              <Ionicons
                style={styles.icon}
                name={item.icon}
                color={theme.color.brand.dark}
                size={25}
              />
              <View style={styles.titleContainer}>
                <Text fontSize={'md'} ml={'$3'} color="muted" fontWeight="bold">
                  {item.name}
                </Text>
              </View>
            </View>
            <Ionicons
              style={styles.icon}
              name={'chevron-forward-sharp'}
              color={theme.color.base.main}
              size={20}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.background.main,
  },
  header: {
    padding: theme.spacing(6),
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: theme.color.brand.dark,
    marginBottom: 10,
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.color.base.light,
    borderBottomWidth: 0.3,
    paddingVertical: theme.spacing(4),
    paddingHorizontal: theme.spacing(6),
  },
  listLeft: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
