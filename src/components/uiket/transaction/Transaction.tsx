import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../GoBackHeader";
import { COLORS } from "../../../constants/colors";
import DefaulTitle from "../DefaultTitle";
import TransactionItemCart from "./TransactionItemCart";
import GapHeight from "../../../constants/GapHeight";

const Transaction = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle
        title="Транзакции"
        color={COLORS.tabBgColor}
        marginBottom={20}
      />
      <ScrollView
        style={{ width: "100%", paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <TransactionItemCart />
        <TransactionItemCart />
        <TransactionItemCart />
        <TransactionItemCart />
        <TransactionItemCart />
        <TransactionItemCart />
        <TransactionItemCart />
        <TransactionItemCart />
        <TransactionItemCart />
        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
