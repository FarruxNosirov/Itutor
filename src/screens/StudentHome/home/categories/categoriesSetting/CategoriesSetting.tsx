import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import { COLORS } from "../../../../../constants/colors";
import DefaulTitle from "../../../../../components/uiket/DefaultTitle";
import GapHeight from "../../../../../constants/GapHeight";
import Checkout from "./components/Checkout";
import SelectDropdownSetting from "./components/SelectDropdownSetting";
import DefaultButton from "../../../../../components/uiket/DefaultButton";
import Reating from "./components/Reating";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../../constants/routes";

const CategoriesSetting = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.StudentInfoScreen as never);
  };
  return (
    <View style={styles.continaer}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle title="Расширенный поиск" color={COLORS.tabBgColor} />
      <ScrollView style={styles.scrolContent}>
        <Checkout />
        <SelectDropdownSetting />
        <Reating />
        <DefaultButton title="Найти" onPress={onPress} />
        <GapHeight height={50} />
      </ScrollView>
    </View>
  );
};

export default CategoriesSetting;

const styles = StyleSheet.create({
  continaer: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    position: "relative",
  },
  scrolContent: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
});
