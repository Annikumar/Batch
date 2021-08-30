import Login from '../support/pages/Login';
import Register from '../support/pages/Register';
import { ignoreSpeedTestPopup } from '../support/Utils';

const register = new Register();
const login = new Login();
let fixtureData;
let testData;
const randomNumber = Math.floor(Math.random() * 100000);
describe('Registration', () => {
  beforeEach(() => {
    cy.fixture('constants').then((data) => (fixtureData = data));
    cy.visit('/');
    cy.readFile('cypress/fixtures/testData.json').then(
      (data) => (testData = data)
    );
  });

  after(() => {
    cy.Logout();
  });

  it('Verifies Required Fields', () => {
    register.clickSignUpBtn();
    register.clickContinueToPlanBtn();
    register.verifyRequiredFields('Enter First Name');
    register.verifyRequiredFields('Enter Last Name');
    register.verifyRequiredFields('Enter Phone Number');
    register.verifyRequiredFields('Enter Email');
    register.verifyRequiredFields('Enter Password');
  });

  it('Verifies Valid Phone Number', () => {
    register.clickSignUpBtn();
    register.enterFirstName('Demo');
    register.enterLastName('testing');
    register.enterCompanyName('Fleek+5');
    register.selectIndustry('Other');
    register.enterPhoneNumber('9999999');
    register.enterEmail('test+' + randomNumber + '@email.com');
    register.enterPassword('Fleek@2016');
    register.enterConfirmPassword('Fleek@2016');
    register.clickContinueToPlanBtn();
    register.verifyRequiredFields('Enter Phone Number');
  });

  it('Verifies Valid Email Address', () => {
    register.clickSignUpBtn();
    register.enterFirstName('Demo');
    register.enterLastName('testing');
    register.enterCompanyName('Fleek+5');
    register.selectIndustry('Other');
    register.enterPhoneNumber('9999999999');
    register.enterEmail('test@');
    register.enterPassword('Fleek@2016');
    register.enterConfirmPassword('Fleek@2016');
    register.clickContinueToPlanBtn();
    register.verifyRequiredFields('Email address not valid');
  });

  it('Verifies Duplicate Email', () => {
    register.clickSignUpBtn();
    register.enterFirstName('Demo');
    register.enterLastName('testing');
    register.enterCompanyName('Fleek+' + randomNumber + '');
    register.selectIndustry('Other');
    register.enterPhoneNumber('9999999999');
    register.enterEmail('anil.kumar+1@fleekitsolutions.com');
    register.enterPassword('Fleek@2016');
    register.enterConfirmPassword('Fleek@2016');
    register.clickContinueToPlanBtn();
    register.verifyDuplicateEmail();
  });

  it('Register User', () => {
    cy.url().then((url) => {
      if (url.includes('app.batchdialer.com')) {
        cy.log('Not Registering user on Prod');
      } else {
        register.clickSignUpBtn();
        register.enterFirstName('Demo');
        register.enterLastName('testing');
        register.enterCompanyName('Fleek+' + randomNumber + '');
        register.selectIndustry('Other');
        register.enterPhoneNumber('9999999999');
        register.enterEmail('testing+' + randomNumber + '@test.com');
        register.enterPassword('Fleek@2016');
        register.enterConfirmPassword('Fleek@2016');
        register.clickContinueToPlanBtn();
        register.choosePlan('Single Line Dialer'); //Multi-Line Dialer
        register.verifyPlanPrice();
        register.enterCardDetailsForSignUp(
          Cypress.env('CardName'),
          Cypress.env('CardNumber'),
          Cypress.env('ExpiryDate'),
          Cypress.env('CVC'),
          Cypress.env('Country'),
          Cypress.env('BillingZip'),
          Cypress.env('Coupon')
        );
        register.clickAgreeCheckbox();
        register.clickSubscribeBtn();
        cy.waitFor(cy.get('.main_sec', { timeout: 15000 }));
        ignoreSpeedTestPopup();
        login.verifySuccessfullLogin();
        cy.wait(2000);
        ignoreSpeedTestPopup();
        cy.Logout();
      }
    });
  });

  it('Cancel the Account from the Super Admin Panel', () => {
    cy.url().then((url) => {
      if (url.includes('app.batchdialer.com')) {
        cy.log('Not performing Account Reactivation on Production');
      } else {
        cy.Login('god', 'god');
        register.clickUserTreeDropdown();
        register.clickOnUser('First Tenant');
        register.clickOnUser('Reseller 1');
        register.clickOnResellerUser();
        register.handleAlertWindow();
        register.clickClientsMenu();
        register.enterUserToSearch('testing@test.com');
        register.clickDeleteUserButton();
        cy.Logout();
        cy.Logout();
      }
    });
  });

  it('Reactivate the Cancelled Account', () => {
    cy.url().then((url) => {
      if (url.includes('app.batchdialer.com')) {
        cy.log('Not performing Account Reactivation on Production');
      } else {
        login.enterEmailtoSignin('testing@test.com');
        login.enterPasswordToSignin('Fleek@2016');
        login.clickTermsCheckBox();
        login.clickSigninButton();
        register.verifyAccountReactivationPage();
        register.choosePlan('Multi-Line Dialer'); //Single Line Dialer
        register.verifyPlanPrice();
        register.enterCardDetailsForSignUp(
          Cypress.env('CardName'),
          Cypress.env('CardNumber'),
          Cypress.env('ExpiryDate'),
          Cypress.env('CVC'),
          Cypress.env('Country'),
          Cypress.env('BillingZip'),
          Cypress.env('Coupon')
        );
        register.clickAgreeCheckbox();
        register.clickSubscribeBtn();
        cy.waitFor(cy.get('.main_sec', { timeout: 15000 }));
        ignoreSpeedTestPopup();
        login.verifySuccessfullLogin();
      }
    });
  });
});
