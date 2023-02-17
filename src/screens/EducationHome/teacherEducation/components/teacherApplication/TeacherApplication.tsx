import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../../constants/colors";
type propsType = {
  onClick?: () => void;
};
const TeacherApplication = (props: propsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/images/educationteacher.png")}
        />
      </View>
      <View style={styles.personInfo}>
        <View style={styles.personItem}>
          <Text style={styles.personName}>Ройтман Рафаэль</Text>
          <Text style={styles.personJob}>UI/UX Преподаватель</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={props.onClick}>
          <Text style={styles.btnTitle}>Подробнее</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherApplication;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 13,
  },
  imageBox: {
    width: 133,
    height: 138,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  personInfo: {
    width: "55%",
    marginLeft: 13,
    position: "relative",
  },
  personItem: {
    paddingTop: 10,
    width: "100%",
  },
  personName: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.tabBgColor,
  },
  personJob: {
    fontSize: 13,
    fontWeight: "400",
    color: "#9A9A9A",
    marginTop: 4,
  },
  btn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 113,
    height: 34,
    backgroundColor: COLORS.tabBgColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btnTitle: {
    color: COLORS.white,
  },
});
