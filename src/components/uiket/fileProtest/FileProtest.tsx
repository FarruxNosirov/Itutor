import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLORS } from "../../../constants/colors";
import { CloseIcon } from "../../../assets/icons/icons";
import DefaulTitle from "../DefaultTitle";
import DefaultButton from "../DefaultButton";
type propsType = {
  setModalVisible?: () => void;
  modalVisible?: any;
};
const FileProtest = (props: propsType) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={props.setModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeBox}>
              <TouchableOpacity onPress={props.setModalVisible}>
                <CloseIcon color={COLORS.tabBgColor} />
              </TouchableOpacity>
            </View>
            <View>
              <DefaulTitle title="Подать протест" color={COLORS.tabBgColor} />
            </View>
            <TextInput multiline={true} style={styles.input} />
            <View
              style={{ paddingHorizontal: 20, width: "100%", marginTop: 20 }}
            >
              <DefaultButton
                title="Отправить"
                ButtonStyle={{ backgroundColor: COLORS.tabBgColor }}
                onPress={props.setModalVisible}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FileProtest;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000006f",
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 335,
    height: 379,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  input: {
    width: 258,
    height: 191,
    backgroundColor: "#F2F2F2",
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 18,
  },
});
