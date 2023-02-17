import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

type typeProps = {
  productProperties: any;
};
const Characteristics = (props: typeProps) => {
  return (
    <FlatList
      data={props?.productProperties}
      ListHeaderComponent={
        <Text style={styles.title}>Дисциплины и стоимость обучения</Text>
      }
      style={styles.container}
      renderItem={({ item }) => {
        return (
          <View style={styles.box}>
            <View style={styles.one}>
              <Text style={styles.box_title}>{item.key_name}</Text>
            </View>
            <View style={styles.twou}>
              <Text style={styles.box_value}>{item.value_name1}</Text>
              <Text style={styles.box_value}>{item.value_name2}</Text>
              <Text style={styles.box_value}>{item.value_name3}</Text>
            </View>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Characteristics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingVertical: 19,
    paddingHorizontal: 15,
  },
  active: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  noActive: {
    marginTop: 15,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
  },
  box_title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#302f2f",
  },
  box_value: {
    fontSize: 13,
    color: "#9A9A9A",
    marginBottom: 5,
  },
  one: {
    width: "30%",
  },
  twou: {
    width: "60%",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000033",
    marginBottom: 18,
  },
});
