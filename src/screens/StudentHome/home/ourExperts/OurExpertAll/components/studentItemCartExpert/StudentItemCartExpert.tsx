import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../../../../constants/colors";

const StudentItemCartExpert = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../../../../../../../assets/images/educationteacher.png")}
        />
      </View>
      <View style={styles.personInfo}>
        <Text style={styles.personName}>Ройтман Рафаэль</Text>
        <Text style={styles.personJob}>Преподаватель UI/UX</Text>
      </View>
    </View>
  );
};
export default StudentItemCartExpert;
const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 11,
    width: 168,
    marginRight: 11,
    paddingBottom: 18,
    shadowColor: "#c6c6c6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 238,
  },
  imageBox: {
    width: 168,
    height: 169,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  personInfo: {
    width: "100%",
    position: "relative",
    flexDirection: "column",
    paddingVertical: 13,
    paddingHorizontal: 15,
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
    textAlign: "center",
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
