import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

function ListItem({ image, title, subtitle, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.detailsContainer}>
            <Image style={styles.image} source={image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
