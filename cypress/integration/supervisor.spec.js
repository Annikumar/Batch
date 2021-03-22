import Suprevisor from '../support/pages/Supervisor';

let fixtureData;
const suprevisor = new Suprevisor();
let randNum = Math.floor(Math.random() * 100000);

describe('SuperVisor Flow', () => {
  before(() => {
    cy.fixture('constants')
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
      });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    cy.Logout();
  });

  it('Supervisor Should Login Successfully', () => {
    cy.Login(fixtureData.supervisorUsername, fixtureData.supervisorPassword);
  });

  it('Verify View Button Functionality for Contacts', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickViewBtn('New', 'User');
    suprevisor.verifyViewForm();
  });

  it('Verify Add Contact using Create New option', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickAddNewContactButton();
    suprevisor.selctCreateNewContactOption();
    suprevisor.verifyEditForm();
  });

  it('Verify Add Contact using Upload File option', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickAddNewContactButton();
    suprevisor.selectUploadFileOption();
    suprevisor.verifyUploadForm();
  });

  it('Verifies the Profile Page', () => {
    suprevisor.clickUserProfile();
    suprevisor.clickSettingsButton();
    suprevisor.verifyProfilePage();
  });
});
