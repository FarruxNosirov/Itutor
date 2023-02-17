import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

type Props = {
  title?: string;
  children?: React.ReactNode;
  text?: string;
  imageWidth?: any;
  height?: any;
  fontSize?: any;
};

export default function WelcomeScreen(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/выпкопия.png")}
          style={{
            width: props.imageWidth ? props.imageWidth : 280,
            height: props.height ? props.height : 280,
          }}
        />
      </View>
      <View style={styles.box}>
        <Text
          style={[
            styles.title,
            { fontSize: props.fontSize ? props.fontSize : 24 },
          ]}
        >
          {props.title}
        </Text>
        <Text style={styles.text}>{props.text}</Text>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#47406A",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "100%",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 48,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 28,
    color: COLORS.white,
    textAlign: "center",
  },
});
