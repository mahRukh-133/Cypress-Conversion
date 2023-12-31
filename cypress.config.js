const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin= require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    "baseUrl": "https://srvproceed02pw.westeurope.cloudapp.azure.com/",
        setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins:[createEsbuildPlugin(config)],
      });

      on("file:preprocessor",bundler);
       addCucumberPreprocessorPlugin(on, config);
      return config;

    },



    specPattern: "cypress/e2e/features/*.feature",
  },

  pageLoadTimeout: 80000,
  defaultCommandTimeout: 60000,
});