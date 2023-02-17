import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { EditingIcon } from "../../assets/icons/icons";

type propsType = {
  title?: string;
  editingIcon?: boolean;
  icon?: any;
  item?: any;
};
const FavoriteItemCart = (props: propsType) => {
  return (
    <View
      style={{
        marginTop: 15,
        marginRight: 20,
        width: Dimensions.get("screen").width / 2 - 30,
      }}
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
            {props.icon ? props.icon : <EditingIcon />}
          </TouchableOpacity>
        )}
      </View>
      {props.item.title ? (
        <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
          <Text style={styles.cart_info}>{props?.item.title}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default FavoriteItemCart;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 158,
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
    top: 0,
    right: 0,
  },
  cart_info: {},
});
