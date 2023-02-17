// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const CategoriesCartInfoItem = () => {
//   return (
//     <View>
//       <Text>CategoriesCartInfoItem</Text>
//     </View>
//   );
// };

// export default CategoriesCartInfoItem;

// const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  BalanseIconActive,
  CatalogIconNotActive,
  StrokeIcon,
  UserTwoIcon,
} from "../../../../../../assets/icons/icons";
import { COLORS } from "../../../../../../constants/colors";

type propsType = {
  onClick?: () => void;
};
const CategoriesCartInfoItem = (props: propsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../../../../../../assets/images/sasasas.png")}
        />
      </View>
      <View style={styles.personInfo}>
        <View style={styles.personItem}>
          <Text style={styles.personName}>Ройтман Рафаэль</Text>
          <Text style={styles.personJob}>Узбекистан, Ташкент</Text>
        </View>
        <View style={styles.iconBox}>
          <View style={styles.ocenkaValyu}>
            <StrokeIcon />
            <Text style={{ marginLeft: 4 }}>5.5</Text>
          </View>
          <View style={styles.ocenkaValyu}>
            <UserTwoIcon />
            <Text style={{ marginLeft: 4 }}>178</Text>
          </View>
          <View style={styles.ocenkaValyu}>
            <BalanseIconActive width={16} height={15} color={"#000033"} />
            <Text style={{ marginLeft: 4 }}>от 10$</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoriesCartInfoItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: COLORS.white,
    shadowColor: "#bbbbbb",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageBox: {
    width: 108,
    height: 111,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  personInfo: {
    width: "55%",
    marginLeft: 13,
    position: "relative",
  },
  personItem: {
    paddingTop: 5,
    width: "100%",
  },
  personName: {
    fontSize: 21,
    fontWeight: "700",
    color: "#000033",
  },
  personJob: {
    fontSize: 16,
    fontWeight: "400",
    color: "#9A9A9A",
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    width: 141,
    height: 39,
    backgroundColor: "#F4B840",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btnTitle: {
    color: COLORS.white,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 15,
    marginTop: 30,
  },
  ocenkaValyu: {
    flexDirection: "row",
    alignItems: "center",
  },
  mailIcon: {
    marginLeft: 15,
  },
});
