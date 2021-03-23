import Login from '../support/pages/Login';

let fixtureData;
const login = new Login();

describe('Add Campaign flow', () => {
  beforeEach(() => {
    cy.fixture('constants')
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
      });
  });

  after(() => {
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
    login.enterEmailtoSignin(fixtureData.username);
    login.enterPasswordToSignin(fixtureData.password);
    login.clickTermsCheckBox();
    login.clickSigninButton();
    login.verifySuccessfullLogin();
  });
});
