import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
type propsType = {
  imgUrl?: any;
  onClick?: () => void;
};
const CertificateCart = (props: propsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        style={styles.imag}
        source={require("../../../assets/images/image7.png")}
      />
    </TouchableOpacity>
  );
};

export default CertificateCart;

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 102,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  imag: {
    width: "100%",
    height: "100%",
  },
});
