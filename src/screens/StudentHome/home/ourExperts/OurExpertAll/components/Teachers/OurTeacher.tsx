import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import StudentItemCartExpert from "../studentItemCartExpert/StudentItemCartExpert";
import { COLORS } from "../../../../../../../constants/colors";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const OurTeacher = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tetle}>Преподаватели</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <StudentItemCartExpert />}
        ListHeaderComponentStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default OurTeacher;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  contentContainerStyle: {
    padding: 10,
  },
  tetle: {
    color: COLORS.tabBgColor,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 20,
  },
});
