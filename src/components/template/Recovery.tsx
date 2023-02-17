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
type PropsType = {
  title?: string;
  lable?: string;
};
const RecoveryComponent = (props: PropsType) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.tabBgColor,
        flex: 1,
        position: "relative",
      }}
    >
      <GoBackHeader />
      <DefaulTitle title={STRINGS.ru.recovery} />
      <View style={styles.input_box}>
        <DefaultInput label={props?.lable} />
      </View>
      <View style={styles.btn_box}>
        <DefaultButton title="Запросить код" />
      </View>
    </View>
  );
};

export default RecoveryComponent;

const styles = StyleSheet.create({
  input_box: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 29,
    paddingBottom: 200,
  },
  btn_box: {
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 30,
  },
});
