import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import DefaulTitle from "../../../../../components/uiket/DefaultTitle";
import { COLORS } from "../../../../../constants/colors";
import StudentReviewCart from "./components/StudentReviewsCart";
import PagesNumber from "../../ServiceNews/ServiceNewAlll/components/PagesNumber";
import GapHeight from "../../../../../constants/GapHeight";
import LeaveFeedback from "./components/LeaveFeedback";
import DefaultButton from "../../../../../components/uiket/DefaultButton";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const StudentReviews = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle color={COLORS.tabBgColor} title="Отзывы" />
      <FlatList
        ListFooterComponent={
          <>
            <PagesNumber />
            <LeaveFeedback />
            <GapHeight height={30} />
            <DefaultButton title="Оставить отзыв" />
            <GapHeight height={100} />
          </>
        }
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <StudentReviewCart />}
        style={styles.container2}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default StudentReviews;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  container2: { marginTop: 20 },
  contentContainerStyle: { paddingHorizontal: 20 },
});
