import React from "react";
import { StyleSheet } from "react-native";
import AuthContainer from "../../../../components/template/AuthContainer";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";
import NavigationService from "../../../../NavigationService";

const EducationalCenter = () => {
  const onPress = () => {
    NavigationService.navigate("EDUCATIONALCENTERVIGATION");
  };
  return <AuthContainer education={true} onClick={onPress} />;
};

export default EducationalCenter;

const styles = StyleSheet.create({});
