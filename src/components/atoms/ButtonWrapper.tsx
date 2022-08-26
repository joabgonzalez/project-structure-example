import { TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

interface Props {
  children: JSX.Element;
  onPress: () => void;
}

const ButtonStyled = styled(TouchableOpacity)`
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ButtonWrapper({ children, onPress }: Props) {
  return <ButtonStyled onPress={onPress}>{children}</ButtonStyled>;
}
