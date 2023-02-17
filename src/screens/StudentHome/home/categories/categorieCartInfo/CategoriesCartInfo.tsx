import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import CategorieInfoTitle from "./components/CategorieInfoTitle";
import { COLORS } from "../../../../../constants/colors";
import GapHeight from "../../../../../constants/GapHeight";
import MapCart from "./components/MapCart";
import { BottomArrow } from "../../../../../assets/icons/icons";
import CategoriesCartInfoItem from "./components/CategoriesCartInfoItem";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const CategoriesCartInfo = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <CategorieInfoTitle />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        ListHeaderComponent={
          <>
            <MapCart />
            <View>
              <Text style={styles.title}>Сортировка результатов поиска:</Text>
            </View>
            <View style={styles.sort}>
              <TouchableOpacity style={styles.sortItem}>
                <Text style={styles.sortTitle}>По рейтингу</Text>
                <BottomArrow />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortItem}>
                <Text style={styles.sortTitle}>По цене</Text>
                <BottomArrow />
              </TouchableOpacity>
            </View>
          </>
        }
        ListFooterComponent={
          <>
            <GapHeight height={100} />
          </>
        }
        renderItem={({ item }) => <CategoriesCartInfoItem />}
        style={styles.scrollContainer}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default CategoriesCartInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  scrollContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLORS.white,
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 21,
  },
  title: {
    color: COLORS.tabBgColor,
    fontSize: 17,
    fontWeight: "700",
  },
  sort: {
    flexDirection: "row",
  },
  sortItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 27,
    marginVertical: 10,
  },
  sortTitle: {
    color: "#9A9A9A",
    fontSize: 14,
    marginRight: 5,
  },
});
