import Login from '../support/pages/Login';
import Register from '../support/pages/Register';

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
    // Cypress.Cookies.defaults({
    //   preserve: (cookies) => {
    //     return true;
    //   },
    // });
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
    login.verifySuccessfullLogin();
  });
});
