import { View, Text, Alert } from 'react-native';
import React from 'react';
import HomeWireframe from '../templates/HomeWireframe';

export default function HomePage() {
  return <HomeWireframe title="Welcome to my app" buttonTitle="Say Hello!" onPress={() => Alert.alert('Hello my friend!')} />;
}
