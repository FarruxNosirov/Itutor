import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NavbarAll from "../../../../components/uiket/NavbarAll";
import PersonalCart from "../../../../components/uiket/PersonalCart";

import GapHeight from "../../../../constants/GapHeight";
import DefaultButton from "../../../../components/uiket/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";
import FormTeacher from "../components/FormTeacher";

const TeacherProfileScren = () => {
  const navigation = useNavigation();
  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8" }}>
      <NavbarAll />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <PersonalCart />
        </View>
        <FormTeacher />
        <View style={styles.btnBox}>
          <DefaultButton
            title={"Изменить"}
            ButtonStyle={{ backgroundColor: "#47406A", marginTop: 39 }}
            onPress={() =>
              navigation.navigate(ROUTES.TeacherEditingProfile as never)
            }
          />
        </View>
        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default TeacherProfileScren;

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
  btnBox: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
