const signUpBtn = 'a[href*="register"]';
const firstName = 'input[name="firstname"].form-control';
const lastName = 'input[name="lastname"].form-control';
const companyName = 'input[name="companyname"].form-control';
const industry = 'select[name="industry"].form-control';
const phoneNumber = 'input[name="phonenumber"].form-control';
const email = 'input[name="email"].form-control';
const password = 'input[name="password"].form-control';
const confirmPassword = 'input[name="password2"].form-control';
const continueToPlan = 'button[type="submit"]';
const dialerPlan = (x) =>
  "//div[@class='plan'][contains(.,'" + x + "')]//button";
const requiredFields = (validate) =>
  "//span[@class='error-msg'][text()='" + validate + "']";
const duplicateEmail =
  "//div[@class='Toastify__toast-body'][contains(.,'Email is already used')]";
const nameOnCard = 'input[name="name"]';
const cardNumberField =
  '.CardNumberField-input-wrapper input[name="cardnumber"]';
const expirydate = 'input[name="exp-date"]';
const cvc = 'input[name="cvc"]';
const countryDropdown = '.ss-select';
const countriesOption = '.ss-select-option';
const billingZip = 'input[name="zip"]';
const agreeCheckbox = '.custom_checkbox .checkmark';
const subscribeBtn = '.card_form button[type="button"]';
const couponField = 'input[name="coupon"]';
const applyCouponBtn = '.summary .value1 button';
const planPrice = '.summary .value:not(.long)';
const userTreeDropdown = '.dropdown-usertree';
const resellerUserTree = (user) =>
  `//span[@class="role-title"][text()="${user}"]/following-sibling::span//*[name()="svg"][@data-icon="plus"]`;
const reseller = `//span[@class="roletitle"][contains(text(),"First Tenant Reseller 1")]`;
const clientsMenu = 'a[title="Clients"]';
const searchBox = 'input[placeholder*="Search"]';
const deleteUserButton = 'img[src*="delete"]';
const accountReactivationPage = '.main_signuparia.reactivation';

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
    // cy.xpath(duplicateEmail).should('be.visible');
    cy.get('.Toastify__toast-body').then((toast) => {
      expect(toast.text().toLowerCase()).to.contain('email is already used');
    });
  }

  verifyPlanPrice() {
    cy.get(planPrice).then((price) => {
      expect(price.text()).to.not.equal('$0.00');
    });
  }

  enterNameOnCard(name) {
    cy.get(nameOnCard).type(name);
  }

  enterCardNumber(cardNo) {
    const iframe = cy
      .get('iframe[title*="Secure card number"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
    iframe.find(cardNumberField).type(cardNo);
  }

  enterExpiryDate(date) {
    const iframe = cy
      .get('iframe[title*="Secure expiration date"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
    iframe.find(expirydate).type(date);
  }

  enterCVC(cvcNo) {
    const iframe = cy
      .get('iframe[title*="Secure CVC"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
    iframe.find(cvc).type(cvcNo);
  }

  selectCountry(country) {
    cy.get(countryDropdown).click();
    cy.get(countriesOption).then((option) => {
      for (let i = 0; i < option.length; i++) {
        if (option[i].textContent.trim() === country) {
          option[i].click();
          break;
        }
      }
    });
  }

  enterBillingZip(zip) {
    cy.get(billingZip).type(zip);
  }

  clickAgreeCheckbox() {
    cy.get(agreeCheckbox).click();
  }

  enterCardDetailsForSignUp(
    CardName,
    CardNumber,
    CardExpiry,
    CardCVC,
    Country,
    BillingZip,
    Coupon
  ) {
    cy.url().then((url) => {
      if (url.includes('app')) {
        this.enterCoupon(Coupon);
        this.clickApplyCouponBtn();
      }
      this.enterNameOnCard(CardName);
      this.enterCardNumber(CardNumber);
      this.enterExpiryDate(CardExpiry);
      this.enterCVC(CardCVC);
      this.selectCountry(Country);
      this.enterBillingZip(BillingZip);
    });
  }

  clickSubscribeBtn() {
    cy.get(subscribeBtn).click();
  }

  enterCoupon(coupon) {
    cy.get(couponField).type(coupon);
  }

  clickApplyCouponBtn() {
    cy.get(applyCouponBtn).click();
  }

  clickUserTreeDropdown() {
    cy.get(userTreeDropdown).click();
  }

  clickOnUser(user) {
    cy.xpath(resellerUserTree(user)).click();
  }

  clickOnResellerUser() {
    cy.xpath(reseller).click();
  }

  handleAlertWindow() {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Login?');
    });
    cy.on('window:confirm', () => true);
  }

  clickClientsMenu() {
    cy.get(clientsMenu).click({ force: true });
  }

  enterUserToSearch(user) {
    cy.get(searchBox).type(user);
  }

  clickDeleteUserButton() {
    cy.get(deleteUserButton).click();
  }

  verifyAccountReactivationPage() {
    cy.get(accountReactivationPage).should('be.visible');
  }
}
