import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log("tapped")} />
        <AppButton
          color="secondary"
          title="register"
          onPress={() => console.log("tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 5,
  },
  container: {
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 70,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
