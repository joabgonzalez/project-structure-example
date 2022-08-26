import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

interface Props {
  children: string;
}

const TextStyled = styled(Text)`
  font-size: 12px;
  color: white;
`;

export default function RegularText({ children }: Props) {
  return <TextStyled>{children}</TextStyled>;
}
