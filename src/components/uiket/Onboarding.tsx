import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "./GoBackHeader";
import { COLORS } from "../../constants/colors";
import {
  RegisterBottomIcon,
  RegisterPersonArrow,
} from "../../assets/icons/icons";
import DefaultButton from "./DefaultButton";
type propsType = {
  title?: string;
  info?: any;
  imagePerson?: any;
  onPress?: () => void;
};
const Onboarding = (props: propsType) => {
  return (
    <SafeAreaView style={styles.container}>
      <GoBackHeader />
      <View style={styles.info_box}>
        <Text style={styles.title}>
          {props.title ? props.title : "Пройди регистрацию"}
        </Text>
        <Text style={styles.info}>
          {props.info
            ? props.info
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip"}
        </Text>
      </View>
      <View style={styles.image_box}>
        <View style={styles.person_imge}>
          {props.imagePerson ? props.imagePerson : <RegisterPersonArrow />}
        </View>
        <View style={styles.bottom_image}>
          <RegisterBottomIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#47406A",
    flex: 1,
    width: "100%",
  },
  info_box: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 28,
    marginBottom: 18,
  },
  info: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 20,
  },
  image_box: {
    position: "relative",
    width: "100%",
    minHeight: 300,
    marginTop: 50,
  },
  person_imge: {
    position: "absolute",
    zIndex: 2,
    bottom: 37,
    left: 240,
  },
  bottom_image: {
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    right: 0,
  },

  btn_box: {
    marginTop: 21,
    paddingHorizontal: 20,
  },
});
