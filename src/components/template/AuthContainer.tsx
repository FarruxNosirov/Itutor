import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import GapHeight from '../../constants/GapHeight';
import {COLORS} from '../../constants/colors';
import {STRINGS} from '../../locales/strings';
import DefaultButton from '../uiket/DefaultButton';
import DefaulTitle from '../uiket/DefaultTitle';
import GoBackHeader from '../uiket/GoBackHeader';
import DefaultInput from '../uiket/TextInput';
import useRootState from '../../hooks/useRootState';
type PropsType = {
  title?: string;
  text?: string;
  imageWidth?: any;
  height?: any;
  fontSize?: any;
  education?: boolean;
  student?: boolean;
  teacher?: boolean;
  onClick?: () => void;
};

const AuthContainer = (props: PropsType) => {
  const state = useRootState();
  return (
    <View style={{backgroundColor: COLORS.tabBgColor, flex: 1}}>
      <GoBackHeader />
      <DefaulTitle title={STRINGS.ru.registration} />
      {props?.education ? (
        <ScrollView style={styles.input_box}>
          <DefaultInput label={STRINGS.ru.name} />
          <DefaultInput label={STRINGS.ru.inputLastName} />
          <DefaultInput label={STRINGS.ru.PhoneNumber} />
          <DefaultInput label={STRINGS.ru.password} />
          <DefaultInput label={STRINGS.ru.ConfirmPassword} />
          <DefaultButton
            title="Зарегестрироваться"
            ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
            TextStyle={{color: COLORS.white}}
            onPress={props?.onClick}
          />
          <GapHeight height={68} />
        </ScrollView>
      ) : null}
      {props?.student ? (
        <ScrollView style={styles.input_box}>
          <DefaultInput label={STRINGS.ru.ContractID} />
          <DefaultInput label={STRINGS.ru.NameOftheTrainingCenter} />
          <DefaultInput label={STRINGS.ru.PhoneNumber} />
          <DefaultInput label={STRINGS.ru.password} />
          <DefaultInput label={STRINGS.ru.ConfirmPassword} />
          <DefaultButton
            title="Зарегестрироваться"
            ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
            TextStyle={{color: COLORS.white}}
            onPress={props?.onClick}
          />
          <GapHeight height={68} />
        </ScrollView>
      ) : null}
      {props?.teacher ? (
        <ScrollView style={styles.input_box}>
          <DefaultInput label={STRINGS.ru.name} />
          <DefaultInput
            label={STRINGS.ru.inputLastName}
            onChangeText={e => state.auth.setSignUp(e, 'name')}
          />
          <DefaultInput
            label={STRINGS.ru.PhoneNumber}
            onChangeText={e => state.auth.setSignUp(e, 'phone')}
          />
          <DefaultInput
            label={STRINGS.ru.password}
            onChangeText={e => state.auth.setSignUp(e, 'password')}
          />
          <DefaultInput label={STRINGS.ru.ConfirmPassword} />
          <DefaultButton
            title="Зарегестрироваться"
            ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
            TextStyle={{color: COLORS.white}}
            onPress={props?.onClick}
          />
          <GapHeight height={68} />
        </ScrollView>
      ) : null}
    </View>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  input_box: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 29,
    paddingBottom: 200,
  },
});
