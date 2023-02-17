import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PhotoGalleryCart from "./PhotoGalleryCart";
import { COLORS } from "../../../../../../../constants/colors";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  //   { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const PhotoGallery = () => {
  return (
    <View>
      <Text style={styles.title}>PhotoGallery</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PhotoGalleryCart />}
        style={{ marginTop: 15 }}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {
    flexDirection: "column",
  },
  title: {
    color: COLORS.tabBgColor,
    fontSize: 21,
    fontWeight: "700",
  },
});
