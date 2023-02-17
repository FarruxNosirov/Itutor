import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../../../constants/colors";
import {
  BalanseIconActive,
  CatalogIconNotActive,
  StrokeIcon,
  UserTwoIcon,
} from "../../../../../../assets/icons/icons";
import DefaultButton from "../../../../../../components/uiket/DefaultButton";
type propsType = {
  onClick?: () => void;
};
const TeacherAllInfoCart = (props: propsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../../../../../../assets/images/educationteacher.png")}
        />
      </View>
      <View style={styles.personInfo}>
        <View style={styles.personItem}>
          <Text style={styles.personName}>Ройтман Рафаэль</Text>
          <Text style={styles.personJob}>Узбекистан, Ташкент</Text>
        </View>
        <View style={styles.iconBox}>
          <View style={styles.ocenkaValyu}>
            <StrokeIcon />
            <Text style={{ marginLeft: 4 }}>5.5</Text>
          </View>
          <View style={styles.ocenkaValyu}>
            <UserTwoIcon />
            <Text style={{ marginLeft: 4 }}>178</Text>
          </View>
          <View style={styles.ocenkaValyu}>
            <BalanseIconActive width={16} height={15} color={"#000033"} />
            <Text style={{ marginLeft: 4 }}>от 10$</Text>
          </View>
        </View>
        <View style={styles.btnContent}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>Принять</Text>
          </TouchableOpacity>
          <View style={styles.mailIcon}>
            <CatalogIconNotActive width={23} height={22} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeacherAllInfoCart;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    borderRadius: 15,
    flexDirection: "row",
  },
  imageBox: {
    width: 133,
    height: 138,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  personInfo: {
    width: "55%",
    marginLeft: 13,
    position: "relative",
  },
  personItem: {
    paddingTop: 5,
    width: "100%",
  },
  personName: {
    fontSize: 21,
    fontWeight: "700",
    color: "#000033",
  },
  personJob: {
    fontSize: 16,
    fontWeight: "400",
    color: "#9A9A9A",
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    width: 141,
    height: 39,
    backgroundColor: "#F4B840",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btnTitle: {
    color: COLORS.white,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 15,
    marginTop: 10,
  },
  ocenkaValyu: {
    flexDirection: "row",
    alignItems: "center",
  },
  mailIcon: {
    marginLeft: 15,
  },
});
