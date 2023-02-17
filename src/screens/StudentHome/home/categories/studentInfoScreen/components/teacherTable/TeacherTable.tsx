import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const TeacherTable = () => {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.titleTable}>Шахматка занятости преподавателя</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.container}>
          <View style={styles.titleContent}>
            <View style={styles.item}>
              <Text></Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item2}>
              <Text>Понедельник</Text>
            </View>
          </View>
          <View style={styles.sectionView}>
            <View style={styles.item}>
              <Text>10:00-12:00</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item2}>
              <Text>Понедельник</Text>
            </View>
          </View>
          <View style={styles.sectionView}>
            <View style={styles.item}>
              <Text>10:00-12:00</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item2}>
              <Text>Понедельник</Text>
            </View>
          </View>
          <View style={styles.sectionView}>
            <View style={styles.item}>
              <Text>10:00-12:00</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item}>
              <Text>Понедельник</Text>
            </View>
            <View style={styles.item2}>
              <Text>Понедельник</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeacherTable;

const styles = StyleSheet.create({
  tableContainer: {
    width: "100%",
    marginTop: 20,
  },
  container: {
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 5,
  },
  titleTable: {
    color: "#000033",
    fontSize: 17,
    fontWeight: "700",
  },
  item: {
    borderColor: "#DADADA",
    borderRightWidth: 1,
    minWidth: 107,
    alignItems: "center",
    justifyContent: "center",
  },
  item2: {
    paddingVertical: 14,
    paddingHorizontal: 14,
  },

  titleContent: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#DADADA",
    borderWidth: 1,
  },

  sectionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#DADADA",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  row: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
