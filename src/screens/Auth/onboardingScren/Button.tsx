/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from "react";
import {
  StyleSheet, // CSS-like styles
  Text, // Renders text
  TouchableOpacity, // Pressable container
  View, // Container component
} from "react-native";
import DefaultButton from "../../../components/uiket/DefaultButton";
import { COLORS } from "../../../constants/colors";

export default class Button extends Component<any> {
  render({ onPress } = this.props) {
    return (
      <View style={styles.button}>
        <DefaultButton
          title="Продолжить"
          ButtonStyle={{ backgroundColor: "#F4B840" }}
          TextStyle={{ color: COLORS.white }}
          onPress={onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
