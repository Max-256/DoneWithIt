import {
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  StatusBar,
  View,
} from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const BackgroundImg = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.img}
        source={require("../assets/background.jpg")}
      >
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
        <View style={styles.text}>
          <View style={{ backgroundColor: "tomato", height: 40 }}></View>
          <View style={{ backgroundColor: "lightblue", height: 40 }}></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BackgroundImg;

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 3 : 0,
    alignItems: "center",
  },

  logo: {
    width: 50,
    height: 50,
  },

  text: { width: screenWidth, position: "absolute", bottom: 0 },
});
