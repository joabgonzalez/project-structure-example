import React from 'react';

import WelcomeCard from '../components/organisms/WelcomeCard';
import SafeAreaContainer from '../components/atoms/SafeAreaContainer';

interface Props {
  title: string;
  buttonTitle: string;
  onPress: () => void;
}

const HomeWireframe = ({ title, buttonTitle, onPress }: Props) => {
  return (
    <SafeAreaContainer>
      <WelcomeCard title={title} buttonTitle={buttonTitle} onPress={onPress} />
    </SafeAreaContainer>
  );
};

export default HomeWireframe;
