import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CardStyled = styled(View)`
  border-color: lightgray;
  border-width: 1px;
  border-radius: 10px;
  height: 200px;
  width: 85%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default function Card({ children }: Props) {
  return <CardStyled>{children}</CardStyled>;
}
