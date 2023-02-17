import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../../../constants/colors";

const PagesNumber = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.number}>1</Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.number2}>2</Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.number2}>3</Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.number2}>4</Text>
      </View>
    </View>
  );
};

export default PagesNumber;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: COLORS.tabBgColor,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 7,
  },
  number: {
    color: COLORS.white,
  },
  content2: {
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  number2: {
    color: COLORS.black,
  },
});
