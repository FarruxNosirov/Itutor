import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavbarAll from "../../../components/uiket/NavbarAll";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import GapHeight from "../../../constants/GapHeight";
import SearchInput from "../../../components/uiket/search/SearchInput";
import Categories from "./categories/Categories";
import OurExperts from "./ourExperts/OurExpert";
import UserReview from "./userReviews/UserReview";
import ServiceNew from "./ServiceNews/ServiceNew";
import Advertising from "./components/Advertising";
import { SearchIcon, SearchSettingsIcon } from "../../../assets/icons/icons";
import useVisible from "../../../hooks/useVisible";
import ModalLeft from "../../../components/uiket/modalLeft/ModalLeft";

const HomeScreen = () => {
  const leftModalOpen = useVisible();
  return (
    <View style={{ position: "relative", backgroundColor: "#F8F8F8" }}>
      <NavbarAll clickMe={leftModalOpen.show} />
      <ScrollView style={styles.container}>
        <DefaulTitle
          title="Поиск преподавателей и учебных центров"
          color="#47406A"
        />
        <View style={styles.search_box}>
          <SearchInput Icon1={<SearchSettingsIcon />} Icon2={<SearchIcon />} />
        </View>
        <Categories title={"Категории"} />
        <OurExperts title="Наши эксперты" />
        <UserReview title="Отзывы пользователей" />
        <ServiceNew title="Новости сервиса" />
        <Advertising />
        <GapHeight height={100} />
      </ScrollView>
      <ModalLeft
        openModal={leftModalOpen.visible}
        closeModal={leftModalOpen.hide}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    height: "90%",
    paddingTop: 18,
  },
  search_box: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
});
