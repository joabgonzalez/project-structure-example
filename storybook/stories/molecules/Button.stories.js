import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import Button from "../../../src/components/molecules/Button";
import container from "../../styles/containerLight";

storiesOf("Molecules/Button", module)
  .addDecorator((getStory) => <View style={container}>{getStory()}</View>)
  .add("default", () => (
    <Button
      onPress={action("clicked-button")}
      title={text("title", "Hello World")}
    />
  ));
