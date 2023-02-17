import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { CloseIcon } from "../../../assets/icons/icons";
import { COLORS } from "../../../constants/colors";
import { DrawerActions, useNavigation } from "@react-navigation/native";
const CustomDrawer = (props: any) => {
  const novigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 28,
      }}
    >
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <TouchableOpacity
            onPress={() => novigation.dispatch(DrawerActions.closeDrawer())}
          >
            <CloseIcon color={"#9a9a9a56"} />
          </TouchableOpacity>
        </View>
        <View style={styles.userProfile}>
          <View style={styles.userImageBox}>
            <Image
              style={styles.userImage}
              source={require("../../../assets/images/Ellipse5.png")}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Рафаэль Ройтман</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.userPrice}>Баланс: </Text>
              <Text style={styles.userPriceNumber}> 100.000 сум</Text>
            </View>
          </View>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          padding: 0,
          margin: 0,
        }}
      >
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 30,
  },
  closeIcon: {
    width: "100%",
    paddingRight: 25,
    alignItems: "flex-end",
  },
  userProfile: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  userImageBox: {
    width: 69,
    height: 69,
  },
  userImage: {
    borderRadius: 50,
    width: "100%",
    height: "100%",
  },
  userInfo: {
    marginLeft: 11,
  },
  userName: {
    color: COLORS.tabBgColor,
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 30,
  },
  userPrice: {
    fontSize: 15,
    color: COLORS.tabBgColor,
    fontWeight: "400",
  },
  userPriceNumber: {
    fontSize: 15,
    color: "#9A9A9A",
    fontWeight: "400",
  },
});
