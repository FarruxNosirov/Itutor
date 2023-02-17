import React from "react";
import { COLORS } from "../../../constants/colors";
import { Rating } from "react-native-ratings";
import { View, Text, StyleSheet, Image } from "react-native";
type propsType = {
  date?: any;
  user?: any;
  review?: any;
  rate?: any;
};
const ReviewProductCart = (props: propsType) => {
  return (
    <View style={styles.box}>
      <View style={styles.top_img}>
        <View style={styles.userImage}>
          <Image source={require("../../../assets/images/Ellipse5.png")} />
        </View>
        <View style={styles.userInfo}>
          <View style={styles.titlePerson}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: COLORS.defaultBlack,
                marginBottom: 2,
              }}
            >
              Рафаэль Ройтман
            </Text>
          </View>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={20}
            ratingColor="#edcf21"
            ratingBackgroundColor="#FFFFFF"
            readonly={true}
            startingValue={5}
            style={styles.started}
          />
        </View>
      </View>
      <View style={styles.bottom_doc}>
        <Text
          style={{
            color: "#C8C8C8",
            fontWeight: "500",
            fontSize: 15,
            lineHeight: 20,
          }}
        >
          Быстро нашел себе преподавателя. Отличная платформа
        </Text>
      </View>
    </View>
  );
};

export default ReviewProductCart;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    shadowOffset: { width: -1, height: 1 },
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    minHeight: 100,
    borderRadius: 10,
    elevation: 5,
    width: "100%",
    paddingTop: 17,
    paddingHorizontal: 16,
    paddingBottom: 15,
    marginVertical: 12,
  },
  bottom_doc: {
    marginTop: 21,
    width: "100%",
  },
  userImage: {
    width: 57,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
  },
  titlePerson: {
    width: "50%",
    marginLeft: 15,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  top_img: {
    flexDirection: "row",
    width: "100%",
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#3F3535",
    marginBottom: 29,
  },

  img_container: {
    width: 95,
    height: 91,
    borderRadius: 15,
    marginLeft: 11,
  },
  img_doc: {
    flexDirection: "row",
    width: "65%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  started: {
    marginTop: -15,
  },
});
