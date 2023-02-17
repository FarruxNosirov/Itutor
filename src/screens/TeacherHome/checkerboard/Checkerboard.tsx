import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import NavbarAll from "../../../components/uiket/NavbarAll";
import { COLORS } from "../../../constants/colors";
import DefaulTitle from "../../../components/uiket/DefaultTitle";
import DefaultButton from "../../../components/uiket/DefaultButton";
import { CloseIcon } from "../../../assets/icons/icons";

const Checkerboard = () => {
  const [disiblet, setDisiblet] = useState(false);
  return (
    <View style={styles.container}>
      <NavbarAll />
      <DefaulTitle title="Шахматка занятости" color="#47406A" marginTop={15} />
      <View style={styles.itemBox}>
        <View style={styles.itemDate}>
          <Text style={styles.itemDateTitle}>Укажите время</Text>
          <View style={styles.date}>
            <Text>00:00-00:00</Text>
          </View>
        </View>
        <View style={styles.itemDate}>
          <Text style={styles.itemDateTitle}>Укажите время</Text>
          <View style={styles.date}>
            <Text>00:00-00:00</Text>
          </View>
        </View>
        {disiblet ? (
          <TouchableOpacity style={styles.closeBtn}>
            <CloseIcon />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.itemBox}>
        <View style={styles.itemDate}>
          <Text style={styles.itemDateTitle}>Укажите время</Text>
          <View style={styles.date}>
            <Text>00:00-00:00</Text>
          </View>
        </View>
        <View style={styles.itemDate}>
          <Text style={styles.itemDateTitle}>Укажите время</Text>
          <View style={styles.date}>
            <Text>00:00-00:00</Text>
          </View>
        </View>
        {disiblet ? (
          <TouchableOpacity style={styles.closeBtn}>
            <CloseIcon />
          </TouchableOpacity>
        ) : null}
      </View>
      {disiblet ? (
        <View style={{ width: "100%", alignItems: "center", marginTop: 25 }}>
          <TouchableOpacity>
            <Text style={{ color: "#9A9A9A" }}>Добавить ещё</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.btnBox}>
        <DefaultButton
          title={disiblet ? " Сохранить" : "Изменить"}
          ButtonStyle={{ backgroundColor: "#47406A" }}
          onPress={() => setDisiblet((a) => !a)}
        />
      </View>
    </View>
  );
};

export default Checkerboard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: COLORS.white,
    flex: 1,
  },
  btnBox: {
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 20,
  },
  itemBox: {
    flexDirection: "row",

    paddingHorizontal: 20,
    paddingTop: 15,
    alignItems: "flex-end",
  },
  itemDate: {},
  date: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 51,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
    marginRight: 9,
  },
  itemDateTitle: {
    fontSize: 15,
    color: COLORS.tabBgColor,
    fontWeight: "700",
    marginBottom: 15,
  },
  closeBtn: {
    backgroundColor: "#47406A",
    borderRadius: 5,
    width: 46,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },
});
