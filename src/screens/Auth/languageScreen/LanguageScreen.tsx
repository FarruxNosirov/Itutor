import React from "react";

import { useNavigation } from "@react-navigation/native";
import WelcomeScreen from "../../../components/template/WelcomeScreen";

import { ROUTES } from "../../../constants/routes";
import FlagButton from "../../../components/uiket/FlagButton";

export default function LanguageScreen(props: any) {
  const navigation = useNavigation();

  return (
    <WelcomeScreen title="Добро пожаловать" text={"Выберите язык"}>
      <FlagButton
        flagName="ru"
        title="Русский"
        onPress={() => {
          navigation.navigate(ROUTES.LOGIN as never);
        }}
      />
      <FlagButton
        flagName="uz"
        title="O'zbek"
        onPress={() => {
          navigation.navigate(ROUTES.LOGIN as never);
        }}
      />
      <FlagButton
        flagName="en"
        title="English"
        onPress={() => {
          navigation.navigate(ROUTES.LOGIN as never);
        }}
      />
    </WelcomeScreen>
  );
}
