import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavbarAll from "../../../components/uiket/NavbarAll";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import GapHeight from "../../../constants/GapHeight";
import FavoriteItemCart from "../../../components/uiket/FavoriteItemCart";
import { CloseIcon } from "../../../assets/icons/icons";
const data = [
  {
    id: 0,
    title: "Рафаэль Ройтман",
  },
  {
    id: 1,
    title: "Рафаэль Ройтман",
  },
  {
    id: 2,
    title: "Рафаэль Ройтман",
  },
  {
    id: 3,
    title: "Рафаэль Ройтман",
  },
];
const FavoritesScreen = () => {
  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8", flex: 1 }}>
      <NavbarAll />
      <View style={styles.container}>
        <DefaulTitle title="Избранные" color="#47406A" />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <FavoriteItemCart icon={<CloseIcon />} item={item} />
          )}
          numColumns={2}
          style={{ marginTop: 15, height: "100%" }}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <GapHeight height={100} />
      </View>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    height: "100%",
    paddingTop: 15,
  },

  contentContainerStyle: {
    flexDirection: "column",
    padding: 20,
  },
});
