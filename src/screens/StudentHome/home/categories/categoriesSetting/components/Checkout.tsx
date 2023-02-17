import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../../../../constants/colors";

const Checkout = () => {
  const [checkout, setCheckout] = useState("");
  return (
    <View style={styles.checkout}>
      <Text style={styles.checkoutTitle}>Выберите тип поиска:</Text>
      <View style={styles.chekoutBox}>
        <TouchableOpacity
          style={styles.chekoutItem}
          onPress={() => setCheckout("Преподаватель")}
        >
          <View style={styles.checloutIn}>
            {checkout === "Преподаватель" ? (
              <View style={styles.checloutInCart}></View>
            ) : null}
          </View>
          <Text
            style={[
              checkout === "Преподаватель"
                ? styles.checkoutItemTitleActive
                : styles.checkoutItemTitle,
            ]}
          >
            Преподаватель
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chekoutItem}
          onPress={() => setCheckout("Учебный центр")}
        >
          <View style={styles.checloutIn}>
            {checkout === "Учебный центр" ? (
              <View style={styles.checloutInCart}></View>
            ) : null}
          </View>
          <Text
            style={[
              checkout === "Учебный центр"
                ? styles.checkoutItemTitleActive
                : styles.checkoutItemTitle,
            ]}
          >
            Учебный центр
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  checkout: {},
  checkoutTitle: {
    color: COLORS.tabBgColor,
    fontSize: 16,
    fontWeight: "700",
  },
  chekoutBox: {
    flexDirection: "row",
    marginTop: 13,
  },
  chekoutItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  },
  checloutIn: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.tabBgColor,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutItemTitle: {
    color: "#9A9A9A",
    fontSize: 14,
    marginLeft: 10,
  },
  checkoutItemTitleActive: {
    color: COLORS.tabBgColor,
    fontSize: 14,
    marginLeft: 10,
  },
  checloutInCart: {
    backgroundColor: COLORS.tabBgColor,
    width: 12,
    height: 12,
    borderRadius: 50,
  },
});
