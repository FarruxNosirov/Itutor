import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ReviewProductCart from "../../../../../../components/uiket/reviewProductCart/ReviewProductCart";
import { COLORS } from "../../../../../../constants/colors";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const ReviewEducation = () => {
  return (
    <View>
      <Text style={styles.title}>Отзывы о преподавателе</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <ReviewProductCart />}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default ReviewEducation;

const styles = StyleSheet.create({
  container: { marginTop: 10, marginBottom: 20 },
  contentContainerStyle: { padding: 5 },
  title: {
    color: COLORS.black,
    fontSize: 17,
    fontWeight: "700",
    marginTop: 35,
  },
});
