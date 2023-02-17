import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

type propsType = {
  editingIcon?: boolean;
  icon?: any;
  item?: any;
};
const AccountCart = (props: propsType) => {
  return (
    <TouchableOpacity style={styles.image_box}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/Uzcard.png")}
      />
    </TouchableOpacity>
  );
};

export default AccountCart;

const styles = StyleSheet.create({
  image_box: {
    width: 125,
    height: 119,
    backgroundColor: "#f2f2f2a5",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 9,
    marginBottom: 9,
  },
  image: {},
  editing: {
    position: "absolute",
    width: 43,
    height: 43,
    backgroundColor: "#47406A",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
  },
  cart_info: {},
});
