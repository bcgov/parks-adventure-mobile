module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation/*|react-clone-referenced-element|@react-native-community|@ptomasroos/react-native-multi-slider|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['<rootDir>/jest/setup.js'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
    'svg',
    'png',
  ],
}
