import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DefaultButton from "../../../../components/uiket/DefaultButton";
import NavbarAll from "../../../../components/uiket/NavbarAll";
import PersonalCart from "../../../../components/uiket/PersonalCart";
import GapHeight from "../../../../constants/GapHeight";
import FormEditingTeacher from "../components/FormEditingTeacher";

const TeacherEditingProfile = () => {
  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8" }}>
      <NavbarAll />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <PersonalCart />
        </View>
        <FormEditingTeacher />
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <DefaultButton
            title={"Сохранить"}
            ButtonStyle={{ backgroundColor: "#47406A", marginTop: 39 }}
          />
        </View>
        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default TeacherEditingProfile;

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
