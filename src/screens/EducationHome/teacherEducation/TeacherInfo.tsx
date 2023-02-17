import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavbarAll from "../../../components/uiket/NavbarAll";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import { COLORS } from "../../../constants/colors";
import TeacherApplication from "./components/teacherApplication/TeacherApplication";
import TeacherItemCart from "./components/teacherItemCart/TeacherItemCart";
import GapHeight from "../../../constants/GapHeight";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants/routes";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const TeacherInfo = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.TeacherInfoScreen as never);
  };
  return (
    <View style={styles.container}>
      <NavbarAll />
      <DefaulTitle
        title="Заявки на вступление"
        color={COLORS.tabBgColor}
        marginTop={15}
      />

      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ width: "100%" }}>
              <TeacherApplication onClick={onPress} />
              <TeacherApplication onClick={onPress} />
            </View>
            <View>
              <Text style={styles.title}>Преподаватели</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <>
            <GapHeight height={100} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <TeacherItemCart />}
        numColumns={2}
        style={styles.flatList}
        ListHeaderComponentStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default TeacherInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#F8F8F8",
  },
  homeBox: {
    width: "100%",
    height: "90%",
    paddingTop: 18,
  },
  flatList: {
    width: "100%",
    paddingHorizontal: 20,
  },
  contentContainerStyle: {
    flexDirection: "column",
  },
  title: {
    color: COLORS.tabBgColor,
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
  },
});
