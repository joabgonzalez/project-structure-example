import React from "react";

import Card from "../atoms/Card";
import LargeText from "../atoms/LargeText";
import Button from "../molecules/Button";

interface Props {
  title: string;
  buttonTitle: string;
  onPress: () => void;
}

export default function WelcomeCard({ title, buttonTitle, onPress }: Props) {
  return (
    <Card>
      <LargeText>{title}</LargeText>
      <Button onPress={onPress} title={buttonTitle} />
    </Card>
  );
}
