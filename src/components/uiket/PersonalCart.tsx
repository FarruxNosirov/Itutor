import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { EditingIcon } from "../../assets/icons/icons";

type propsType = {
  title?: string;
  editingIcon?: boolean;
  onClick?: () => void;
};
const PersonalCart = (props: propsType) => {
  return (
    <TouchableOpacity
      onPress={props.onClick}
      style={{ marginTop: 15, marginRight: 12 }}
    >
      <View style={styles.container}>
        <View style={styles.image_box}>
          <Image
            style={styles.image}
            source={require("../../assets/images/profile.png")}
          />
        </View>
        {props.editingIcon ?? (
          <TouchableOpacity style={styles.editing}>
            <EditingIcon />
          </TouchableOpacity>
        )}
      </View>
      {props.title ? (
        <View style={{ width: 115, alignItems: "center", marginTop: 10 }}>
          <Text style={styles.cart_info}>{props?.title}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default PersonalCart;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  image_box: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  editing: {
    position: "absolute",
    width: 43,
    height: 43,
    backgroundColor: "#47406A",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    bottom: -11,
    right: -11,
  },
  cart_info: {},
});
