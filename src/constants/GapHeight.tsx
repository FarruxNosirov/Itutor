import { StyleSheet, Text, View } from "react-native";
import React from "react";
type propsType = {
  height?: any;
};
const GapHeight = (props: propsType) => {
  return <View style={{ width: "100%", height: props?.height }}></View>;
};

export default GapHeight;

const styles = StyleSheet.create({});
