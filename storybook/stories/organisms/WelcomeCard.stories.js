import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import WelcomeCard from "../../../src/components/organisms/WelcomeCard";
import container from "../../styles/containerLight";

storiesOf("Organisms/WelcomeCard", module)
  .addDecorator((getStory) => <View style={container}>{getStory()}</View>)
  .add("default", () => (
    <WelcomeCard
      onPress={action("clicked-button")}
      buttonTitle={text("buttonTitle", "Hello World")}
      title={text("title", "Welcome")}
    />
  ));
