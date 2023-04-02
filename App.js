import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 35, color: "white", fontWeight: "700" }}>
        Dubul
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "navy",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    alignItems: "center",
    justifyContent: "center",
  },
});
