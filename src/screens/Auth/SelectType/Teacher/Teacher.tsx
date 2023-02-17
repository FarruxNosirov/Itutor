import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContainer from "../../../../components/template/AuthContainer";
import NavigationService from "../../../../NavigationService";

const Teacher = () => {
  const onPress = () => {
    NavigationService.navigate("TEACHERNAVIGATION");
  };
  return <AuthContainer teacher={true} onClick={onPress} />;
};

export default Teacher;

const styles = StyleSheet.create({});
