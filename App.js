import React from "react";

import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="my title"
        subtitle="my subtitle"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
