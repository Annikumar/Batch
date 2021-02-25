const userMenu = 'a[title="Users"]';
const addNewUser = '//button[contains(text(),"ADD NEW USER")]';
const firstName = 'input[name="firstname"]';
const lastName = 'input[name="lastname"]';
const roleDropdown =
  '//label[contains(.,"Role")]/following-sibling::div[contains(@class,"ss-select")]';
const inputEmail = 'input[name="email"]';
const inputPassword = 'input[name="password"]';
const inputPhone = 'input[name="phone"]';
const saveButton = '//button[contains(text(),"SAVE")]';
const addedToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Saved")]';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"User deleted")]';
const dropdownOptions = ".ss-select-group-items";

export default class User {
  clickingOnUserOption() {
    cy.get(userMenu).click();
  }

  clickAddNewUserButton() {
    cy.xpath(addNewUser).click();
  }

  enterFirstName(fstName) {
    cy.get(firstName).type(fstName);
  }
  enterLastName(lstName) {
    cy.get(lastName).type(lstName);
  }
  selectROle(role) {
    cy.xpath(roleDropdown).click();
    // cy.xpath(
    //   '//div[@class="ss-select-dropdown"]//div[contains(text(),"' + role + '")]'
    // ).click();
    cy.get(dropdownOptions)
      .contains(role)
      .then((option) => {
        option[0].click();
      });
  }
  enterEmail(email) {
    cy.get(inputEmail).type(email);
  }
  enterPassword(pswd) {
    cy.get(inputPassword).type(pswd);
  }
  enterPhoneNumber(num) {
    cy.get(inputPhone).type(num);
  }
  clickSaveButton() {
    cy.xpath(saveButton).click();
  }
  verifySuccessToast() {
    cy.xpath(addedToast, { timeout: 5000 }).should("be.visible");
  }

  verifyAddedUser(fstaName, lstName) {
    cy.xpath(
      '//table[contains(@class,"users")]//td[contains(.,"' +
        fstaName +
        '") and contains(.,"' +
        lstName +
        '")]',
      { timeout: 15000 }
    ).should("be.visible");
  }

  deleteAddedContact(fstaName, lstName) {
    cy.xpath(
      '//table[contains(@class,"users")]//tr[td[contains(.,"' +
        fstaName +
        '") and contains(.,"' +
        lstName +
        '")]]//img[contains(@src,"delete")]'
    ).click();
    cy.xpath();
  }

  handleAlertForDelete() {
    cy.on("	window:alert", (str) => {
      expect(str).to.equal("Delete?");
    });
    cy.on("window:confirm", () => true);
  }
  verifyDeletedToast() {
    cy.xpath(deleteToast).should("be.visible");
  }
}
