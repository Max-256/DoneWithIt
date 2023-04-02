import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Belgian</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    alignItems: "center",
    justifyContent: "center",
  },
});
