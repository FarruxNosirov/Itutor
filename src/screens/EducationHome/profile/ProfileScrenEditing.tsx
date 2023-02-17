import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import NavbarAll from "../../../components/uiket/NavbarAll";
import GapHeight from "../../../constants/GapHeight";
import Form from "./components/EducationForm";
import PersonalCart from "../../../components/uiket/PersonalCart";

const ProfileScrenEditing = () => {
  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8" }}>
      <NavbarAll />
      <ScrollView style={styles.container}>
        <DefaulTitle title="Личные данные" color="#47406A" />
        <PersonalCart />
        <Form btnTitle="Сохранить" />
        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default ProfileScrenEditing;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    height: "90%",
    paddingTop: 18,
  },
  search_box: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
});
