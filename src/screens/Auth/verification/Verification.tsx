import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import WelcomeScreen from "../../../components/template/WelcomeScreen";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { COLORS } from "../../../constants/colors";
import DefaultButton from "../../../components/uiket/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants/routes";

const CELL_COUNT = 5;
const Verification = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
  return (
    <WelcomeScreen
      title="Введите код,
      полученный в SMS"
      text={""}
      imageWidth={254}
      height={231}
      fontSize={28}
    >
      <>
        <View>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View style={styles.number_box} key={index}>
                <Text
                  style={styles.cell}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{ width: "100%", marginTop: 50 }}>
          <DefaultButton
            title="Войти в ЛК"
            ButtonStyle={{ backgroundColor: "#F4B840" }}
            TextStyle={{ color: COLORS.white }}
            onPress={() => navigation.navigate(ROUTES.Screens as never)}
          />
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#C9C9C9",
              marginTop: 40,
              fontSize: 16,
              lineHeight: 20,
            }}
          >
            Повторная отправка кода в сообщении возможна через 0:54
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.RECOVERYCODE as never)}
          >
            <Text style={styles.repledCode}>Отправить код ещё раз</Text>
          </TouchableOpacity>
        </View>
      </>
    </WelcomeScreen>
  );
};

export default Verification;
const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  number_box: {
    width: 49,
    height: 45,
    marginHorizontal: 4,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.white,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    fontSize: 38,
    color: COLORS.white,
  },
  focusCell: {
    borderBottomColor: "#000",
  },
  repledCode: {
    textAlign: "center",
    marginTop: 47,
    color: "#C9C9C9",
    textDecorationLine: "underline",
  },
});
