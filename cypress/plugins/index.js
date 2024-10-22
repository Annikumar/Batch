/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
const fs1 = require('fs-extra');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const repoRoot = path.join(__dirname, '..', 'fixtures', 'Download'); // assumes pdf at project root

const parsePdf = async (pdfName) => {
  const pdfPathname = path.join(repoRoot, pdfName);
  let dataBuffer = fs.readFileSync(pdfPathname);
  return await pdf(dataBuffer); // use async/await since pdf returns a promise
};

const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
module.exports = (on, config) => {
  on('task', { downloadFile });
  on('task', {
    getPdfContent(pdfName) {
      return parsePdf(pdfName);
    },
  });
  on('task', {
    parseXlsx({ filePath }) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    },
  });
  function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);

    return fs1.readJson(pathToConfigFile);
  }
  const file = config.env.configFile || 'qa';

  return getConfigurationByFile(file);
};
