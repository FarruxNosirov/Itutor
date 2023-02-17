import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../constants/colors";

const ChatItemMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.personNime}></Text>
      <View style={styles.messege}>
        <Text style={styles.messege_text}>
          Быстро нашел себе преподавателя. Отличная платформа
        </Text>
      </View>
      <Text style={styles.date_text}>11.30.2022 15:00</Text>
    </View>
  );
};

export default ChatItemMe;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: 2,
  },
  personNime: {
    color: "#3F3535",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 40,
  },
  messege: {
    paddingVertical: 22,
    paddingRight: 9,
    paddingLeft: 18,
    borderColor: COLORS.white,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#F2F2F2",
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  messege_text: {
    color: "#717171",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },
  date_text: {
    color: "#C8C8C8",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 10,
  },
});
