import promisify from 'cypress-promise';

const contactsMenu = 'a[title="Contacts"] .menu_cricle';
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
const stateDropdown = '//div[span[text()="State"]]';
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
const allList = '.form-group .ss-select-control';
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
const phoneNumberFields =
  "input[placeholder='Phone Number'][name='phonenumber1']";
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
  '(//table[contains(@class,"table")]//span[@class="checkmark"])[' +
  number +
  ']';

const lists = 'a[title="Contact Lists"]';
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
const listStatus = 'svg[data-icon="play"]';
const testingPauseButton =
  '//tr[td[text()="testing"]]//span//*[name()="svg" and @data-icon="pause"]';
const phone = '.phone-number';
const contactList = (listName) =>
  "//tr[td[text()='" + listName + "']]//a[img[contains(@src,'csv')]]";
const followUpCall = '.contact-view__calendar-btn';
const errorMessage = '.custom-input__tooltip';
const contact = (firstName, lastName) =>
  '//span[@class="contacts__name"][contains(.,"' +
  firstName +
  '") and contains(.,"' +
  lastName +
  '")]';
const month = '.month-selector .title';
const nextBtn = '.fa-chevron-right';
const day = '.day .title';
const saveBtn = '//button[contains(text(),"Save")]';
const scheduledCall = '.day .item';
const closeBtn = '//button[contains(text(),"Close")]';
const notes = "//button[text()='Notes']";
const addNewNotes = "//button[text()='Add New Note']";
const notesTextBox = '.ProseMirror';
const AddedNote = '.comment-item-body';
const notesWindow = '.modal-content';
const notesBullets = 'svg[data-icon="list-ul"]';
const fieldsEditBtn = (fieldName) =>
  `//tr[td[contains(@class,"contact-field") and text()="${fieldName}"]]//*[name()="svg"]`;
const phoneEditBtn = `//tr[td[div[contains(@class,"td__phone")]]]//td[contains(@class,"contact__custom-input__edit")]//*[name()="svg"][1]`;
const EmailEditBtn = `//tr[td[div[contains(@class,"td__email")]]]//td[contains(@class,"contact__custom-input__edit")]//*[name()="svg"][1]`;
const phoneSaveBtn = `//tr[td[input[contains(@class,"phone-input")]]]//td[@class="custom-input__buttons"]//*[name()="svg"][1]`;
const emailSaveBtn = `//tr[td[input[@name="email"]]]//td[@class="custom-input__buttons"]//*[name()="svg"][1]`;
const fieldsSaveBtn = (fieldName) =>
  `//tr[td[contains(@class,"contact-field") and text()="${fieldName}"]]//td[@class="custom-input__buttons"]//*[name()="svg"][1]`;
const contactsCampaign = '//button[text()="Campaigns"]';
const recordingIcon = 'img[src*="listen"]';
const listMenuIcon = 'img[src*="edit"]';
const assignToCampaignBtn = '.table-responsive .show a.dropdown-item';
const playerCampaignName = '.contacts-player__top-campaign';
const playerControlBtn = '.contacts-player__controls svg';
const playerVolumeBar = '.contacts-player__volume-bar';
const playerProgressBar = '.contacts-player__progress-bar';
const playerDownloadBtn = '.contacts-player__download';
const playerPlayPauseBtn = '.contacts-player__controls svg:nth-of-type(2)';
const playerForwardBtn = '.contacts-player__controls svg:nth-of-type(3)';
const playerRewindBtn = '.contacts-player__controls svg:nth-of-type(1)';
const contactPhoneNumber =
  '.phone-table tbody tr:nth-child(1) .phone__a-wrapper';
const callButton = '.stg-softphone-callbutton';
const callResults = '.disposition-cell .disposition';
const doneBtn = "//button[text()='Done']";
const openSoftphone = '.stg-softphone-wide';
const softphoneIcon = '.nav-item img[src*="softphone"]';
const softphoneNumPad = '.stg-softphone-keyboard-button';

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

  clickContinueBtn() {
    cy.xpath(doneBtn).click();
  }

  enterFirstName(fstName) {
    cy.xpath(fieldsEditBtn('First name')).click();
    cy.get(firstName).type(fstName);
    cy.xpath(fieldsSaveBtn('First name')).click();
  }

  enterLastName(lstName) {
    cy.xpath(fieldsEditBtn('Last name')).click();
    cy.get(lastName).type(lstName);
    cy.xpath(fieldsSaveBtn('Last name')).click();
  }

  enterAddress(address) {
    cy.xpath(fieldsEditBtn('Address')).click();
    cy.get(inputAddress).type(address, { force: true });
    cy.xpath(fieldsSaveBtn('Address')).click();
  }

  enterCity(city) {
    cy.xpath(fieldsEditBtn('City')).click();
    cy.get(inputCity).type(city, { force: true });
    cy.xpath(fieldsSaveBtn('City')).click();
  }

  enterZipCode(zip) {
    cy.xpath(fieldsEditBtn('Postal Code')).click();
    cy.get(inputZip).type(zip, { force: true });
    cy.xpath(fieldsSaveBtn('Postal Code')).click();
  }

  clickDialerCallButton() {
    cy.get(callButton).click();
  }

  selectCallResult(result) {
    cy.get(callResults).then(($el) => {
      for (let i = 0; i < $el.length; i++) {
        if ($el[i].textContent === result) {
          $el[i].click();
          break;
        }
      }
    });
  }

  dialPhoneNumber(num) {
    const number = num.split('');
    for (let i = 0; i < number.length; i++) {
      cy.get(softphoneNumPad).then((numPad) => {
        for (let j = 0; j < numPad.length; j++) {
          // cy.log(numPad[1].textContent);
          if (numPad[j].textContent.includes(number[i])) {
            cy.get(numPad[j]).click();
            break;
          }
        }
      });
    }
  }

  enterEmail(email) {
    cy.xpath(EmailEditBtn).click();
    cy.get(inputEmail).type(email);
    cy.xpath(emailSaveBtn).click();
  }

  clickPlayerPlayBtn() {
    cy.get(playerPlayPauseBtn).click();
  }

  clickPlayerPauseBtn() {
    cy.get(playerPlayPauseBtn).click();
  }

  clickPlayerForwardBtn() {
    cy.get(playerForwardBtn).click();
  }

  clickContactPhoneNumber() {
    cy.get(contactPhoneNumber).click();
  }

  clickPlayerRewindBtn() {
    cy.get(playerRewindBtn).click();
  }

  enterPhoneNumber(num) {
    cy.xpath(phoneEditBtn).click();
    cy.get(inputPhone).type(num);
    cy.xpath(phoneSaveBtn).click();
  }

  selectState(state) {
    cy.xpath(stateDropdown).click();
    cy.xpath(
      '//div[@class="ss-select-dropdown"]//span/div[text()="' + state + '"]'
    ).click();
  }

  verifyPlayerVolumeBar() {
    cy.get(playerVolumeBar).should('be.visible');
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

  verifyPlayerProgressBar() {
    cy.get(playerProgressBar).should('be.visible');
  }

  uploadFileForContact() {
    cy.get(dropBoxUpload).attachFile('contact-sample.csv');
  }

  clickListMenuIcon() {
    cy.get(listMenuIcon).first().click();
  }

  verifyPlayerDownloadBtn() {
    cy.get(playerDownloadBtn).should('be.visible');
  }

  clickRecordingIcon() {
    cy.get(recordingIcon).first().click();
  }

  ClickToOpenSoftphone() {
    cy.get('body').then(($body) => {
      if ($body.find(openSoftphone).length) {
        cy.log('Softphone is already Opened');
      } else {
        cy.get(softphoneIcon).click();
      }
    });
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

  verifyPlayerCampaignName(name) {
    cy.get(playerCampaignName).should('contain.text', name);
  }

  clickNextButton() {
    cy.get(nextButton).click();
  }

  verifyPlayerControlBtns() {
    cy.get(playerControlBtn).should('have.length', 3);
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
    )
      .scrollIntoView()
      .click();
    cy.xpath(deletOption).click();
  }

  verifyAssignToCampaignBtn() {
    cy.get(assignToCampaignBtn).should('contain.text', 'Assign To Campaign');
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
    cy.get(allList).should('be.visible');
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

  clickContactsCamapign() {
    cy.xpath(contactsCampaign).click();
  }

  verifyFirstNameField() {
    cy.xpath(fieldsEditBtn('First name')).click();
    cy.get(firstName).should('be.visible');
  }

  verifyLastNameField() {
    cy.xpath(fieldsEditBtn('Last name')).click();
    cy.get(lastName).should('be.visible');
  }

  verifyEmailField() {
    cy.xpath(EmailEditBtn).click();
    cy.get(inputEmail).should('be.visible');
  }

  verifyPhoneNumberFields() {
    cy.xpath(phoneEditBtn).click();
    cy.get(phoneNumberFields).should('be.visible');
  }

  verifyLeadSourceField() {
    cy.get(leadSourceField).should('be.visible');
  }

  verifyAddressField() {
    cy.xpath(fieldsEditBtn('Address')).click();
    cy.get(inputAddress).should('be.visible');
  }

  verifyCityField() {
    cy.xpath(fieldsEditBtn('City')).click();
    cy.get(inputCity).should('be.visible');
  }

  verifyStateDropdown() {
    cy.xpath(stateDropdown).should('be.visible');
  }

  verifyZipField() {
    cy.xpath(fieldsEditBtn('Postal Code')).click();
    cy.get(inputZip).should('be.visible');
  }

  verifyMailingAddressField() {
    cy.xpath(fieldsEditBtn('Mailing Address')).click();
    cy.get(mailingAddressField).should('be.visible');
  }

  verifyMailingCityField() {
    cy.xpath(fieldsEditBtn('Mailing City')).click();
    cy.get(mailingCityField).should('be.visible');
  }

  verifyMailingZipField() {
    cy.xpath(fieldsEditBtn('Mailing Postal Code')).click();
    cy.get(mailingZipField).should('be.visible');
  }

  verifyMailingStateDropdown() {
    cy.xpath(mailingStateDropdown).should('be.visible');
  }

  verifySaveBtn() {
    cy.get(saveButton).should('be.visible');
  }

  verifyCancelBtn() {
    cy.get(cancelBtn).should('be.visible');
  }

  verifyContactListDropdown() {
    cy.xpath(contactListDropdown).should('be.visible');
  }

  verifyAddNewContactListBtn() {
    cy.xpath(addNewContactListBtn).should('be.visible');
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

  enterSearch(search) {
    cy.get(searchBox).type(search);
  }

  verifyContact(firstname, lastname, status) {
    cy.xpath(
      '//span[contains(.,"' + firstname + '")][contains(.,"' + lastname + '")]'
    ).should(status);
  }

  clickListDropdown() {
    cy.get(allList).click();
  }
  selectContactList(listName) {
    cy.get('.ss-select-option').then((option) => {
      for (let i = 0; i < option.length; i++) {
        if (option[i].textContent.trim() === listName) {
          cy.get(option[i]).click({ force: true });
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

  downloadRecording() {
    cy.get(playerDownloadBtn).then((btn) => {
      const recording = btn[0].getAttribute('href');
      cy.downloadFile(recording, 'cypress/fixtures/Download', 'Recording.mp3');
      // cy.readFile('cypress/fixtures/Download/Recording').should('be.visible');
    });
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
    cy.get(listPauseButton).first().scrollIntoView();
    cy.get(listPauseButton).should('be.visible');
  }

  verifyListDeleteButton() {
    cy.get(listDeleteButton).should('be.visible');
  }

  clickPauseButton() {
    cy.get(listPauseButton).first().scrollIntoView().click({ force: true });
  }

  verifyStatus() {
    cy.get(listStatus).should('be.visible');
  }

  async getPhoneNumber() {
    let number;
    await promisify(
      cy
        .get(phone, { timeout: 5000 })
        .first()
        .then((el) => {
          // await cy.log(el.text().trim());
          number = el.text().trim();
          cy.log(number);
        })
    );
    // cy.log(number);
    return number;
  }
  verifyErrorMessage(msg) {
    cy.get(errorMessage).should('contain.text', msg);
  }

  downloadAndVerifyContactList(listName) {
    cy.xpath(contactList(listName)).then((contact) => {
      const href = contact[0].getAttribute('href');
      cy.downloadFile(href, 'cypress/fixtures/Download', 'contacts.csv');
      this.clickingOnContactOption();
      this.clickListDropdown();
      this.selectContactList(listName);
      cy.wait(2000);
      cy.get('.phone-number').then((el) => {
        let ContactPhoneNumbers = [];

        for (let i = 0; i < el.length; i++) {
          let result = el[i].textContent.trim();
          let number = '';
          for (let i = 0; i < result.length; i++) {
            if (
              result[i] != '(' &&
              result[i] != ')' &&
              result[i] != ' ' &&
              result[i] != '-'
            ) {
              number += result[i];
            }
          }
          ContactPhoneNumbers.push(number);
        }
        cy.readFile('cypress/fixtures/Download/contacts.csv').then((data) => {
          for (let i = 0; i < ContactPhoneNumbers.length; i++) {
            expect(data).to.contain(ContactPhoneNumbers[i]);
          }
        });
      });
    });
  }

  clickFollowUpCall() {
    cy.get(followUpCall).click();
    cy.wait(1000);
  }

  clickContactName(name) {
    const firstLastName = name.split(' ');
    cy.xpath(contact(firstLastName[0], firstLastName[1])).click();
  }

  selectDateForFollowUpCall() {
    const today = new Date();
    const date = today.getDate();
    const Month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const monthYear = `${Month} ${year}`;
    cy.get('.modal-content').should('be.visible');
    cy.log(monthYear);
    cy.log(date);
    for (let i = 0; i < 36; i++) {
      cy.get(month).then(($month) => {
        for (let i = 0; i < $month.length; i++) {
          if ($month[i].textContent.trim() != monthYear) {
            cy.get(nextButton).click();
            break;
          }
        }
      });
    }
    cy.get(day)
      .invoke('show')
      .then(($day) => {
        for (let i = 0; i < $day.length; i++) {
          if ($day[i].textContent.trim() === date.toString()) {
            cy.wait(1000);
            cy.log($day[i].textContent.trim());
            cy.log(date);
            $day[i].click();
            break;
          }
        }
      });
  }

  clickSavebtn() {
    cy.xpath(saveBtn).click();
  }

  verifyFollowUpCall(name) {
    cy.get(scheduledCall).should('contain.text', `Call Back to ${name}`);
  }

  clickCloseBtn() {
    cy.xpath(closeBtn).click({ force: true });
  }

  clickNotes() {
    cy.xpath(notes).click();
  }

  clickAddNewNotes() {
    cy.xpath(addNewNotes).click();
  }

  enterNotes() {
    cy.get(notesTextBox).type('Testing note for Contact');
  }

  verifyAddedNote() {
    cy.get(AddedNote).should('be.visible');
  }

  verifyNotesWindowNotVisible() {
    cy.get(notesWindow).should('not.exist');
  }

  clickNotesBullets() {
    cy.get(notesBullets).click();
  }
}
