import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";

const CategorieItemCard = ({ item }: any) => {
  const [onClick, setOnclick] = useState();
  const navigation = useNavigation();
  const onPress = (e: any) => {
    setOnclick(e);
    navigation.navigate(ROUTES.CategoriesCartInfo as never);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.image_box,
          { backgroundColor: onClick === item.id ? "#F4B840" : "#F2F2F2" },
        ]}
        onPress={() => onPress(item.id)}
      >
        <Image source={require("../../../../assets/images/Vector.png")} />
      </TouchableOpacity>
      {item?.name ? <Text style={styles.title}>{item?.name}</Text> : null}
    </View>
  );
};

export default CategorieItemCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  image_box: {
    width: 84,
    height: 82,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.black,
    marginTop: 9,
  },
});
