import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ProductsTitle from "../../../../components/uiket/ProductsTitle";
import UserReviewItemCart from "../components/UserReviewItemCart";

type Props = {
  title?: string;
  filter?: boolean;
};
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];

export default function UserReview(props: Props) {
  const navigation = useNavigation();

  return (
    <View style={{ marginVertical: 15 }}>
      <ProductsTitle title={props.title} showButton={false} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <UserReviewItemCart />}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: { paddingHorizontal: 10 },
});
