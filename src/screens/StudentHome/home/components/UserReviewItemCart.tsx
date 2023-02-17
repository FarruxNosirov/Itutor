import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

import * as StoreReview from "expo-store-review";
import { COLORS } from "../../../../constants/colors";
import { StrokeIcon } from "../../../../assets/icons/icons";
type propsType = {
  image?: string;
  name?: string;
  jobUser?: string;
  amount?: number;
  revers?: number;
};
const UserReviewItemCart = (props: propsType) => {
  const name = "Быстро нашел себе преподавателя. Отличная платформа";
  return (
    <View style={styles.box}>
      <View style={styles.top_img}>
        <View style={styles.userImage}>
          <Image
            style={{
              width: 57,
              height: 57,
              borderRadius: 50,
            }}
            source={require("../../../../assets/images/Ellipse2.png")}
          />
        </View>
        <View style={styles.userInfo}>
          <View style={styles.userName}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginTop: 10,
                color: COLORS.defaultBlack,
                marginBottom: 2,
              }}
            >
              Рафаэль Ройтман
            </Text>
            <Text>UI UX Designer</Text>
          </View>
          <View style={styles.userRevers}>
            <View style={{ marginRight: 7 }}>
              <StrokeIcon />
            </View>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#C8C8C8",
              }}
            >
              5
            </Text>
          </View>
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
          {name.length > 60 ? name.slice(0, 60) + "..." : name}
        </Text>
      </View>
    </View>
  );
};

export default UserReviewItemCart;

const styles = StyleSheet.create({
  top_img: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  userImage: {
    width: 57,
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 40,
    color: "#3F3535",
    marginBottom: 29,
  },

  box: {
    backgroundColor: "#fff",
    shadowOffset: { width: -1, height: 1 },
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    minHeight: 150,
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 5,
    width: 335,
    marginRight: 7,
  },
  userInfo: {
    flexDirection: "row",
    position: "relative",
    width: "85%",
    justifyContent: "space-between",
    paddingRight: 23,
    height: "100%",
  },
  bottom_doc: {
    marginTop: 21,
    width: "100%",
  },
  userName: {
    marginLeft: 16,
    width: "75%",
  },
  userRevers: {
    flexDirection: "row",
    alignItems: "center",
  },
});
