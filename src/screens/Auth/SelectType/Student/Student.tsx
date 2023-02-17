import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContainer from "../../../../components/template/AuthContainer";
import NavigationService from "../../../../NavigationService";

const Student = () => {
  const onPress = () => {
    NavigationService.navigate("STUDENTNAVIGATION");
  };
  return <AuthContainer student={true} onClick={onPress} />;
};

export default Student;

const styles = StyleSheet.create({});
