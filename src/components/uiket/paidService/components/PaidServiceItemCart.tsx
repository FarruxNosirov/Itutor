import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DefaultButton from "../../DefaultButton";
import { COLORS } from "../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";

const PaidServiceItemCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.itemTitle_content}>
        <Text style={styles.itemTitle}>Заголовок услуги</Text>
      </View>
      <View style={styles.iteminfo_content}>
        <Text style={styles.iteminfo}>
          Быстро нашел себе преподавателя. Отличная платформа
        </Text>
      </View>
      <View style={styles.btn_content}>
        <View style={styles.btn}>
          <DefaultButton
            title="Купить"
            ButtonStyle={{ backgroundColor: COLORS.tabBgColor }}
            onPress={() => navigation.navigate(ROUTES.Transaction as never)}
          />
        </View>
      </View>
    </View>
  );
};

export default PaidServiceItemCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 16,
    width: "100%",
    borderRadius: 10,
    marginBottom: 11,
    height: 152,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.tabBgColor,
  },
  iteminfo: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9A9A9A",
  },
  btn_content: {
    alignItems: "flex-end",
    width: "100%",
    marginTop: 9,
  },
  btn: {
    width: 119,
  },
  iteminfo_content: {
    width: "80%",
  },
  itemTitle_content: {
    marginBottom: 7,
  },
});
