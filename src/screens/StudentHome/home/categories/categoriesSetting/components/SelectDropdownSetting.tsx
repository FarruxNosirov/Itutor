import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { BottomArrow } from "../../../../../../assets/icons/icons";
import { COLORS } from "../../../../../../constants/colors";
const dataOrderType = [
  {
    id: 1,
    name: "Самовывоз",
    value: "pickup",
  },
  {
    id: 2,
    name: "Доставка курьером",
    value: "delivery",
  },
];
const SelectDropdownSetting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box_item}>
        <Text style={styles.title}>Укажите тип занятия:</Text>
        <SelectDropdown
          data={dataOrderType as any}
          buttonTextAfterSelection={(selectedItem: any, index: any) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: "#3F3535",
            fontSize: 16,
            textAlign: "left",
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={"#000000"} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: "#3F3535",
            fontSize: 16,
          }}
          defaultButtonText="Online через видеоурок "
        />
      </View>
      <View style={styles.box_item}>
        <Text style={styles.title}>Выберите дисциплину:</Text>
        <SelectDropdown
          data={dataOrderType as any}
          buttonTextAfterSelection={(selectedItem: any, index: any) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: "#3F3535",
            fontSize: 16,
            textAlign: "left",
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={"#000000"} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: "#3F3535",
            fontSize: 16,
          }}
          defaultButtonText="Английский язык"
        />
      </View>
      <View style={styles.box_item}>
        <Text style={styles.title}>Укажите вашу страну</Text>
        <SelectDropdown
          data={dataOrderType as any}
          buttonTextAfterSelection={(selectedItem: any, index: any) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: "#3F3535",
            fontSize: 16,
            textAlign: "left",
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={"#000000"} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: "#3F3535",
            fontSize: 16,
          }}
          defaultButtonText="Узбекистан"
        />
      </View>
      <View style={styles.box_item}>
        <Text style={styles.title}>Укажите ваш регион</Text>
        <SelectDropdown
          data={dataOrderType as any}
          buttonTextAfterSelection={(selectedItem: any, index: any) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: "#3F3535",
            fontSize: 16,
            textAlign: "left",
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={"#000000"} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: "#3F3535",
            fontSize: 16,
          }}
          defaultButtonText="Ташкентский район"
        />
      </View>
      <View style={styles.box_item}>
        <Text style={styles.title}>Пол преподавателя</Text>
        <SelectDropdown
          data={dataOrderType as any}
          buttonTextAfterSelection={(selectedItem: any, index: any) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: "#3F3535",
            fontSize: 16,
            textAlign: "left",
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={"#000000"} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: "#3F3535",
            fontSize: 16,
          }}
          defaultButtonText="Женский"
        />
      </View>
    </View>
  );
};

export default SelectDropdownSetting;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  box_item: {
    width: "100%",
    marginBottom: 20,
  },
  dropdown2BtnStyle: {
    width: "100%",
    height: 61,
    borderRadius: 5,
    paddingHorizontal: 24,
    fontSize: 16,
    marginTop: 15,
  },
  title: {
    padding: 0,
    margin: 0,
    color: COLORS.tabBgColor,
    fontSize: 16,
    fontWeight: "700",
  },
});
