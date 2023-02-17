import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../../../constants/colors";
import { Rating } from "react-native-ratings";

const LeaveFeedback = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Оставить отзыв</Text>
      <View>
        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="Введите отзыв..."
          placeholderTextColor={"#6868687a"}
        />
        <View
          style={{
            marginTop: 21,
            backgroundColor: "#F8F8F8",
            flexDirection: "row",
          }}
        >
          <Text style={styles.title2}>Поставить оценку</Text>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={20}
            ratingColor="#edcf21"
            readonly={true}
            startingValue={5}
            ratingBackgroundColor="#c8c7c8"
          />
        </View>
      </View>
    </View>
  );
};

export default LeaveFeedback;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    width: "100%",
    height: 152,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 28,
    paddingTop: 20,
  },
  container: {
    marginTop: 36,
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
    color: COLORS.tabBgColor,
    textAlign: "center",
  },
  title2: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.tabBgColor,
    marginRight: 20,
  },
});
