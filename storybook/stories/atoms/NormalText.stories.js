import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import RegularText from "../../../src/components/atoms/RegularText";
import container from "../../styles/containerDark";

storiesOf("Attoms/RegularText", module)
  .addDecorator((getStory) => <View style={container}>{getStory()}</View>)
  .add("default", () => (
    <RegularText>{text("children", "Hello World")}</RegularText>
  ));
