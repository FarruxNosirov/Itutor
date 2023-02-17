import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NavbarAll from "../../../components/uiket/NavbarAll";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import PersonalCart from "../../../components/uiket/PersonalCart";

import GapHeight from "../../../constants/GapHeight";
import DefaultButton from "../../../components/uiket/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import EducationForm from "./components/EducationForm";
import useVisible from "../../../hooks/useVisible";

const CenterProfile = () => {
  const navigation = useNavigation();
  const [valyu, setValyu] = useState(false);
  const editing = useVisible();
  const editingHandler = () => {
    setValyu((a) => !a);
    editing.toggle();
  };

  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8" }}>
      <NavbarAll />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <DefaulTitle title="Личные данные" color="#47406A" />
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <PersonalCart />
        </View>
        <EducationForm editing={editing.visible} />
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <DefaultButton
            title={valyu ? "Изменить" : "Сохранить"}
            ButtonStyle={{ backgroundColor: "#47406A", marginTop: 39 }}
            onPress={editingHandler}
          />
        </View>
        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default CenterProfile;

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
