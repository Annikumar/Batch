import Login from '../support/pages/Login';
import { selectAgentStatus } from '../support/Utils';

const login = new Login();
let testData;

describe('Login Flow', () => {
  beforeEach(() => {
    cy.fixture('testData').then((data) => (testData = data));
    cy.visit('/', { failOnStatusCode: false });
  });

  after(() => {
    selectAgentStatus('Offline');
    cy.Logout();
  });

  it('Verify elements of login page', () => {
    login.verifyEmailField();
    login.verifyPasswordField();
    login.verifyLoginButton();
    login.verifySignupButton();
    login.verifyForgetPassword();
  });

  it('Login with Incorrect Credentials', () => {
    login.enterEmailtoSignin('test@email.com');
    login.enterPasswordToSignin('Fleek@2016');
    login.clickTermsCheckBox();
    login.clickSigninButton();
    login.verifyErrorMessage('User test@email.com not found');
  });

  it('Verify the Forget Password Button', () => {
    login.clickForgetPassword();
    login.verifyForgetPasswordPage();
  });

  it('Verifies the Sign Up Button', () => {
    login.clickSignUpBtn();
    login.verifySignUpPage();
  });

  it('SuccessFully Login', () => {
    login.enterEmailtoSignin(Cypress.env('username'));
    login.enterPasswordToSignin(Cypress.env('password'));
    login.clickTermsCheckBox();
    login.clickSigninButton();
    login.verifySuccessfullLogin();
  });
});
