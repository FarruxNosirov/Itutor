import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "../../assets/icons/icons";

type Props = {
  title?: string;
  onPress?: () => void;
  color?: string;
};

export default function GoBackHeader(props: Props) {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{ bottom: 20, top: 20, left: 20, right: 20 }}
        style={styles.row}
      >
        <LeftArrow color={props?.color} />
        {props.title && <Text style={styles.title}>{props.title}</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    marginTop: 46,
    marginBottom: 24,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#71717184",
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    color: "#47406A",
    fontWeight: "700",
  },
});
