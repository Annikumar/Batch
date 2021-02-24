// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-xpath";
import "cypress-file-upload";
let randNum = Math.floor(Math.random() * 100);
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.randNum = () => `randNum-${Math.floor(Math.random() * 100)}`;

// cy.readFile("cypress/fixtures/constants.json", (err, data) => {
//   if (err) {
//     return console.error(err);
//   }
// }).then((data) => {
//   data.randNum = randNum;
//   cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
// });
