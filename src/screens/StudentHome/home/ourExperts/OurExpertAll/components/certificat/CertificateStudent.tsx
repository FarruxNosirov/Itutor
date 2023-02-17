import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CertificateCart from "../../../../../../../components/uiket/certificateCart/CertificateCart";
import { COLORS } from "../../../../../../../constants/colors";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const CertificateStudent = () => {
  return (
    <View>
      <Text style={styles.tetle}>Документы</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <CertificateCart />}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default CertificateStudent;

const styles = StyleSheet.create({
  container: { marginTop: 10, marginBottom: 20 },
  contentContainerStyle: { paddingHorizontal: 10 },
  tetle: {
    color: COLORS.tabBgColor,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 20,
  },
});
