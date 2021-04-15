import Suprevisor from '../support/pages/Supervisor';

let testData;
const suprevisor = new Suprevisor();
let randNum = Math.floor(Math.random() * 100000);

describe('SuperVisor Flow', () => {
  before(() => {
    cy.readFile('cypress/fixtures/testData.json').then(
      (data) => (testData = data)
    );
    cy.visit('/', { failOnStatusCode: false });
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
    cy.Login(testData.SupervisorEmail, testData.password);
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
    suprevisor.clickprofileButton();
    suprevisor.verifyProfilePage();
  });

  it.skip('Verify Supervisor can Login as Agent', () => {
    suprevisor.clickDashboardMenu();
    suprevisor.clickLoginAsBtn();
    suprevisor.clickOpenUser();
    suprevisor.loginWithUser('automation testing');
    suprevisor.verifyLogin('automation testing');
    suprevisor.clickOnProfile();
    suprevisor.clickBackToSupervisor();
    suprevisor.verifySupervisorProfile();
  });
});
