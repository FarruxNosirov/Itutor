import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./PaidService.styles";
import GoBackHeader from "../GoBackHeader";
import { COLORS } from "../../../constants/colors";
import DefaulTitle from "../DefaultTitle";
import PaidServiceItemCart from "./components/PaidServiceItemCart";
import GapHeight from "../../../constants/GapHeight";

const PaidService = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle
        color={COLORS.tabBgColor}
        title="Платные услуги"
        marginBottom={25}
      />
      <ScrollView
        style={{ paddingHorizontal: 20, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <PaidServiceItemCart />
        <PaidServiceItemCart />
        <PaidServiceItemCart />
        <PaidServiceItemCart />
        <PaidServiceItemCart />
        <PaidServiceItemCart />
        <PaidServiceItemCart />
        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default PaidService;
