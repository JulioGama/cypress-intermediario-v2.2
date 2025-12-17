const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      return config;
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: true,
  retries: {
    runMode: 2,   // headless / CI
    openMode: 0   // modo interativo
  },

  env: {
    environment: 'local'
  }
});
