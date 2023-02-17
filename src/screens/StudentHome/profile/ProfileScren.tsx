import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NavbarAll from "../../../components/uiket/NavbarAll";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import PersonalCart from "../../../components/uiket/PersonalCart";
import Form from "./components/Form";
import GapHeight from "../../../constants/GapHeight";
import DefaultButton from "../../../components/uiket/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import FileProtest from "../../../components/uiket/fileProtest/FileProtest";
import useVisible from "../../../hooks/useVisible";

const ProfileScren = () => {
  const navigation = useNavigation();
  const [valyu, setValyu] = useState(false);
  const modalReview = useVisible();
  const editingHandler = () => {
    setValyu((a) => !a);
  };

  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8" }}>
      <NavbarAll />
      <ScrollView style={styles.container}>
        <DefaulTitle title="Личные данные" color="#47406A" />
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <PersonalCart />
        </View>

        <Form />
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <DefaultButton
            title={valyu ? "Изменить" : "Сохранить"}
            ButtonStyle={{ backgroundColor: "#47406A", marginTop: 39 }}
            onPress={editingHandler}
          />
        </View>
        <GapHeight height={100} />
        <FileProtest
          modalVisible={modalReview.visible}
          setModalVisible={modalReview.toggle}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScren;

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
