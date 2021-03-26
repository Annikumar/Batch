import Contacts from '../support/pages/Contacts';

let fixtureData;
let randNum = Math.floor(Math.random() * 100);
const addCont = new Contacts();

describe('Add Contact flow', () => {
  before(() => {
    cy.fixture('constants')
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
      });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    cy.Logout();
  });

  it('Should Login', () => {
    cy.Login(fixtureData.username, fixtureData.password);
  });

  it('Verifies All Elements', () => {
    addCont.clickingOnContactOption();
    cy.wait(3000);
    addCont.verifySearchBox();
    addCont.verifyDialedRadioBtn(['All', 'Dialed', 'Undialed']);
    addCont.verifyDialedCountSlider();
    addCont.verifyAllListDropdown();
    addCont.verifyLeadScoreSlider();
    addCont.verifyNewContactBtn();
    addCont.verifySelectionCountCheckbox();
    addCont.verifyActionsDropdown();
    addCont.verifySaleMadeCheckbox();
    addCont.verifyAppointmentMadeCheckbox();
    addCont.verifyContactListHeaderElements([
      'Name',
      'Lead Score',
      'Phone Number',
      'Dialed',
      'Campaigns',
      'Lists',
      'Last Contact',
      'Date Added',
    ]);
  });

  it('Verifies Search Functionality', () => {
    addCont.clickingOnContactOption();
    addCont.enterKeywordToSearch('automation');
    addCont.verifySearchResult('Automation');
  });

  it('Verifies Create New Contact Elements', () => {
    addCont.clickingOnContactOption();
    cy.wait(3000);
    addCont.clickAddNewContactButton();
    addCont.selctCreateNewContactOption();
    addCont.verifyContactListDropdown();
    addCont.verifyAddNewContactListBtn();
    addCont.verifyFirstNameField();
    addCont.verifyLastNameField();
    addCont.verifyEmailField();
    addCont.verifyPhoneNumberFields();
    addCont.verifyLeadSourceField();
    addCont.verifyAddressField();
    addCont.verifyCityField();
    addCont.verifyStateDropdown();
    addCont.verifyZipField();
    addCont.verifyMailingAddressField();
    addCont.verifyMailingCityField();
    addCont.verifyMailingStateDropdown();
    addCont.verifyMailingZipField();
    addCont.verifySaveBtn();
    addCont.verifyCancelBtn();
  });

  it('verifies Import Contact Elements', () => {
    addCont.clickingOnContactOption();
    addCont.clickAddNewContactButton();
    addCont.selectUploadFileOption();
    addCont.verifyImportContactsHeader([
      'Upload your file',
      'Mapping data',
      'Options',
    ]);
    addCont.verifyImportContactDropboxUpload();
    addCont.uploadFileForContact();
    addCont.verifyImportContactFirstName();
    addCont.verifyImportContactLastName();
    addCont.verifyImportContactPhone();
    addCont.verifyImportContactEmail();
    addCont.verifyImportContactDestinationFields();
    addCont.verifyImportContactBackBtn();
    addCont.verifyImportContactNextBtn();
    addCont.selectFirstNameDropdown();
    addCont.selectLastNameDropdown();
    addCont.selectEmailDropdown();
    addCont.selectPhoneDropdown();
    addCont.clickNextButton();
    addCont.verifyImportContactListName();
    addCont.verifyImportContactSelectCompaignDropdown();
    addCont.verifyImportContactOptionsCheckbox([
      'Scrub Against Existing Contacts',
      'Remove Duplicates In List',
      'Scrub Federal DNC',
      'Scrub Company DNC',
      'Scrub Mobile',
      'Scrub Litigator List',
    ]);
    addCont.verifyImportContactCancelButton();
    addCont.verifyImportContactSubmitButton();
  });

  it('Should Add Contact using Create New option', () => {
    addCont.clickingOnContactOption();
    cy.wait(3000);
    addCont.clickAddNewContactButton();
    addCont.selctCreateNewContactOption();
    addCont.enterFirstName(fixtureData.userFirstname);
    addCont.enterLastName(fixtureData.contactLastname + randNum.toString());
    addCont.enterAddress('anyAddress');
    addCont.enterCity('Tucson');
    addCont.selectState('Arizona');
    addCont.enterZipCode('85701');
    addCont.enterEmail(
      fixtureData.contactEmail.replace(
        'automation-contact',
        'automation-contact' + randNum.toString()
      )
    );
    addCont.enterPhoneNumber('0123456789');
    addCont.clickSaveButton();
    addCont.verifySuccessToast();
  });

  it('Should show added contacts in table', () => {
    addCont.clickingOnContactOption();
    addCont.verifyAddedContacts(
      fixtureData.userFirstname,
      fixtureData.contactLastname + randNum.toString()
    );
  });

  it('Should delete the added Contact', () => {
    addCont.clickingOnContactOption();
    addCont.deleteAddedContacts(
      fixtureData.userFirstname,
      fixtureData.contactLastname + randNum.toString()
    );
    addCont.handleAlertForDelete();
    addCont.verifyDeletedToast();
  });

  it('Should add contact using upload file', () => {
    addCont.clickingOnContactOption();
    addCont.clickAddNewContactButton();
    addCont.selectUploadFileOption();
    addCont.uploadFileForContact();
    cy.wait(2000);
    addCont.selectFirstNameDropdown();
    addCont.selectLastNameDropdown();
    addCont.selectEmailDropdown();
    addCont.selectPhoneDropdown();
    addCont.clickNextButton();
    addCont.clickSubmitButton();
    addCont.clickSubmitButton();
    addCont.verifyImportStartedToast();
    addCont.verifyImportContactCompleteToast();
    cy.wait(3000);
  });

  it('Should show added contacts in table', () => {
    addCont.clickingOnContactOption();
    addCont.verifyAddedContacts('Automation', 'CSV1');
  });

  it('Should delete the added Contact', () => {
    addCont.clickingOnContactOption();
    addCont.deleteAddedContacts('Automation', 'CSV1');
    addCont.handleAlertForDelete();
    addCont.verifyDeletedToast();
  });

  it.skip('Dial a Contact Number', () => {
    addCont.clickingOnContactOption();
    addCont.clickOnContactName('Automation', 'Contact');
    addCont.clickPhoneNumber();
    addCont.clickCallBtn();
    addCont.verifyCallStarted();
    addCont.clickEndCallBtn();
    // addCont.selectCallResult('Busy');
    // addCont.clickContinueBtn();
  });

  it('Verify Dialed/Undialed Radio Button Functionality', () => {
    addCont.clickingOnContactOption();
    addCont.clickDialedUndialedButton('Dialed');
    addCont.verifyContact('Testing', 'User', 'not.exist');
    addCont.verifyContact('Automation', 'Contact', 'be.visible');
    addCont.clickDialedUndialedButton('Undialed');
    addCont.verifyContact('Testing', 'User', 'be.visible');
    addCont.verifyContact('Automation', 'Contact', 'not.exist');
    addCont.clickDialedUndialedButton('All');
  });

  it('Select List from Dropdown', () => {
    addCont.clickListDropdown();
    addCont.selectContactList('testing');
    cy.wait(1000);
    addCont.verifyContact('New', 'User', 'be.visible');
  });

  it('Verify User is able to Add contact to campaign using action button', () => {
    addCont.clickLists();
    addCont.clickingOnContactOption();
    addCont.clickContactCheckbox(['1', '2']);
    addCont.clickAction();
    addCont.clickActionAddToCampaign();
    addCont.selectCampaignForContact();
    addCont.clickContinueButton();
    addCont.verifyAddedCampaign();
  });

  it('Verify List elements of contact', () => {
    addCont.clickLists();
    addCont.verifySearchBox();
    addCont.verifyContactCountSlider();
    addCont.verifyListImportContactButton();
  });

  it('Verify List Header Element', () => {
    addCont.verifyContactListHeaderElements([
      'ID',
      'Name',
      'Status',
      'Total Contacts',
      'Mobile',
      'Landline',
      'Litigator',
      'DNC',
      'Campaigns',
      'Health',
      'Age',
      'Round',
      'Created',
      'File',
    ]);
  });

  it('verify Lists table', () => {
    addCont.verifyListsTable();
  });

  it('Verify Pause and Delete Button of Lists', () => {
    addCont.verifyListPauseButton();
    addCont.verifyListDeleteButton();
  });

  it('Verify Pause Button Functionality', () => {
    addCont.clickPauseButton();
    addCont.verifyStatus();
  });

  it('User is able to import contact from list section', () => {
    addCont.clickImportContacts();
    addCont.uploadFileForContact();
    cy.wait(2000);
    addCont.selectFirstNameDropdown();
    addCont.selectLastNameDropdown();
    addCont.selectEmailDropdown();
    addCont.selectPhoneDropdown();
    addCont.clickNextButton();
    addCont.clickSubmitButton();
    addCont.clickSubmitButton();
    addCont.verifyImportStartedToast();
    addCont.verifyImportContactCompleteToast();
    cy.wait(3000);
  });

  it('Should show Imported contact in table', () => {
    addCont.clickingOnContactOption();
    addCont.verifyAddedContacts('Automation', 'CSV1');
  });

  it('User is able to delete Imported Contact', () => {
    addCont.clickingOnContactOption();
    addCont.deleteAddedContacts('Automation', 'CSV1');
    addCont.handleAlertForDelete();
    addCont.verifyDeletedToast();
  });

  it('check validation on required fields of new contact', () => {
    addCont.clickingOnContactOption();
    addCont.clickAddNewContactButton();
    addCont.selctCreateNewContactOption();
    addCont.clickSaveButton();
    addCont.verifyErrorMessage('Enter First Name');
  });

  it('Download and Verify the Contact List', () => {
    addCont.clickingOnContactOption();
    addCont.clickLists();
    addCont.downloadAndVerifyContactList('longfile.csv');
  });
});
