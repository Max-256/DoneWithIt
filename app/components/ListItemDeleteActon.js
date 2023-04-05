import React from "react";
import colors from "../config/colors";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteActon(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" color={colors.white} size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteActon;
