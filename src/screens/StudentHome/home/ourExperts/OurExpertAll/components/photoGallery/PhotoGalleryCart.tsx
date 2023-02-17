import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const PhotoGalleryCart = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../../../../assets/images/21.png")}
      />
    </View>
  );
};

export default PhotoGalleryCart;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width / 2 - 25,
    height: 121,
    marginBottom: 9,
    marginRight: 9,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
});
