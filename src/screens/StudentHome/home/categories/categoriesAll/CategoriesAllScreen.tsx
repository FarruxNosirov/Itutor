import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchIcon } from "../../../../../assets/icons/icons";
import DefaulTitle from "../../../../../components/uiket/DefaultTitle";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import SearchInput from "../../../../../components/uiket/search/SearchInput";
import { COLORS } from "../../../../../constants/colors";
import CategorieAllCardItem from "./CategoriesAllCartItem";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const CategoriesAllScreen = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle title="Категории" color={COLORS.tabBgColor} />
      <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 34 }}>
        <SearchInput Icon2={<SearchIcon />} />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <CategorieAllCardItem item={item} />}
        style={styles.container2}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
        numColumns={4}
      />
    </View>
  );
};

export default CategoriesAllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container2: {},
  contentContainerStyle: {
    paddingHorizontal: 20,

    justifyContent: "center",
  },
});
