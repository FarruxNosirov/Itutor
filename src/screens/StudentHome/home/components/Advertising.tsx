import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DefaulTitle from "../../../../components/uiket/DefaultTitle";
import SearchInput from "../../../../components/uiket/search/SearchInput";
import { OkIcon } from "../../../../assets/icons/icons";

const Advertising = () => {
  return (
    <View style={styles.container}>
      <DefaulTitle
        title="Подпишитесь на нашу новостную рассылку"
        color="#47406A"
      />
      <Text style={styles.info}>
        Подпишитесь и вы будете в курсе все наших акций, скидок, появление Новых
        предметов, дисциплин и учебных центров.
      </Text>
      <View style={styles.input}>
        <SearchInput
          placeholder="Введите email"
          Icon2={<OkIcon />}
          placeholderColor="#D3D3D3"
        />
      </View>
    </View>
  );
};

export default Advertising;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  info: {
    color: "#B5B5B5",
    fontSize: 12,
    paddingHorizontal: 20,
    marginTop: 6,
  },
  input: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 18,
  },
});
