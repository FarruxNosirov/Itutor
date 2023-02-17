import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DefaulTitle from "../../../../components/uiket/DefaultTitle";
import AccountCart from "./AccountCart";
import { COLORS } from "../../../../constants/colors";
import DefaultInput from "../../../../components/uiket/TextInput";
import DefaultButton from "../../../../components/uiket/DefaultButton";
type propsTpye = {
  cartOnline?: boolean;
  cartNumber?: boolean;
};
const data = [
  {
    id: 0,
    title: "Рафаэль Ройтман",
  },
  {
    id: 1,
    title: "Рафаэль Ройтман",
  },
  {
    id: 2,
    title: "Рафаэль Ройтман",
  },
  {
    id: 3,
    title: "Рафаэль Ройтман",
  },
];
const Replenishment = (props: propsTpye) => {
  return (
    <View style={styles.container}>
      {props.cartOnline ? (
        <View
          style={{
            marginTop: 12,
            backgroundColor: "#fff",
            borderRadius: 10,
            paddingVertical: 19,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: COLORS.tabBgColor,
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Способы пополнения:
          </Text>
          <View style={styles.cartBox}>
            {data.map((item, index) => (
              <AccountCart key={index} />
            ))}
          </View>
        </View>
      ) : null}
      {props?.cartNumber ? (
        <View
          style={{
            marginTop: 12,
            backgroundColor: "#fff",
            borderRadius: 10,
            paddingVertical: 19,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: COLORS.tabBgColor,
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 16,
            }}
          >
            Способы пополнения:
          </Text>
          <DefaultInput
            label="Номер карты"
            lableColor="#47406A"
            backgroundColor="#F2F2F2"
          />
          <DefaultInput
            label="Срок годности"
            lableColor="#47406A"
            backgroundColor="#F2F2F2"
          />
        </View>
      ) : null}
    </View>
  );
};

export default Replenishment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  cartBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    marginTop: 12,
  },
  btnBox: {
    width: "100%",
  },
});
