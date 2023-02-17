import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

type AllTitleType = {
  title?: string;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
};

export default function DefaulTitle(props: AllTitleType) {
  return (
    <View
      style={[
        styles.title_container,
        { marginBottom: props.marginBottom, marginTop: props.marginTop },
      ]}
    >
      {props ? (
        <Text
          style={[
            styles.title,
            { color: props?.color ? props?.color : COLORS.white },
          ]}
        >
          {props.title}
        </Text>
      ) : (
        <Text style={[styles.title]}>Популярные товары</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title_container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});
