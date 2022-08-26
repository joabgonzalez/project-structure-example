import React from "react";

import ButtonWrapper from "../atoms/ButtonWrapper";
import RegularText from "../atoms/RegularText";

interface Props {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: Props) {
  return (
    <ButtonWrapper onPress={onPress}>
      <RegularText>{title}</RegularText>
    </ButtonWrapper>
  );
}
