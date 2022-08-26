import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import ButtonWrapper from "../../../src/components/atoms/ButtonWrapper";
import container from "../../styles/containerLight";
import content from "../../styles/contentWidth";

storiesOf("Attoms/ButtonWrapper", module)
  .addDecorator((getStory) => <View style={container}>{getStory()}</View>)
  .add("default", () => (
    <ButtonWrapper>
      <View style={content}></View>
    </ButtonWrapper>
  ));
