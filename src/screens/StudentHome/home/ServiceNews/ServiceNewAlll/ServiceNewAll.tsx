import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import DefaulTitle from "../../../../../components/uiket/DefaultTitle";
import { COLORS } from "../../../../../constants/colors";
import NewsCart from "./components/NewsCart";
import GapHeight from "../../../../../constants/GapHeight";
import PagesNumber from "./components/PagesNumber";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const ServiceNewAll = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle color={COLORS.tabBgColor} title="Новости" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <NewsCart />}
        style={styles.container2}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
        ListFooterComponent={
          <>
            <PagesNumber />
            <GapHeight height={50} />
          </>
        }
      />
    </View>
  );
};

export default ServiceNewAll;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1,
    position: "relative",
  },
  container2: {
    marginTop: 24,
  },
  contentContainerStyle: { paddingHorizontal: 20 },
});
