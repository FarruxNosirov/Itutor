import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBackHeader from "../uiket/GoBackHeader";
import DefaulTitle from "../uiket/DefaultTitle";
import { COLORS } from "../../constants/colors";
import DefaultInput from "../uiket/TextInput";
import { STRINGS } from "../../locales/strings";
import DefaultButton from "../uiket/DefaultButton";
import GapHeight from "../../constants/GapHeight";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants/routes";
import NavigationService from "../../NavigationService";
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
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.tabBgColor, flex: 1 }}>
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
            ButtonStyle={{ marginTop: 46, backgroundColor: "#F4B840" }}
            TextStyle={{ color: COLORS.white }}
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
            ButtonStyle={{ marginTop: 46, backgroundColor: "#F4B840" }}
            TextStyle={{ color: COLORS.white }}
            onPress={props?.onClick}
          />
          <GapHeight height={68} />
        </ScrollView>
      ) : null}
      {props?.teacher ? (
        <ScrollView style={styles.input_box}>
          <DefaultInput label={STRINGS.ru.name} />
          <DefaultInput label={STRINGS.ru.inputLastName} />
          <DefaultInput label={STRINGS.ru.PhoneNumber} />
          <DefaultInput label={STRINGS.ru.password} />
          <DefaultInput label={STRINGS.ru.ConfirmPassword} />
          <DefaultButton
            title="Зарегестрироваться"
            ButtonStyle={{ marginTop: 46, backgroundColor: "#F4B840" }}
            TextStyle={{ color: COLORS.white }}
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
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 29,
    paddingBottom: 200,
  },
});
