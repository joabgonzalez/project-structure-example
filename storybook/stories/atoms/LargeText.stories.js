import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import LargeText from "../../../src/components/atoms/LargeText";
import container from "../../styles/containerLight";

storiesOf("Attoms/LargeText", module)
  .addDecorator((getStory) => <View style={container}>{getStory()}</View>)
  .add("default", () => (
    <LargeText>{text("children", "Hello World")}</LargeText>
  ));
