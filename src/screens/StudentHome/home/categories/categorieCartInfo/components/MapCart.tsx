import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MapCart = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../../../assets/images/image2.5.png")}
      />
    </View>
  );
};

export default MapCart;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 117,
    borderRadius: 5,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});
