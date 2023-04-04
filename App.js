import React from "react";
import Card from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 70 }}>
      <Card
        image={require("./app/assets/jacket.jpg")}
        title="Red Jacket for sale"
        subtitle="$100"
      />
    </View>
  );
}
