import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DefaultInput from "../../../../components/uiket/TextInput";
import { STRINGS } from "../../../../locales/strings";
import DefaultButton from "../../../../components/uiket/DefaultButton";

import { BottomArrow } from "../../../../assets/icons/icons";
import SelectDropdown from "react-native-select-dropdown";
import Certificate from "./Certificate";
type propsType = {
  btnTitle?: string;
  onClick?: () => void;
};
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
const data = [
  {
    id: 1,
    name: "Узбекистан",
    value: "pickup",
  },
];
const data2 = [{ id: 1, name: "Выберите", value: "" }];
const FormTeacher = (props: propsType) => {
  return (
    <View style={styles.container}>
      <DefaultInput
        label={STRINGS.ru.name}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.lastName}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.Surname}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.PhoneNumber}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.Mail}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.acountry}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.region}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.password}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.confirmPassword}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.confirmPassword}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />

      <View style={styles.box_item}>
        <Text style={{ padding: 0, margin: 0, color: "#000" }}>Страна</Text>
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
          defaultButtonText=" "
        />
      </View>
      <View style={styles.box_item}>
        <Text style={{ padding: 0, margin: 0, color: "#000" }}>Регион</Text>
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
          defaultButtonText=" "
        />
      </View>
      <DefaultInput
        label={STRINGS.ru.dateOfBirth}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <DefaultInput
        label={STRINGS.ru.floor}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <DefaultInput
        label={"О преподавателе"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <View style={styles.box_item}>
        <Text style={{ padding: 0, margin: 0, color: "#000" }}>Категория</Text>
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
          defaultButtonText=" "
        />
      </View>
      <DefaultInput
        label={"Стоимость у преподавателя"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <DefaultInput
        label={"У ученика дома"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <DefaultInput
        label={"Online через zoom"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <DefaultInput
        label={"Образование"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <View style={styles.years}>
        <View style={{ width: "48%" }}>
          <DefaultInput
            label={"Год поступления"}
            lableColor="#47406A"
            backgroundColor="#EFEFEF"
            typeOf="number-pad"
          />
        </View>
        <View style={{ width: "48%" }}>
          <DefaultInput
            label={"Год окончания"}
            lableColor="#47406A"
            backgroundColor="#EFEFEF"
            typeOf="number-pad"
          />
        </View>
      </View>
      <DefaultInput
        label={"Опыт работы"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <View style={styles.box_item}>
        <Text style={styles.lable}>Категория</Text>
        <Certificate />
      </View>
      <View style={styles.box_item}>
        <Text style={styles.lable}>Принадлежность к учебному центру:</Text>
        <View style={styles.checkoutBox}>
          <View style={styles.checkout}>
            <TouchableOpacity style={styles.checkoutItem}></TouchableOpacity>
            <Text style={styles.checkoutTitle}>Да</Text>
          </View>
          <View style={styles.checkout}>
            <TouchableOpacity style={styles.checkoutItem}></TouchableOpacity>
            <Text style={styles.checkoutTitle}>Нет</Text>
          </View>
        </View>
      </View>
      <DefaultInput
        label={"Наименование учебного центра"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
      <DefaultInput
        label={"Ссылка на учебный центр"}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
        typeOf="number-pad"
      />
    </View>
  );
};

export default FormTeacher;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 24,
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
    marginBottom: 9,
    marginTop: 15,
  },
  years: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  lable: {
    padding: 0,
    margin: 0,
    color: "#47406A",
    marginBottom: 18,
    fontSize: 16,
  },
  checkoutBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  checkout: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 35,
  },
  checkoutItem: {
    width: 20,
    height: 20,
    backgroundColor: "#EFEFEF",
  },
  checkoutTitle: {
    color: "#9A9A9A",
    marginLeft: 13,
  },
});
