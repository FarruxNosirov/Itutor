import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import GapHeight from "../../../constants/GapHeight";
import GoBackHeader from "../../../components/uiket/GoBackHeader";
import OnAccount from "./components/OnAccount";
import Replenishment from "./components/Replenishment";
import DefaultButton from "../../../components/uiket/DefaultButton";
import { COLORS } from "../../../constants/colors";
import NavbarAll from "../../../components/uiket/NavbarAll";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants/routes";

const TeacherBalansScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8" }}>
      <NavbarAll />
      <DefaulTitle title="Баланс" color="#47406A" marginTop={15} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <OnAccount />
        <Replenishment cartOnline={true} />
        <Replenishment cartNumber={true} />
        <View style={styles.btnBox}>
          <DefaultButton
            title="Пополнить"
            ButtonStyle={{ backgroundColor: COLORS.tabBgColor }}
            onPress={() => navigation.navigate(ROUTES.PaidService as never)}
          />
        </View>
        <GapHeight height={150} />
      </ScrollView>
    </View>
  );
};

export default TeacherBalansScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    height: "90%",
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  btnBox: {
    width: "100%",
    marginTop: 36,
  },
});
