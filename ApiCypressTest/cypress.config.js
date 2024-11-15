const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");
module.exports = defineConfig ({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",  // Raporların kaydedileceği klasör
    overwrite: true,
    open: true,  // Raporu açmak için
    html: true,  // HTML raporu oluşturmak için
    json: true,  // JSON raporu oluşturmak için
   
  },
  e2e: {
    trashAssetsBeforeRuns: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      config.env.ALLURE_RESULTS_DIR = 'allure-results'; // sonuçların yazılacağı klasör

      return config;


    },
    // Diğer ayarlar
  },
});
