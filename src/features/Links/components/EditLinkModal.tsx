import React, { memo, useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { type LinkCategories } from '@/mocks/linkCategories';
import { type LinkItem } from '@/mocks/links';
import { validateUrl } from '../libs/validateUrl';

type Props = {
  mockCategories: () => LinkCategories[];
  modalVisible: boolean;
  handleCloseModal: () => void;
  editItem: LinkItem | null;
};

const EditLinkModal = ({
  modalVisible,
  handleCloseModal,
  mockCategories,
  editItem,
}: Props) => {
  const [formData, setFormData] = useState<{
    url: string;
    isValidUrl: boolean;
    selectedCategoryId: number | null;
  }>({
    url: '',
    isValidUrl: false,
    selectedCategoryId: null,
  });

  const categories = mockCategories();

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      url: editItem?.url ?? '',
      isValidUrl: validateUrl(editItem?.url ?? ''),
      selectedCategoryId: editItem?.linkCategories.id ?? null,
    }));
  }, [editItem]);

  /**
   * URL 入力時のハンドラ
   * @param text - 入力されたURL文字列
   */
  const handleSetUrl = (text: string) => {
    setFormData((prev) => ({
      ...prev,
      url: text,
      isValidUrl: validateUrl(text),
    }));
  };

  /**
   * カテゴリ選択時のハンドラ
   * @param categoryId - 選択されたカテゴリのID
   */
  const handleSelectCategory = (categoryId: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedCategoryId: categoryId,
    }));
  };

  const handleEditLink = () => {
    handleCloseModal();
    setFormData({
      url: '',
      isValidUrl: false,
      selectedCategoryId: null,
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modalOverlay}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={0}
        >
          <View style={styles.modalContent}>
            <Text color="muted" fontSize="xl" fontWeight="bold" mb="$4">
              {editItem ? editItem.title : ''}
            </Text>

            <View style={styles.inputContainer}>
              <Text fontWeight="bold" color="muted" mb="$1">
                URL
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="https://lgtm-kinako.com/"
                value={formData.url}
                onChangeText={handleSetUrl}
                keyboardType="url"
              />
              {!formData.isValidUrl && formData.url.length > 0 ? (
                <Text style={styles.errorMessage}>
                  URLの形式で入力してください
                </Text>
              ) : (
                <Text mb="$1" />
              )}
            </View>

            <View style={styles.categoryContainer}>
              <Text fontWeight="bold" color="muted" mb="$2">
                カテゴリを選択
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryScroll}
              >
                {categories.map((category) => {
                  const isSelected =
                    category.id === formData.selectedCategoryId;
                  return (
                    <TouchableOpacity
                      key={category.id}
                      style={[
                        styles.categoryCard,
                        isSelected && styles.categoryCardSelected,
                      ]}
                      onPress={() => handleSelectCategory(category.id)}
                    >
                      <Text
                        color={isSelected ? 'background' : 'primary'}
                        fontWeight="bold"
                      >
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <TouchableOpacity
              style={[
                styles.addButton,
                (!formData.isValidUrl || !formData.selectedCategoryId) &&
                  styles.addButtonDisabled,
              ]}
              onPress={handleEditLink}
              disabled={!formData.isValidUrl || !formData.selectedCategoryId}
            >
              <Text color="background" fontWeight="bold" fontSize="xl">
                編集する
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCloseModal}
            >
              <Text fontSize="xl" fontWeight="bold">
                キャンセル
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: theme.spacing(6),
    minHeight: 400,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  textInput: {
    backgroundColor: theme.color.background.light,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: theme.spacing(4),
    paddingHorizontal: theme.spacing(3),
    fontSize: 16,
  },
  errorMessage: {
    marginTop: theme.spacing(1),
    color: theme.color.alert.main,
    fontSize: 14,
  },
  categoryContainer: {
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  categoryScroll: {
    paddingBottom: theme.spacing(4),
  },
  categoryCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(4),
    marginRight: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryCardSelected: {
    backgroundColor: theme.color.brand.main,
  },
  addButton: {
    width: '100%',
    backgroundColor: theme.color.brand.main,
    borderRadius: 8,
    paddingVertical: theme.spacing(4),
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  addButtonDisabled: {
    backgroundColor: theme.color.brand.light,
  },
  cancelButton: {
    width: '100%',
    paddingVertical: theme.spacing(4),
    backgroundColor: theme.color.base.light,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
});

export default memo(EditLinkModal);
