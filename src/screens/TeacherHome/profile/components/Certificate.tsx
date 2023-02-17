import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Certificate = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.info}>Загруженный</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Certificate;

const styles = StyleSheet.create({
  container: {
    width: 162,
    height: 153,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    color: "#9A9A9A",
    fontSize: 14,
  },
});
