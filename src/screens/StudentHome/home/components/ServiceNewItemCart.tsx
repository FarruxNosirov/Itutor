import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StrokeIcon, UserTwoIcon } from "../../../../assets/icons/icons";
import { COLORS } from "../../../../constants/colors";
type PropsType = {
  title?: string;
  text?: any;
};
const ServiceNewItemCart = (props: PropsType) => {
  const title = "Изучайте японский язык";
  const name = "Быстро нашел себе преподавателя. Отличная платформа";
  return (
    <View style={styles.container}>
      <View style={styles.img_box}>
        <View style={styles.image_bg}>
          <Image
            style={styles.image}
            source={require("../../../../assets/images/image_bg.png")}
          />
        </View>
      </View>
      <View style={styles.info_box}>
        <Text style={styles.title}>
          {title.length > 30 ? title.slice(0, 30) + "..." : title}
        </Text>
        <Text style={styles.text_info}>
          {name.length > 60 ? name.slice(0, 60) + "..." : name}
        </Text>
      </View>
    </View>
  );
};

export default ServiceNewItemCart;

const styles = StyleSheet.create({
  container: {
    width: 188,
    height: 231,
    backgroundColor: COLORS.white,
    marginRight: 10,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_box: {
    height: 121,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },

  image_bg: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image_old: {
    position: "absolute",
    width: 94,
    height: 94,
    borderRadius: 50,
    zIndex: 10,
  },
  image_person: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  info_box: {
    width: "100%",
    padding: 10,
    height: 110,
  },
  title: {
    color: "#47406A",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 7,
  },
  text_info: {
    fontWeight: "400",
    fontSize: 11,
    color: "#B5B5B5",
  },
});
