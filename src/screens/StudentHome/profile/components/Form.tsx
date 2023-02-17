import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DefaultInput from "../../../../components/uiket/TextInput";
import { STRINGS } from "../../../../locales/strings";
import DefaultButton from "../../../../components/uiket/DefaultButton";
type propsType = {
  btnTitle?: string;
  onClick?: () => void;
};
const Form = (props: propsType) => {
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
        label={STRINGS.ru.PhoneNumber}
        lableColor="#47406A"
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={STRINGS.ru.email}
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
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
});
