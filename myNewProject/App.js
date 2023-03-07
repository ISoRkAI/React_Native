import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
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
  Platform,
} from 'react-native';

import * as Font from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

const initialState = {
  login: '',
  email: '',
  password: '',
};

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
};

export default App = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground style={styles.image} source={require('./Screens/BGPhoto.jpg')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.containerRegistration}>
              <View style={styles.containerAvatar}>
                <Image style={styles.avatarImage}></Image>
              </View>
              <Text style={styles.text}>Регистрация</Text>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={value => setState(prevState => ({ ...prevState, login: value }))}
                value={state.login}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Адрес єлектроной почты"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
              ></TextInput>
              <TouchableOpacity style={styles.button} onPress={keyboardHide}>
                <Text style={styles.buttonText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.textLogin}>Уже есть аккаунт? Войти</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },

  image: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },

  containerRegistration: {
    backgroundColor: '#ffffff',
    paddingTop: 92,
    paddingBottom: 78,
  },

  avatarImage: {
    position: 'absolute',
    top: -92 + -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },

  containerAvatar: {
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
    lineHeight: 35,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 0.16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 33,
  },

  button: {
    marginTop: 43,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 16,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },

  textLogin: {
    color: '#1B4371',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
});
