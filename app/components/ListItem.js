import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.detailsContainer}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "700",
  },
});

export default ListItem;
