import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import DefaultInput from "../../../../components/uiket/TextInput";
import { STRINGS } from "../../../../locales/strings";
import DefaultButton from "../../../../components/uiket/DefaultButton";
import Certificate from "./Certificate";
import { BottomArrow, CloseIcon } from "../../../../assets/icons/icons";
import SelectDropdown from "react-native-select-dropdown";
type propsType = {
  btnTitle?: string;
  onClick?: () => void;
  editing?: any;
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
const EducationForm = (props: propsType) => {
  return (
    <View style={styles.container}>
      <DefaultInput
        label={STRINGS.ru.ContractID}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={"Наименование учебного центра"}
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
        label={STRINGS.ru.password}
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
      <View style={styles.box_item}>
        <Text style={styles.lable}>О центре</Text>
        <TextInput multiline={true} style={styles.input} />
      </View>
      <View style={styles.box_item}>
        <Text style={{ padding: 0, margin: 0, color: "#000" }}>Категория</Text>
        <View style={styles.box_item2}>
          <SelectDropdown
            data={dataOrderType as any}
            buttonTextAfterSelection={(selectedItem: any, index: any) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item: any, index: any) => {
              return item.name;
            }}
            buttonStyle={styles.dropdown2BtnStyle2}
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
          {props.editing ? (
            <TouchableOpacity style={styles.btnClose}>
              <CloseIcon />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <DefaultInput
        label={"Стоимость в учебном центре"}
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
      {props.editing ? (
        <TouchableOpacity style={styles.box_item}>
          <Text style={{ textAlign: "center", color: "#9A9A9A" }}>
            Добавить ещё
          </Text>
        </TouchableOpacity>
      ) : null}

      <View style={styles.box_item}>
        <Text style={styles.lable}>Сертификаты</Text>
        <View style={{ width: "45%" }}>
          <Certificate title="Загруженный" />
        </View>
      </View>
      <View style={styles.box_item}>
        <Text style={styles.lable}>Фотогалерея</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "45%", marginRight: 10 }}>
            <Certificate title="Загруженный" />
          </View>
          <View style={{ width: "45%" }}>
            <Certificate title="Загруженный" />
          </View>
        </View>
      </View>
      <View style={styles.box_item}>
        <Text style={styles.lable}>Видеобзор</Text>
        <Certificate title="Загруженный" />
      </View>
    </View>
  );
};

export default EducationForm;

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
  input: {
    backgroundColor: "#EFEFEF",
    width: "100%",
    height: 152,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
  },
  dropdown2BtnStyle2: {
    width: "85%",
    height: 61,
    borderRadius: 5,
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 9,
    marginTop: 15,
  },
  box_item2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  btnClose: {
    backgroundColor: "#47406A",
    justifyContent: "center",
    alignItems: "center",
    width: 51,
    height: 60,
    marginTop: 5,
    borderRadius: 5,
  },
});
