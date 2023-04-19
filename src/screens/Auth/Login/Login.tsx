import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WelcomeScreen from '../../../components/template/WelcomeScreen';
import DefaultButton from '../../../components/uiket/DefaultButton';
import DefaultInputEye from '../../../components/uiket/DefaultInputEye';
import DefaultInput from '../../../components/uiket/TextInput';
import {COLORS} from '../../../constants/colors';
import {ROUTES} from '../../../constants/routes';
import useRootState from '../../../hooks/useRootState';
import useRootStore from '../../../hooks/useRootStore';
import {API_URL} from '../../../api/api.constants';
import axios from 'axios';
import {observer} from 'mobx-react';

const Login = () => {
  const navigaton = useNavigation();
  const state = useRootState();
  const store = useRootStore();
  const handleLogin = async () => {
    const res = await store.auth.login(state.auth.state.login);
    console.log('Resssssssss:', res);

    if (res) {
      navigaton.navigate(ROUTES.VERIFICATION as never);
    }
  };

  // const [value, setValue] = useState();
  // const api = async () => {
  //   try {
  //     let res = axios.get('https://admin.becloud.uz/api/shop');
  //     setValue((await res).data);
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   api();
  // }, []);
  // console.log(JSON.stringify(value, null, 2));

  return (
    <WelcomeScreen
      title="Авторизация"
      text={'Авторизуйтесь для получения доступа ко всем возможностям системы'}
      imageWidth={254}
      height={231}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={10}>
        <View>
          <DefaultInput
            placeholder="Номер телефона или email"
            onChangeText={e => state.auth.setLogin(e, 'phone')}
          />
          <DefaultInputEye
            placeholder="Пароль"
            backgroundColor={'#69628D'}
            inputStyle={'#69628D'}
            color={COLORS.white}
            placeholderColor={COLORS.white}
            onChange={e => state.auth.setLogin(e, 'password')}
          />
          {/* <Text style={styles.error}>Не верный логин и/или пароль</Text> */}
        </View>
        <View>
          <DefaultButton
            title={'Войти'}
            ButtonStyle={{
              backgroundColor: '#F4B840',
              marginTop: 30,
            }}
            TextStyle={{color: COLORS.white}}
            onPress={handleLogin}
          />
          <TouchableOpacity
            onPress={() => navigaton.navigate(ROUTES.SELECTTYPE as never)}>
            <Text style={styles.text}>Нет аккаунта?</Text>
          </TouchableOpacity>

          <Text style={styles.text}>или авторизуйтесь при помощи</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={{marginRight: 8}}>
              <Image
                source={require('../../../assets/images/Facebook_icon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 8}}>
              <Image
                source={require('../../../assets/images/GoogleGLogo.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </WelcomeScreen>
  );
};

export default observer(Login);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
    color: '#c9c9c9aa',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  error: {
    color: COLORS.red,
    alignSelf: 'center',
  },
});
