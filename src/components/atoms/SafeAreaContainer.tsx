import { SafeAreaView } from "react-native";
import React from "react";
import styled from "styled-components/native";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SafeAreaViewStyled = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default function SafeAreaContainer({ children }: Props) {
  return <SafeAreaViewStyled>{children}</SafeAreaViewStyled>;
}
