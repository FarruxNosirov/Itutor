import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../GoBackHeader";
import DefaulTitle from "../DefaultTitle";
import { COLORS } from "../../../constants/colors";
import ReviewCartItem from "./ReviewCartItem";
import GapHeight from "../../../constants/GapHeight";

import useVisible from "../../../hooks/useVisible";
import FileProtest from "../fileProtest/FileProtest";

const ReviewAllComponent = () => {
  const modalReview = useVisible();
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle title="Отзывы" color={COLORS.tabBgColor} marginBottom={25} />
      <ScrollView
        style={{ width: "100%", paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ReviewCartItem setModalVisible={modalReview.show} />
        <ReviewCartItem setModalVisible={modalReview.show} />
        <ReviewCartItem setModalVisible={modalReview.show} />
        <ReviewCartItem setModalVisible={modalReview.show} />
        <ReviewCartItem setModalVisible={modalReview.show} />
        <ReviewCartItem setModalVisible={modalReview.show} />
        <FileProtest
          modalVisible={modalReview.visible}
          setModalVisible={modalReview.toggle}
        />
        <GapHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default ReviewAllComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
