const contactsMenu = 'a[title="Contacts"]';
const addNewContact = '//button[contains(text(),"NEW CONTACT")]';
const createNewOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Create New")]';
const uploadFileOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Upload File")]';
const firstName = 'input[name="firstname"]';
const lastName = 'input[name="lastname"]';
const inputEmail = 'input[name="email"]';
const inputPhone = 'input[name="phonenumber1"]';
const inputIddress = 'input[name="address"]';
const inputCity = 'input[name="city"]';
const stateDropdown =
  '//div[input[@name="address"]]/following-sibling::div/label[contains(.,"State")]/following-sibling::div[contains(@class,"ss-select")]';
const inputZip = 'input[name="postalcode"]';
const saveButton = 'button[type="submit"]';
const contactSavedToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Contact saved")]';
const deletOption =
  '//div[contains(@class,"dropdown-menu") and contains(@class,"show")]//a[text()="Delete"]';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Deleted")]';
const dropBoxUpload = ".dropbox input";
const firstNameDrpdown =
  '//div[input[@title="First Name"]]/following-sibling::div/div[contains(@class,"ss-select")]';
const firstNameOption =
  '//div[@class="ss-select-options"]//span/div[text()="First Name"]';
const lastNameDrpdwn =
  '//div[input[@title="Last Name"]]/following-sibling::div/div[contains(@class,"ss-select")]';
const lastNameOption =
  '//div[@class="ss-select-options"]//span/div[text()="Last Name"]';
const phoneDrpdwn =
  '//div[input[@title="Phone"]]/following-sibling::div/div[contains(@class,"ss-select")]';
const phoneOption =
  '//div[@class="ss-select-options"]//span/div[text()="Phone Number 1"]';
const emailDrpdwn =
  '//div[input[@title="Email"]]/following-sibling::div/div[contains(@class,"ss-select")]';
const emailOption =
  '//div[@class="ss-select-options"]//span/div[text()="Email"]';
const nextButton = "button.next_btn";
const submitButton = '//button[contains(text(),"SUBMIT")]';
const contactImportToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Contacts import started")]';
const importCmpltToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Import complete")]';

export default class AddContacts {
  clickingOnContactOption() {
    cy.get(contactsMenu).click({ force: true });
  }

  clickAddNewContactButton() {
    cy.xpath(addNewContact).click();
  }

  selctCreateNewContactOption() {
    cy.xpath(createNewOption).click();
  }

  selectUploadFileOption() {
    cy.xpath(uploadFileOption).click();
  }

  enterFirstName(fstName) {
    cy.get(firstName).type(fstName);
  }
  enterLastName(lstName) {
    cy.get(lastName).type(lstName);
  }

  enterAddress(address) {
    cy.get(inputIddress).type(address);
  }
  enterCity(city) {
    cy.get(inputCity).type(city);
  }
  enterZipCode(zip) {
    cy.get(inputZip).type(zip);
  }
  enterEmail(email) {
    cy.get(inputEmail).type(email);
  }
  enterPhoneNumber(num) {
    cy.get(inputPhone).type(num);
  }
  selectState(state) {
    cy.xpath(stateDropdown).click();
    cy.xpath(
      '//div[@class="ss-select-dropdown"]//span/div[text()="' + state + '"]'
    ).click();
  }
  clickSaveButton() {
    cy.get(saveButton).click({ force: true });
  }
  verifySuccessToast() {
    cy.xpath(contactSavedToast, { timeout: 7000 }).should("be.visible");
  }

  verifyAddedContacts(fstName, lstName) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' +
        fstName +
        '") and contains(.,"' +
        lstName +
        '")]',
      { timeout: 15000 }
    ).should("be.visible");
  }

  uploadFileForContact() {
    cy.get(dropBoxUpload).attachFile("contact-sample.csv");
  }

  selectFirstNameDropdown() {
    cy.xpath(firstNameDrpdown).click();
    cy.xpath(firstNameOption).click({ force: true });
  }
  selectLastNameDropdown() {
    cy.xpath(lastNameDrpdwn).click();
    cy.xpath(lastNameOption).click({ force: true });
  }
  selectEmailDropdown() {
    cy.xpath(emailDrpdwn).click();
    cy.xpath(emailOption).click({ force: true });
  }
  selectPhoneDropdown() {
    cy.xpath(phoneDrpdwn).click();
    cy.xpath(phoneOption).click({ force: true });
  }
  clickNextButton() {
    cy.get(nextButton).click();
  }
  clickSubmitButton() {
    cy.xpath(submitButton).click({ force: true });
  }
  verifyImportStartedToast() {
    cy.xpath(contactImportToast, { timeout: 5000 }).should("be.visible");
  }
  verifyImportContactCompleteToast() {
    cy.xpath(importCmpltToast, { timeout: 5000 }).should("be.visible");
  }

  deleteAddedContacts(fstaName, lstName) {
    cy.xpath(
      '//table[contains(@class,"table")]//tr[td[contains(.,"' +
        fstaName +
        '") and contains(.,"' +
        lstName +
        '")]]//img[contains(@src,"edit")]'
    ).click();
    cy.xpath(deletOption).click();
  }

  handleAlertForDelete() {
    cy.on("	window:alert", (str) => {
      expect(str).to.equal("Delete user?");
    });
    cy.on("window:confirm", () => true);
  }
  verifyDeletedToast() {
    cy.xpath(deleteToast).should("be.visible");
  }
}
