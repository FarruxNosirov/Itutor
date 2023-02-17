import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/colors";
import {
  FlagArrowIcon,
  SaveIconMessage,
  StrokeIcon,
} from "../../../assets/icons/icons";
type propsType = {
  setModalVisible?: () => void;
  modalVisible?: any;
};
const ReviewCartItem = (props: propsType) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={props.setModalVisible}
      >
        <View style={styles.oneBox}>
          <Text style={styles.oneBoxTitle}>От:</Text>
          <Text style={styles.oneBoxInfo}>Рафаль Ройтман</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxTitle}>
            Быстро нашел себе преподавателя. Отличная платформа
          </Text>
        </View>
        <View style={styles.footerBox}>
          <View style={styles.ocenka}>
            <Text style={{ marginRight: 4 }}>Оценка:</Text>
            <View style={styles.ocenkaValyu}>
              <StrokeIcon />
              <Text style={{ marginLeft: 4 }}>5.5</Text>
            </View>
          </View>
          <View style={{ marginRight: 20 }}>
            <FlagArrowIcon />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ReviewCartItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 11,
  },
  oneBox: {
    flexDirection: "row",
  },
  oneBoxTitle: {
    color: "#9A9A9A",
    fontSize: 16,
    fontWeight: "400",
  },
  oneBoxInfo: {
    color: "#47406A",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 5,
  },
  infoBox: {
    marginTop: 15,
    marginBottom: 18,
    width: "80%",
  },
  infoBoxTitle: {
    color: "#9A9A9A",
  },
  footerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  ocenka: {
    flexDirection: "row",
  },
  ocenkaValyu: {
    flexDirection: "row",
    alignItems: "center",
  },
});
