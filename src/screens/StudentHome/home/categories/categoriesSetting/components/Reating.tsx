import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Reating = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reating</Text>
      <Image source={require("../../../../../../assets/images/Group86.png")} />
    </View>
  );
};

export default Reating;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 40,
  },
  title: {
    color: "#47406A",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
});
