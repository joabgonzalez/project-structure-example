import { ENABLE_STORYBOOK } from "@env";

const config = {
  enable: ENABLE_STORYBOOK === "true" || false,
};

export default config;
