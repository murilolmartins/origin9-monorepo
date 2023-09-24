/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.tsx'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/../../node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '@components-common': '<rootDir>/src/components/common/index.ts',
    '@components-layout': '<rootDir>/src/components/layouts/index.ts',
    '@styles': '<rootDir>/src/styles/index.ts',
    '@providers': '<rootDir>/src/utils/index.ts',
    '@enums': '<rootDir>/src/enums/index.ts',
    '@hooks': '<rootDir>/src/hooks/index.ts',
    '@constants': '<rootDir>/src/services/index.ts',
    '@images': '<rootDir>/src/types/index.ts',
    '@interfaces': '<rootDir>/src/mocks/index.ts',
    '@contexts': '<rootDir>/src/contexts/index.ts',
    '^@test$': '<rootDir>/src/test/index.ts',
    '@utils': '<rootDir>/src/utils/index.ts',
    '@services': '<rootDir>/src/services/index.ts'
  }
};

module.exports = createJestConfig(customJestConfig);
