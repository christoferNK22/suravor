/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testMatch: [
    '**/tests/**/*.test.[jt]s?(x)',
  ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['fake-indexeddb/auto'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};

module.exports = {
  preset: 'jest-puppeteer',
  testTimeout: 30000,
  globals: {
      URL: 'http://localhost:8080', // Ganti dengan URL aplikasi Anda
  },
  testMatch: [
      '**/tests/e2e/**/*.js'
  ],
};