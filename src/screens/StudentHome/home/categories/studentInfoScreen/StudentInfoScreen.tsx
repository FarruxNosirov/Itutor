import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CertificateEducation from "./components/certificat/CertificateEducation";
import Characteristics from "./components/characteristic/Characteristics";
import ReviewEducation from "./components/reviewEducation/ReviewEducation";
import TeacherAllInfoCart from "./components/teacherAllInfoCard/TeacherAllInfoCard";
import TeacherTable from "./components/teacherTable/TeacherTable";
import { useNavigation } from "@react-navigation/native";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import { COLORS } from "../../../../../constants/colors";
import CommentCartItem from "../../../../../components/uiket/commentCart/CommentCartItem";
import { BottomArrow } from "../../../../../assets/icons/icons";
import DefaultButton from "../../../../../components/uiket/DefaultButton";
import { ROUTES } from "../../../../../constants/routes";
import GapHeight from "../../../../../constants/GapHeight";

const data = [
  {
    id: 0,
    key_name: "Web Design",
    value_name1: "У преподавателя 40$/час ",
    value_name2: "У ученика дома 60$/час ",
    value_name3: "Online через Zoom 20$/час",
  },
  {
    id: 1,
    key_name: "Web Design",
    value_name1: "У преподавателя 40$/час ",
    value_name2: "У ученика дома 60$/час ",
    value_name3: "Online через Zoom 20$/час",
  },
];
const StudentInfoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <View style={styles.personInfo}>
        <TeacherAllInfoCart />
      </View>
      <ScrollView style={styles.comment} showsVerticalScrollIndicator={false}>
        <CommentCartItem
          title={"О преподавателе"}
          info={
            "Практикую все свои умения на работе, поэтому даю реальные знания и опыт. Отдельные программы обучения для детей и взрослых."
          }
        />
        <CommentCartItem
          checkout={true}
          title={"Образование"}
          info={"Высшая школа дизайна и программирования"}
        />
        <CommentCartItem
          title={"Опыт работы"}
          info={
            "Практикую все свои умения на работе, поэтому даю реальные знания и опыт. Отдельные программы обучения для детей и взрослых."
          }
        />
        <CertificateEducation />
        <CommentCartItem
          title={"Место проведения оффлайн"}
          info={"Узбекистан, г.Ташкент,ул.Абдулла Каххара, 23"}
          send="Посмотреть на карте"
        />
        {/* Characteristics */}
        <Characteristics productProperties={data} />
        {/* Characteristics */}
        <TouchableOpacity style={styles.bottomBtn}>
          <Text
            style={{ textAlign: "center", color: "#9A9A9A", marginRight: 5 }}
          >
            Смотреть все дисциплины и цены
          </Text>
          <BottomArrow />
        </TouchableOpacity>
        {/* TeacherTable */}
        <TeacherTable />
        {/* TeacherTable */}
        {/* ReviewEducation */}
        <ReviewEducation />
        {/* ReviewEducation */}
        <TouchableOpacity style={styles.bottomBtn}>
          <Text
            style={{ textAlign: "center", color: "#9A9A9A", marginRight: 5 }}
          >
            Смотреть ещё
          </Text>
          <BottomArrow />
        </TouchableOpacity>

        <DefaultButton
          title={"Оставить отзыв"}
          ButtonStyle={{ marginTop: 26, backgroundColor: "#F4B840" }}
          TextStyle={{ color: COLORS.white }}
          onPress={() => navigation.navigate(ROUTES.StudentReviews as never)}
        />

        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default StudentInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
  },
  personInfo: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  comment: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 19,
  },
  bottomBtn: {
    width: "100%",
    marginTop: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
