import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/colors";
import { CloseIcon } from "../../../assets/icons/icons";
type propsType = {
  openModal?: boolean;
  closeModal?: () => void;
};
const ModalLeft = (props: propsType) => {
  return (
    <View style={[styles.container, { left: props.openModal ? 0 : "-100%" }]}>
      <View style={styles.contantBox}>
        <View style={styles.closeIcon}>
          <TouchableOpacity onPress={props.closeModal}>
            <CloseIcon color={"#9a9a9a56"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalLeft;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    width: "100%",
    height: "100%",
    position: "absolute",
    transitionDuration: ["1s", "3s"],
    transitionProperty: "all",
  },
  contantBox: {
    backgroundColor: COLORS.white,
    width: 302,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: "100%",
  },
  closeIcon: {
    width: "100%",
    marginTop: 28,
    marginBottom: 19,
    paddingRight: 25,
    alignItems: "flex-end",
  },
});
