import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

type Props = {
  onPress?: () => void;
  title?: string;
  flagName?: string;
  iconUrl?: any;
};

export default function FlagButton(props: Props) {
  let imgRequire;
  if (props.flagName === "ru") {
    imgRequire = require("../../assets/images/ru.png");
  } else if (props.flagName === "en") {
    imgRequire = require("../../assets/images/en.png");
  } else if (props.flagName === "uz") {
    imgRequire = require("../../assets/images/uz.png");
  }

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {props.iconUrl ? (
        <View style={styles.flagIcon}>{props.iconUrl}</View>
      ) : (
        <Image source={imgRequire} style={styles.flagIcon} />
      )}

      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 61,
    backgroundColor: "#69628D",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 26,
    marginBottom: 7,
  },
  flagIcon: {
    width: 30,
    height: 30,
    marginRight: 25,
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 48,
    fontWeight: "400",
    fontStyle: "normal",
    color: COLORS.white,
  },
});
