import promisify from 'cypress-promise';

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
const inputAddress = 'input[name="address"]';
const inputCity = 'input[name="city"]';
const stateDropdown =
  '//div[input[@name="address"]]/following-sibling::div/label[contains(.,"State")]/following-sibling::div[contains(@class,"ss-select")]';
const inputZip = 'input[name="postalcode"]';
const cancelBtn = 'button[class^="cancel"]';
const saveButton = 'button[type="submit"]';
const contactSavedToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Contact saved")]';
const deletOption =
  '//div[contains(@class,"dropdown-menu") and contains(@class,"show")]//a[text()="Delete"]';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Deleted")]';
const dropBoxUpload = '.dropbox input';
const firstNameDrpdown =
  '//div[input[@title="First Name"]]/following-sibling::div/div[contains(@class,"ss-select")]';
const firstNameOption =
  '//div[@class="ss-select-options"]//span/div[contains(text(),"First Name")]';
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
const nextButton = 'button.next_btn';
const backBtn = 'button.pre_btn';
const submitButton = '//button[contains(text(),"SUBMIT")]';
const cancelButton = '//button[contains(text(),"CANCEL")]';
const contactImportToast = '//div[text()="Contacts import started"]';
const importCmpltToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Import complete")]';
const searchBox = '.search-box';
const allList = '//span[text()="All Lists"]';
const newContactBtn = '.create_col button';
const saleMadeCheckbox = 'input[name="salemade"]';
const appointmentMadeCheckbox = 'input[name="appointmentmade"]';
const selectionCountCheckbox =
  '//div[span[@class="selection-count"]]/preceding-sibling::div';
const actionsDropdown = '//div[span[@class="selection-count"]]/div/button';
const dialedRadioBtn = '.radio_cstm';
const dialedCountSlider =
  '//div[text()="Dialed Count"]/ancestor::div[@class="slider-control"]';
const leadScoreSlider =
  '//div[text()="Lead Score"]/ancestor::div[@class="slider-control"]';
const contactsListHeader = '.table thead';
const phoneNumberFields = (x) =>
  "input[placeholder='Phone Number'][name='phonenumber" + x + "']";
const leadSourceField = 'input[placeholder="Lead Source"]';
const mailingAddressField = 'input[name="mailingaddress"]';
const mailingZipField = 'input[name="mailingpostalcode"]';
const mailingCityField = 'input[name="mailingcity"]';
const mailingStateDropdown = '//div[span[text()="Mailing State"]]';
const contactListDropdown = '//div[span[text()="Contact Lists"]]';
const addNewContactListBtn = '//button[contains(text(),"ADD NEW")]';
const importContactHeader = '.card-header';
const importContactFirstName = 'input[title="First Name"]';
const importContactLastName = 'input[title="Last Name"]';
const importContactEmail = 'input[title="Email"]';
const importContactPhone = 'input[title="Phone"]';
const importContactDestinationFields = '.form-group .ss-select-value';
const importContactListName = 'input[name="name"]';
const importContactSelectCompaignDropdown =
  '//div[span[text()="Select Campaign"]]';
const importContactOptionsCheckbox = '.radio_cstm';
const tableBody = '.table tbody';
const contactCheckbox = (number) =>
  '(//table[@class="table"]//span[@class="checkmark"])[' + number + ']';

const lists = 'a[title="Lists"]';
const actionCampaign = '//a[text()="Add to Campaign"]';
const selectCampaign = '//div[text()="FirstCampaign"]';
const CampaignDropdown = '.modal-content .ss-select-value';
const ContinueButton = '//button[text()="Continue"]';
const toast = '.Toastify__toast-body';
const contactCountSlider = '.slider-container';
const listImportContactButton = '//button[text()="IMPORT CONTACTS"]';
const listsTable = '.table tbody';
const listPauseButton = 'svg[data-icon="pause"]';
const listDeleteButton = 'svg[data-icon="trash-alt"]';
const listStatus = "//td[text()='testing']/ancestor::tr/td[text()='paused']";
const testingPauseButton =
  '//tr[td[text()="testing"]]//span//*[name()="svg" and @data-icon="pause"]';
const phone = '.phone-number';

export default class Contacts {
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
    cy.get(inputAddress).type(address, { force: true });
  }
  enterCity(city) {
    cy.get(inputCity).type(city, { force: true });
  }
  enterZipCode(zip) {
    cy.get(inputZip).type(zip, { force: true });
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
    cy.xpath(contactSavedToast, { timeout: 7000 }).should('be.visible');
  }

  verifyAddedContacts(fstName, lstName) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' +
        fstName +
        '") and contains(.,"' +
        lstName +
        '")]',
      { timeout: 15000 }
    ).should('be.visible');
  }

  uploadFileForContact() {
    cy.get(dropBoxUpload).attachFile('contact-sample.csv');
  }

  selectFirstNameDropdown() {
    cy.xpath(firstNameDrpdown).click();
    cy.contains('First Name').click({ force: true });
  }
  selectLastNameDropdown() {
    cy.xpath(lastNameDrpdwn).click();
    cy.contains('Last Name').click({ force: true });
  }
  selectEmailDropdown() {
    cy.xpath(emailDrpdwn).click();
    cy.contains('Email').click({ force: true });
  }
  selectPhoneDropdown() {
    cy.xpath(phoneDrpdwn).click();
    cy.contains('Phone Number 1').click({ force: true });
  }
  clickNextButton() {
    cy.get(nextButton).click();
  }
  clickSubmitButton() {
    cy.xpath(submitButton).click({ force: true });
  }
  verifyImportStartedToast() {
    cy.xpath(contactImportToast, { timeout: 5000 }).should('be.visible');
  }
  verifyImportContactCompleteToast() {
    cy.contains('Import complete', { timeout: 5000 }).should('be.visible');
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
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Delete user?');
    });
    cy.on('window:confirm', () => true);
  }
  verifyDeletedToast() {
    cy.xpath(deleteToast).should('be.visible');
  }

  verifySearchBox() {
    cy.get(searchBox).should('be.visible');
  }

  verifyAllListDropdown() {
    cy.xpath(allList).should('be.visible');
  }

  verifyNewContactBtn() {
    cy.get(newContactBtn).should('be.visible').and('be.enabled');
  }

  verifySaleMadeCheckbox() {
    cy.get(saleMadeCheckbox).should('exist');
  }

  verifyAppointmentMadeCheckbox() {
    cy.get(appointmentMadeCheckbox).should('exist');
  }

  verifySelectionCountCheckbox() {
    cy.xpath(selectionCountCheckbox).should('be.visible');
  }

  verifyActionsDropdown() {
    cy.get('.select-all input+span').click({ force: true });
    cy.xpath(actionsDropdown).should('be.visible');
  }

  verifyDialedRadioBtn(radio) {
    cy.get(dialedRadioBtn).then((radioBtn) => {
      for (let i = 0; i < radio.length; i++) {
        cy.get(radioBtn).should('contain.text', radio[i]);
      }
    });
  }

  verifyDialedCountSlider() {
    cy.xpath(dialedCountSlider).should('be.visible');
  }

  verifyLeadScoreSlider() {
    cy.xpath(leadScoreSlider).should('be.visible');
  }

  verifyContactListHeaderElements(elements) {
    for (let i = 0; i < elements.length; i++) {
      cy.get(contactsListHeader).should('contain.text', elements[i]);
    }
  }

  verifyNewContactDropdownElement() {
    cy.get(newContactBtn).click();
    cy.xpath(createNewOption).should('be.visible');
    cy.xpath(uploadFileOption).should('be.visible');
  }

  verifyFirstNameField() {
    cy.get(firstName).should('be.visible');
  }

  verifyLastNameField() {
    cy.get(lastName).should('be.visible');
  }

  verifyEmailField() {
    cy.get(inputEmail).should('be.visible');
  }

  verifyPhoneNumberFields() {
    for (let i = 1; i < 11; i++) {
      cy.get(phoneNumberFields(i)).should('be.visible');
    }
  }

  verifyLeadSourceField() {
    cy.get(leadSourceField).should('be.visible');
  }

  verifyAddressField() {
    cy.get(inputAddress).should('be.visible');
  }

  verifyCityField() {
    cy.get(inputCity).should('be.visible');
  }

  verifyStateDropdown() {
    cy.xpath(stateDropdown).should('be.visible');
  }

  verifyZipField() {
    cy.get(inputZip).should('be.visible');
  }

  verifyMailingAddressField() {
    cy.get(mailingAddressField).should('be.visible');
  }

  verifyMailingCityField() {
    cy.get(mailingCityField).should('be.visible');
  }

  verifyMailingZipField() {
    cy.get(mailingZipField).should('be.visible');
  }

  verifyMailingStateDropdown() {
    cy.xpath(mailingStateDropdown).should('be.visible');
  }

  verifySaveBtn() {
    cy.get(saveButton).should('be.visible').and('be.enabled');
  }

  verifyCancelBtn() {
    cy.get(cancelBtn).should('be.visible');
  }

  verifyContactListDropdown() {
    cy.xpath(contactListDropdown).should('be.visible');
  }

  verifyAddNewContactListBtn() {
    cy.xpath(addNewContactListBtn).should('be.visible').and('be.enabled');
  }

  verifyImportContactsHeader(heading) {
    for (let i = 0; i < heading.length; i++) {
      cy.get(importContactHeader).should('contain.text', heading[i]);
    }
  }

  verifyImportContactDropboxUpload() {
    cy.get(dropBoxUpload).should('exist');
  }

  verifyImportContactFirstName() {
    cy.get(importContactFirstName).should('be.visible');
  }

  verifyImportContactLastName() {
    cy.get(importContactLastName).should('be.visible');
  }

  verifyImportContactEmail() {
    cy.get(importContactEmail).should('be.visible');
  }

  verifyImportContactPhone() {
    cy.get(importContactPhone).should('be.visible');
  }

  verifyImportContactDestinationFields() {
    cy.get(importContactDestinationFields).should('have.length', 4);
  }

  verifyImportContactBackBtn() {
    cy.get(backBtn).should('be.visible');
  }

  verifyImportContactNextBtn() {
    cy.get(nextButton).should('be.visible');
  }

  verifyImportContactListName() {
    cy.get(importContactListName).should('be.visible');
  }

  verifyImportContactSelectCompaignDropdown() {
    cy.xpath(importContactSelectCompaignDropdown).should('be.visible');
  }

  verifyImportContactOptionsCheckbox(options) {
    for (let i = 0; i < options.length; i++) {
      cy.get(importContactOptionsCheckbox).should('contain.text', options[i]);
    }
  }

  verifyImportContactCancelButton() {
    cy.xpath(cancelButton).should('be.visible');
  }

  verifyImportContactSubmitButton() {
    cy.xpath(submitButton).should('be.visible');
  }

  async enterKeywordToSearch(search) {
    await promisify(cy.get(searchBox).type(search));
  }

  verifySearchResult(result) {
    cy.get(tableBody).should('contain.text', result);
  }

  clickDialedUndialedButton(button) {
    cy.xpath("//label[text()='" + button + "']/span").click();
  }

  verifyContact(firstname, lastname, status) {
    cy.xpath(
      '//span[contains(.,"' + firstname + '")][contains(.,"' + lastname + '")]'
    ).should(status);
  }

  clickListDropdown() {
    cy.xpath(allList).click();
  }
  clickTesting() {
    cy.get('.ss-select-option').then((option) => {
      for (let i = 0; i < option.length; i++) {
        if (option[i].textContent.trim() === 'testing') {
          cy.get(option[i]).scrollIntoView().click({ force: true });
          break;
        }
      }
    });
  }

  clickContactCheckbox(number) {
    cy.wait(3000);
    for (let i = 0; i < number.length; i++) {
      cy.xpath(contactCheckbox(number[i])).click();
    }
  }

  clickLists() {
    cy.get(lists).click({ force: true });
  }

  clickAction() {
    cy.xpath(actionsDropdown).click();
  }

  clickActionAddToCampaign() {
    cy.xpath(actionCampaign).click();
  }

  selectCampaignForContact() {
    cy.get(CampaignDropdown).click();
    cy.xpath(selectCampaign).click();
  }

  clickContinueButton() {
    cy.xpath(ContinueButton).click();
  }

  verifyAddedCampaign() {
    cy.get(toast).contains('Contacts added to campaign');
  }

  verifyContactCountSlider() {
    cy.get(contactCountSlider).should('be.visible');
  }

  verifyListImportContactButton() {
    cy.xpath(listImportContactButton).should('be.visible');
  }

  verifyListsTable() {
    cy.get(listsTable).should('be.visible');
  }

  clickImportContacts() {
    cy.xpath(listImportContactButton).click();
  }

  verifyListPauseButton() {
    cy.get(listPauseButton).should('be.visible');
  }

  verifyListDeleteButton() {
    cy.get(listDeleteButton).should('be.visible');
  }

  clickPauseButton() {
    cy.xpath(testingPauseButton).click();
  }

  verifyStatus() {
    cy.xpath(listStatus).should('be.visible');
  }

  async getPhoneNumber() {
    let number;
    await promisify(
      cy.get(phone, { timeout: 5000 }).then((el) => {
        // await cy.log(el.text().trim());
        number = el.text().trim();
        cy.log(number);
      })
    );
    // cy.log(number);
    return number;
  }
}
