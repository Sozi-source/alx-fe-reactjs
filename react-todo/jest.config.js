export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.mjs$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.jsx'],
  };
  