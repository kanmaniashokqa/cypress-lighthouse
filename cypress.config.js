const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require('fs');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((results) => {
          console.log(results); // Log the results to console
          const reportPath = `./cypress/reports/lighthouse-${Date.now()}.json`;
          fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
          return null; // Return null as we've handled the results
        }),
      });
    },
    defaultCommandTimeout: 60000,
    taskTimeout: 120000
  },
});