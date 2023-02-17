import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DefaulTitle from "../../../../../../components/uiket/DefaultTitle";
import { SearchSettingsIcon } from "../../../../../../assets/icons/icons";
import { COLORS } from "../../../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../../../constants/routes";

const CategorieInfoTitle = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.CategoriesSetting as never);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>IT</Text>
        <Text style={styles.info}>199 преподавателей</Text>
      </View>
      <TouchableOpacity style={styles.settings} onPress={onPress}>
        <SearchSettingsIcon width={26} height={27} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default CategorieInfoTitle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleBox: {},
  settings: {
    backgroundColor: "#F4B840",
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: COLORS.tabBgColor,
  },
  info: {
    color: "#9A9A9A",
    fontSize: 15,
  },
});
