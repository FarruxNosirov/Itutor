import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CheckoutIcon } from "../../../assets/icons/icons";
type propsType = {
  checkout?: any;
  title?: string | number;
  info?: string | number;
  send?: string;
};
const CommentCartItem = (props: propsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props?.title}</Text>
      <View style={styles.infoBox}>
        {props.checkout ? (
          <View style={styles.icon}>
            <CheckoutIcon />
          </View>
        ) : null}
        <View
          style={[
            styles.infoContent,
            { width: props.checkout ? "90%" : "100%" },
          ]}
        >
          <Text style={styles.info}>{props?.info}</Text>
          <TouchableOpacity style={styles.openCart}>
            <Text style={styles.openCartTitle}>{props?.send}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentCartItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 19,
    paddingHorizontal: 16,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    marginBottom: 13,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000033",
  },
  infoBox: {
    width: "100%",
    marginTop: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    color: "#9A9A9A",
  },
  icon: {
    marginRight: 13,
  },
  infoContent: {
    paddingTop: 5,
  },
  openCart: {
    marginTop: 15,
  },
  openCartTitle: {
    color: "#47406A",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
