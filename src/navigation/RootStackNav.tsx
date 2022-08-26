import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../pages/HomePage";

export type RootStackParamList = {
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNav() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomePage} />
    </RootStack.Navigator>
  );
}
