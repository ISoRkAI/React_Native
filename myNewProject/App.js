import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './style/style';

export default App = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={require('./Screens/BGPhoto.jpg')} style={styles.image}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View
            style={{ ...styles.containerRegistration, marginBottom: isShowKeyboard ? -200 : 0 }}
            >
              <View style={styles.containerAvatar}>
                <Image style={styles.avatarImage} />
              </View>
              <View style={styles.containerForm}>
                <Text style={styles.text}>Регистрация</Text>
                <View style={styles.formInput}>
                  <TextInput
                    style={styles.input}
                    placeholder="Логин"
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Адрес электронной почты"
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Пароль"
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                  />
                </View>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={keyboardHide}>
                  <Text style={styles.buttonText}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <Text style={styles.textLogin}>Уже есть аккаунт? Войти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
