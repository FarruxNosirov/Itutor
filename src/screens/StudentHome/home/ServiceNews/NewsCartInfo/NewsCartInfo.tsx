import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../../../../../components/uiket/GoBackHeader";
import DefaulTitle from "../../../../../components/uiket/DefaultTitle";
import { COLORS } from "../../../../../constants/colors";

const NewsCartInfo = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle color={COLORS.tabBgColor} title="Текст новости" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require("../../../../../assets/images/news.png")}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoValyu}>
            Практикую все свои умения на работе, поэтому даю реальные знания и
            опыт. Отдельные программы обучения для детей и взрослых.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsCartInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  scrollView: {
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 20,
  },
  imageBox: {
    width: "100%",
    height: 194,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    paddingTop: 20,
  },

  infoValyu: {
    fontSize: 15,
    color: "#9A9A9A",
  },
});
