import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image style={styles.img} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 20,
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
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default ViewImageScreen;
