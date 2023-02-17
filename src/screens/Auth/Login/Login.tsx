import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import WelcomeScreen from "../../../components/template/WelcomeScreen";
import DefaultInput from "../../../components/uiket/TextInput";
import DefaultInputEye from "../../../components/uiket/DefaultInputEye";
import { COLORS } from "../../../constants/colors";
import DefaultButton from "../../../components/uiket/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants/routes";
// import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const navigaton = useNavigation();
  return (
    <WelcomeScreen
      title="Авторизация"
      text={"Авторизуйтесь для получения доступа ко всем возможностям системы"}
      imageWidth={254}
      height={231}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={10}
      >
        <View>
          <DefaultInput placeholder="Номер телефона или email" />
          <DefaultInputEye
            placeholder="Пароль"
            backgroundColor={"#69628D"}
            inputStyle={"#69628D"}
            color={COLORS.white}
            placeholderColor={COLORS.white}
          />
          {/* <Text style={styles.error}>Не верный логин и/или пароль</Text> */}
        </View>
        <View>
          <DefaultButton
            title={"Войти"}
            ButtonStyle={{
              backgroundColor: "#F4B840",
              marginTop: 30,
            }}
            TextStyle={{ color: COLORS.white }}
            onPress={() => navigaton.navigate(ROUTES.VERIFICATION as never)}
          />
          <TouchableOpacity
            onPress={() => navigaton.navigate(ROUTES.SELECTTYPE as never)}
          >
            <Text style={styles.text}>Нет аккаунта?</Text>
          </TouchableOpacity>

          <Text style={styles.text}>или авторизуйтесь при помощи</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={{ marginRight: 8 }}>
              <Image
                source={require("../../../assets/images/Facebook_icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 8 }}>
              <Image
                source={require("../../../assets/images/GoogleGLogo.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </WelcomeScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
    color: "#c9c9c9aa",
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
  },
  error: {
    color: COLORS.red,
    alignSelf: "center",
  },
});
