import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
type propsType = {
  title?: string;
};

const Certificate = (props: propsType) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.info}>
          {props.title ? props.title : "Сертификаты"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Certificate;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 153,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  info: {
    color: "#9A9A9A",
    fontSize: 14,
  },
});
