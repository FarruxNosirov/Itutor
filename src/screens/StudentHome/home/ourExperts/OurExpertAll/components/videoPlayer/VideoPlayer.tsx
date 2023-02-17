import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../../../../../constants/colors";
import { PlayerIcon } from "../../../../../../../assets/icons/icons";

const VideoPlayer = () => {
  return (
    <View style={styles.videoContainer}>
      <Text style={styles.title}>Видеоролик</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../../../../../assets/images/videoPlear.png")}
        />
        <TouchableOpacity style={styles.player}>
          <PlayerIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
  },
  container: {
    width: "100%",
    height: 198,
    marginBottom: 9,
    marginRight: 9,
    borderRadius: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    color: COLORS.tabBgColor,
    fontSize: 21,
    fontWeight: "700",
    marginBottom: 20,
  },
  player: {
    position: "absolute",
  },
});
