import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from "../../../components/template/WelcomeScreen";
import FlagButton from "../../../components/uiket/FlagButton";
import {
  EducationCentryIcon,
  StudentsTypeIcon,
  TecherTypeIcon,
} from "../../../assets/icons/icons";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants/routes";

const SelectType = () => {
  const navigation = useNavigation();
  return (
    <WelcomeScreen title="Выберите тип пользователя">
      <FlagButton
        onPress={() => navigation.navigate(ROUTES.EDUCATIONCENTER as never)}
        title={"Учебный центр"}
        iconUrl={<EducationCentryIcon />}
      />
      <FlagButton
        onPress={() => navigation.navigate(ROUTES.TEACHER as never)}
        title={"Преподаватель"}
        iconUrl={<TecherTypeIcon />}
      />
      <FlagButton
        onPress={() => navigation.navigate(ROUTES.STUDENT as never)}
        title={"Ученик"}
        iconUrl={<StudentsTypeIcon />}
      />
    </WelcomeScreen>
  );
};

export default SelectType;

const styles = StyleSheet.create({});
