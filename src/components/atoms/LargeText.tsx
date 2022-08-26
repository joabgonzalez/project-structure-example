import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

interface Props {
  children: string;
}

const TextStyled = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export default function LargeText({ children }: Props) {
  return <TextStyled>{children}</TextStyled>;
}
