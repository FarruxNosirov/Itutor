import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StrokeIcon, UserTwoIcon } from "../../../../assets/icons/icons";
import { COLORS } from "../../../../constants/colors";

const OurExpertItemCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img_box}>
        <View style={styles.image_bg}>
          <Image
            style={styles.image}
            source={require("../../../../assets/images/image_bg.png")}
          />
        </View>
        <View style={styles.image_old}>
          <Image
            style={styles.image_person}
            source={require("../../../../assets/images/Ellipse2.png")}
          />
        </View>
      </View>
      <View style={styles.info_box}>
        <View style={styles.personName_contex}>
          <Text style={styles.personName}>Ройтман Рафаэль</Text>
          <Text style={styles.person_work}>UI/UX DESIGN</Text>
        </View>
        <View style={styles.personStroke}>
          <View style={styles.follower}>
            <UserTwoIcon />
            <Text style={{ color: COLORS.black, marginLeft: 7 }}>189</Text>
          </View>
          <View style={styles.follower}>
            <View style={{ height: "100%", marginRight: 7 }}>
              <StrokeIcon />
            </View>
            <Text style={{ color: COLORS.black }}>5.5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OurExpertItemCart;

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
  personName_contex: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  personName: {
    fontSize: 12,
    color: "#9A9A9A",
  },
  person_work: {
    color: "#47406A",
    fontSize: 17,
  },
  personStroke: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
  },
  follower: {
    flexDirection: "row",
    alignItems: "center",
  },
});
