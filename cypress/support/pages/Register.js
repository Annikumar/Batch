const signUpBtn = 'a[href*="register"]';
const firstName = 'input[name="firstname"]';
const lastName = 'input[name="lastname"]';
const companyName = 'input[name="companyname"]';
const industry = 'select[name="industry"]';
const phoneNumber = 'input[name="phonenumber"]';
const email = 'input[name="email"]';
const password = 'input[name="password"]';
const confirmPassword = 'input[name="password2"]';
const continueToPlan = 'button[type="submit"]';
const dialerPlan = (x) =>
  "//div[@class='plan'][contains(.,'" + x + "')]//button";
const requiredFields = (validate) =>
  "//span[@class='error-msg'][text()='" + validate + "']";
const duplicateEmail =
  "//div[@class='Toastify__toast-body'][contains(.,'Email is already used')]";

export default class Register {
  clickSignUpBtn() {
    cy.get(signUpBtn).click();
  }

  enterFirstName(name) {
    cy.get(firstName).type(name);
  }

  enterLastName(name) {
    cy.get(lastName).type(name);
  }

  enterCompanyName(name) {
    cy.get(companyName).type(name);
  }

  enterPhoneNumber(phone) {
    cy.get(phoneNumber).type(phone);
  }

  enterEmail(mail) {
    cy.get(email).type(mail);
  }

  enterPassword(pswd) {
    cy.get(password).type(pswd);
  }

  enterConfirmPassword(pswd) {
    cy.get(confirmPassword).type(pswd);
  }

  selectIndustry(Industry) {
    cy.get(industry).select('Other');
  }

  clickContinueToPlanBtn() {
    cy.get(continueToPlan).click();
  }

  choosePlan(plan) {
    cy.xpath(dialerPlan(plan)).click();
  }

  verifyRequiredFields(validate) {
    cy.xpath(requiredFields(validate)).should('be.visible');
  }

  verifyDuplicateEmail() {
    cy.xpath(duplicateEmail).should('be.visible');
  }
}
