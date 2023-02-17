import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChooseIcon } from "../../assets/icons/icons";
import { COLORS } from "../../constants/colors";
type propsType = {
  icon?: any;
};
const ChatRecipient = (props: propsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.message_info}>Выбери получателя</Text>
      </View>
      <View style={styles.ekonka}>
        {props.icon ? props.icon : <ChooseIcon />}
      </View>
    </View>
  );
};

export default ChatRecipient;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 350,
  },
  message: {
    width: 209,
    height: 72,
    backgroundColor: "#47406A",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  message_info: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },
  ekonka: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
