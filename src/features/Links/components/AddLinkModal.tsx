import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Text from '@/components/parts/Text';
import theme from '@/config/style';
import { validateUrl } from '../libs/validateUrl';

type Props = {
  modalVisible: boolean;
  handleCloseModal: () => void;
};

const AddLinkModal = ({ modalVisible, handleCloseModal }: Props) => {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);

  const handleSetUrl = (text: string) => {
    setUrl(text);
    setIsValidUrl(validateUrl(text));
  };

  const handleAddLink = () => {
    // TODO: URLをパラメータとしてAPIを叩く処理を実装
    handleCloseModal();
    setUrl('');
    setIsValidUrl(false);
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
            <Text color="muted" fontSize="xl" fontWeight="bold" mb="$2">
              あとで読むリンクを追加しましょう！
            </Text>

            <View style={styles.inputContainer}>
              <Text fontWeight="bold" color="muted" mb="$1">
                URL
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="https://lgtm-kinako.com/"
                value={url}
                onChangeText={handleSetUrl}
                keyboardType="url"
              />
              {!isValidUrl && url.length > 0 ? (
                <Text style={styles.errorMessage}>
                  URLの形式で入力してください
                </Text>
              ) : (
                <Text mb={'$1'} />
              )}
            </View>

            <TouchableOpacity
              style={[
                styles.addButton,
                !isValidUrl && styles.addButtonDisabled,
              ]}
              onPress={handleAddLink}
              disabled={!isValidUrl}
            >
              <Text color="background" fontWeight="bold" fontSize="xl">
                追加する
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCloseModal}
            >
              <Text fontSize={'xl'} fontWeight="bold">
                キャンセル
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default AddLinkModal;

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
    minHeight: 300,
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
  addButton: {
    width: '100%',
    backgroundColor: theme.color.brand.main,
    borderRadius: 8,
    paddingVertical: theme.spacing(4),
    alignItems: 'center',
    marginBottom: theme.spacing(4),
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
