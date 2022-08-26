import StorybookUI from "./storybook";
import storybookConfig from "./src/utils/storybook";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNav from "./src/navigation/RootStackNav";

function App() {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
}

export default storybookConfig.enable ? StorybookUI : App;
