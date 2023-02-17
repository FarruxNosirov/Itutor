import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../../../../constants/colors";

const TeacherItemCart = () => {
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
          <Text style={styles.personJob}>UI/UX </Text>
          <Text style={styles.personJob}>Преподаватель</Text>
        </View>
      </View>
    </View>
  );
};
export default TeacherItemCart;
const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 11,
    width: Dimensions.get("screen").width / 2 - 25,
    marginRight: 11,
    paddingTop: 12,
    paddingBottom: 18,
  },
  imageBox: {
    width: 140,
    height: 138,
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
