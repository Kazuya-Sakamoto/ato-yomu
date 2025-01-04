import React, { memo, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { type GetLinkWithCategory } from '@/graphql/types/getLinkWithCategoriesQuery';
import {
  data as mockCategories,
  type LinkCategories,
} from '@/mocks/linkCategories';
import { useFadeWithHaptics } from '../hooks/useFadeWithHaptics';
import { useGetLinkWithCategories } from '../hooks/useGetLinkWithCategories';
import AddLinkModal from './AddLinkModal';
import Card from './Card';
import EditLinkModal from './EditLinkModal';

const MOCK_USER_ID = 1;

const Page = () => {
  const router = useRouter();
  const { fadeAnim, triggerAnimationAndHaptics } = useFadeWithHaptics();

  const { links, loading, error } = useGetLinkWithCategories(MOCK_USER_ID);

  console.log('Apollo Response links:', links, loading, error);

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editItem, setEditItem] = useState<GetLinkWithCategory | null>(null);
  const [categories] = useState<LinkCategories[]>(mockCategories());
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleOpenEditModal = () => setEditModalVisible(true);
  const handleCloseEditModal = () => setEditModalVisible(false);

  const handleCategoryPress = async (categoryId: number) => {
    await triggerAnimationAndHaptics(() => setActiveCategoryId(categoryId));
  };

  const renderItem = ({ item }: { item: GetLinkWithCategory }) => {
    const navigateToDetails = () => {
      router.push({
        pathname: `/links/${item.id}`,
        params: {
          url: item.url,
          siteName: item.siteName,
        },
      });
    };

    const onSwipeLeft = (item: GetLinkWithCategory) => {
      setEditItem(item);
      handleOpenEditModal();
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

  const filteredProducts =
    activeCategoryId === 1
      ? links
      : links.filter((p) => p.categories?.[0]?.id === activeCategoryId);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AddLinkModal
        mockCategories={mockCategories}
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
      />
      <EditLinkModal
        mockCategories={mockCategories}
        modalVisible={editModalVisible}
        handleCloseModal={handleCloseEditModal}
        editItem={editItem}
      />

      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
          >
            {categories.map((categorie) => {
              const isActive = categorie.id === activeCategoryId;
              return (
                <TouchableOpacity
                  key={categorie.id}
                  style={[
                    styles.filterButton,
                    isActive && styles.filterButtonActive,
                  ]}
                  onPress={() => isActive || handleCategoryPress(categorie.id)}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      isActive && styles.filterButtonTextActive,
                    ]}
                  >
                    {categorie.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
          <FlatList
            data={filteredProducts}
            style={styles.listStyle}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<EmptyContainer />}
            contentContainerStyle={{
              paddingHorizontal: theme.spacing(3),
            }}
          />
        </Animated.View>

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

const EmptyContainer = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text color="muted" fontSize="xl" fontWeight="bold" mb="$2" mt="$6">
        あとで読むリンクを追加しましょう！
      </Text>
      <Ionicons name="earth-outline" color={theme.color.base.main} size={80} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.color.background.light,
  },
  filterContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingHorizontal: theme.spacing(3),
    borderRadius: 16,
    shadowColor: theme.color.brand.dark,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    height: 42,
  },
  filterRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 16,
  },
  filterButton: {
    marginRight: theme.spacing(3),
    paddingVertical: theme.spacing(3),
    paddingHorizontal: theme.spacing(4),
    shadowColor: theme.color.brand.dark,
  },
  filterButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: theme.color.brand.main,
  },
  filterButtonText: {
    color: theme.color.base.main,
    fontWeight: 'bold',
  },
  filterButtonTextActive: {
    color: theme.color.brand.main,
  },
  listStyle: {
    paddingTop: theme.spacing(2),
    minWidth: Dimensions.get('window').width,
    marginBottom: theme.spacing(20),
  },
  emptyContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default memo(Page);
