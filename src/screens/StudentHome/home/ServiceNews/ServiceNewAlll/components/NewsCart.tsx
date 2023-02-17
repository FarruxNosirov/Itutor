import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../../../constants/routes";
import { CheckerboardScrenIcon } from "../../../../../../assets/icons/icons";

const NewsCart = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(ROUTES.NewsCartInfo as never)}
    >
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../../../../../../assets/images/news.png")}
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Изучайте японский язык</Text>
        <Text style={styles.infoValyu}>
          Практикую все свои умения на работе, поэтому даю реальные знания и
          опыт.
        </Text>
      </View>
      <View style={styles.data}>
        <CheckerboardScrenIcon
          width={16}
          height={16}
          color={COLORS.tabBgColor}
        />
        <Text style={{ fontSize: 13, color: COLORS.tabBgColor }}>
          28.12.2022
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
    borderRadius: 10,
    marginBottom: 12,
    position: "relative",
  },
  imageBox: {
    width: "100%",
    height: 194,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoBox: {
    height: 107,
    width: "100%",
    paddingVertical: 21,
    paddingHorizontal: 14,
  },
  infoTitle: {
    fontSize: 20,
    color: COLORS.tabBgColor,
    fontWeight: "700",
    marginBottom: 12,
  },
  infoValyu: {
    fontSize: 13,
    color: "#9A9A9A",
  },
  data: {
    position: "absolute",
    top: 12,
    right: 14,
    backgroundColor: COLORS.white,
    width: 106,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 8,
  },
});
