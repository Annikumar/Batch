const emailInputField = 'input[name="email"]';
const passwordInputField = 'input[name="password"]';
const termsCheckBox = '.terms-row input';
const signinButton = '.full_width_input .save';
const dashboardProfilePic = '.profile_pic';
const logoutBtn = 'span[href*="logout"] div';
const forgetPassword = '.login-forgot-link';
const signUpBtn = 'a[href*="register"]';
const errorMessage = (message) =>
  "//div[@class='Toastify__toast-body'][contains(.,'" + message + "')]";

export default class Login {
  enterEmailtoSignin(email) {
    // cy.get('body').then(($body) => {
    //   if ($body.find(emailInputField).length) {
    //     cy.get(emailInputField).type(email);
    //   }
    // });
    cy.get(emailInputField).type(email);
  }

  enterPasswordToSignin(pswd) {
    // cy.get('body').then(($body) => {
    //   if ($body.find(passwordInputField).length) {
    //     cy.get(passwordInputField).type(pswd);
    //   }
    // });
    cy.get(passwordInputField).type(pswd);
  }

  clickTermsCheckBox() {
    // cy.get('body').then(($body) => {
    //   if ($body.find(termsCheckBox).length) {
    //     cy.get(termsCheckBox).check();
    //   }
    // });
    cy.get(termsCheckBox).check();
  }

  clickSigninButton() {
    // cy.get('body').then(($body) => {
    //   if ($body.find(signinButton).length) {
    //     cy.get(signinButton).click();
    //   }
    // });
    cy.get(signinButton).click();
  }

  verifySuccessfullLogin() {
    // cy.get('body').then(($body) => {
    //   if ($body.find(dashboardProfilePic).length) {
    //     cy.get(dashboardProfilePic, { timeout: 10000 }).should('be.visible');
    //   }
    // });
    cy.get(dashboardProfilePic, { timeout: 10000 }).should('be.visible');
  }

  logout() {
    cy.get(dashboardProfilePic).click({ force: true });
    cy.get(logoutBtn).click({ force: true });
  }

  verifyErrorMessage(message) {
    cy.xpath(errorMessage(message)).should('be.visible');
  }

  clickForgetPassword() {
    cy.get(forgetPassword).click();
  }

  verifyForgetPasswordPage() {
    cy.url().should('contain', 'forgot');
  }

  clickSignUpBtn() {
    cy.get(signUpBtn).click();
  }

  verifySignUpPage() {
    cy.url().should('contain', 'register');
  }

  verifyEmailField() {
    cy.get(emailInputField).should('be.visible');
  }

  verifyPasswordField() {
    cy.get(passwordInputField).should('be.visible');
  }

  verifyLoginButton() {
    cy.get(signinButton).should('be.visible');
  }

  verifySignupButton() {
    cy.get(signUpBtn).should('be.visible');
  }

  verifyForgetPassword() {
    cy.get(forgetPassword).should('be.visible');
  }
}
