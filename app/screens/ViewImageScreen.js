import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        size={30}
        name="close"
        color="white"
        style={styles.closeIcon}
      />
      <MaterialCommunityIcons
        size={30}
        name="trash-can-outline"
        color="white"
        style={styles.deleteIcon}
      />

      <Image style={styles.img} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 30,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  img: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 30,
  },
});

export default ViewImageScreen;
