import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CertificateCart from "../../../../../../components/uiket/certificateCart/CertificateCart";
const data = [
  { id: 0, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 1, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 2, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 3, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
  { id: 4, imgUrl: "../../../../assets/images/Vector.png", name: "Языки" },
];
const CertificateEducation = () => {
  return (
    <View>
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

export default CertificateEducation;

const styles = StyleSheet.create({
  container: { marginTop: 10, marginBottom: 20 },
  contentContainerStyle: { paddingHorizontal: 10 },
});
