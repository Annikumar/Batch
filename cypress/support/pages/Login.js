const emailInputField = 'input[name="email"]';
const passwordInputField = 'input[name="password"]';
const termsCheckBox = ".terms-row input";
const signinButton = ".full_width_input .save";
const dashboardProfilePic = ".profile_pic";

export default class Login {
  enterEmailtoSignin(email) {
    cy.get(emailInputField).type(email);
  }

  enterPasswordToSignin(pswd) {
    cy.get(passwordInputField).type(pswd);
  }

  clickTermsCheckBox() {
    cy.get(termsCheckBox).check();
  }

  clickSigninButton() {
    cy.get(signinButton).click();
  }

  verifySuccessfullLogin() {
    cy.get(dashboardProfilePic, { timeout: 10000 }).should("be.visible");
  }
}
