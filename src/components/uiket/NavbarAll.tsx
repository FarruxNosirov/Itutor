import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MenyuIcon, NoteficationIcon } from "../../assets/icons/icons";
import { COLORS } from "../../constants/colors";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants/routes";
type propsType = {
  clickMe?: () => void;
  backgroundColor?: string;
  menyuIconColor?: string;
  notificationIconColor?: string;
};
const NavbarAll = (props: propsType) => {
  const novigation: any = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : "#47406A",
        },
      ]}
    >
      <View style={styles.itemBox}>
        <TouchableOpacity
          style={styles.menyu}
          onPress={() => novigation.dispatch(DrawerActions.openDrawer())}
        >
          <MenyuIcon color={props.menyuIconColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.notifikation}
          onPress={() => novigation.navigate(ROUTES.Notification as never)}
        >
          <View style={styles.notifikation_icon}>
            <NoteficationIcon color={props.notificationIconColor} />
          </View>
          <View style={styles.notifikation_amoun}>
            <Text style={{ fontSize: 15, color: COLORS.white }}>0</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavbarAll;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 20,
    height: 96,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemBox: {
    width: "100%",
    marginTop: 37,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
  },
  menyu: {
    position: "relative",
  },
  notifikation: {
    position: "relative",
  },
  notifikation_icon: {},
  notifikation_amoun: {
    position: "absolute",
    backgroundColor: "#F4B840",
    borderRadius: 50,
    width: 19,
    height: 19,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: -9,
    right: -5,
  },
});
