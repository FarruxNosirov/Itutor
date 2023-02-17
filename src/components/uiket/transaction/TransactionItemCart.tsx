import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GoBackHeader from "../GoBackHeader";
import DefaulTitle from "../DefaultTitle";
import { COLORS } from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants/routes";

const TransactionItemCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.idContent}>
        <Text style={styles.idContent_title}>ID 123</Text>
        <Text style={styles.idContent_title}>11.30.2022 15:00</Text>
      </View>
      <View style={styles.nameContent}>
        <Text style={styles.nameContentTitle}>Заголовок услуги</Text>
      </View>
      <View style={styles.status}>
        <Text>Статус:</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES.ReviewAllComponent as never)
          }
        >
          <Text style={styles.statusBtn}> Оплачено</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionItemCart;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    width: "100%",
    borderRadius: 10,
    height: 114,
    marginBottom: 11,
  },
  idContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  idContent_title: {
    fontSize: 16,
    color: "#9A9A9A",
  },
  nameContent: {
    marginTop: 10,
  },
  nameContentTitle: {
    fontSize: 16,
    color: COLORS.tabBgColor,
    fontWeight: "700",
  },

  status: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  statusBtn: {
    color: COLORS.tabBgColor,
    fontWeight: "700",
  },
});
