  export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    extensionsToTreatAsEsm: [".ts", ".tsx", ".js", ".jsx"]
  };