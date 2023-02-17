import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomArrow } from "../../../../../assets/icons/icons";
import CommentCartItem from "../../../../../components/uiket/commentCart/CommentCartItem";
import DefaultButton from "../../../../../components/uiket/DefaultButton";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import { COLORS } from "../../../../../constants/colors";
import GapHeight from "../../../../../constants/GapHeight";
import { ROUTES } from "../../../../../constants/routes";
import Characteristics from "../../categories/studentInfoScreen/components/characteristic/Characteristics";
import CertificateStudent from "./components/certificat/CertificateStudent";
import ReviewStudent from "./components/reviewStudent/ReviewStudent";
import StudentAllInfoCard from "./components/studentAllInfoCard/StudentAllInfoCard";

import OurTeacher from "./components/Teachers/OurTeacher";
import PhotoGallery from "./components/photoGallery/PhotoGallery";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

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
const OurExpertAll = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <View style={styles.personInfo}>
        <StudentAllInfoCard />
      </View>
      <ScrollView style={styles.comment} showsVerticalScrollIndicator={false}>
        <CommentCartItem
          title={"О центре"}
          info={
            "Практикую все свои умения на работе, поэтому даю реальные знания и опыт. Отдельные программы обучения для детей и взрослых."
          }
        />
        <Characteristics productProperties={data} />
        <TouchableOpacity style={styles.bottomBtn}>
          <Text
            style={{ textAlign: "center", color: "#9A9A9A", marginRight: 5 }}
          >
            Смотреть все дисциплины и цены
          </Text>
          <BottomArrow />
        </TouchableOpacity>
        <OurTeacher />
        <CertificateStudent />
        <PhotoGallery />
        <VideoPlayer />
        <ReviewStudent />
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

export default OurExpertAll;

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
