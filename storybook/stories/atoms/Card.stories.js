import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import Card from "../../../src/components/atoms/Card";
import container from "../../styles/containerLight";

storiesOf("Attoms/Card", module)
  .addDecorator((getStory) => <View style={container}>{getStory()}</View>)
  .add("default", () => (
    <Card>
      <></>
    </Card>
  ));
