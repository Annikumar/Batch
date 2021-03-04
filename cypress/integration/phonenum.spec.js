import PhoneNum from '../support/pages/PhoneNum';

let fixtureData;
let num;
const addNum = new PhoneNum();
let randNum = Math.floor(Math.random() * 100000);

describe('Add Phone Number flow', () => {
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

  it('Should Buy Phone number successfully ', async () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickBuyDidButton();
    addNum.selectStateModeOption('Arizona');
    cy.log(fixtureData.randNum);
    addNum.clickSearchButton();
    addNum.verifysearchStartedToast();
    addNum.selectPhoneNumber();
    addNum.assignAgentUser('Sandeep Kumar');
    num = await addNum.getFirstPhoneNumber();
    await addNum.clickOrderNowButton();
    await addNum.closingDialog();
    cy.log(num);
  });

  it('Should show added Phone number in table', () => {
    addNum.clickPhoneNumberMenu();
    addNum.verifyAddedPhoneNum(num);
    cy.log(num);
  });

  it('Should delete the added Phone Number', () => {
    addNum.clickPhoneNumberMenu();
    addNum.deleteAddedPhoneNumber(num);
    addNum.handleAlertForDelete();
    addNum.verifyDeletedToast();
  });

  it('Verifies IVR Elements', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickIvrAttendent();
    addNum.verifySearchBox();
    addNum.verifyNewIVRBtn();
    addNum.verifyTableHeaderName(['Name', 'Description', 'Modified']);
  });

  it('Verifies Add New IVR Elements', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickIvrAttendent();
    addNum.clickNewIvr();
    addNum.verifyNameField();
    addNum.verifyDescriptionField();
    addNum.verifyExtensionsDropdown('Select Phone Group');
    addNum.verifyExtensionsDropdown('Select Numbers');
    addNum.verifyAssignCampaignDropdown('Select Campaign');
    addNum.verifyIVRDropdown('After Hours', 'Hangup');
    addNum.verifyIVRDropdown('Timeout', 'Hangup');
    addNum.verifyNewDigitBtn();
    addNum.verifyWelcomePromptDropdown('Select Recording');
    addNum.verifyAddNewBtn();
    addNum.verifySaveBtn();
    addNum.verifyCancelBtn();
  });

  it('Should Add New IVR', function () {
    addNum.clickPhoneNumberMenu();
    addNum.clickIvrAttendent();
    addNum.clickNewIvr();
    addNum.enterName('Testing' + randNum.toString());
    addNum.enterDescription('New Ivr');
    addNum.selectCampaign();
    addNum.selectNumber('2830');
    addNum.clickAddNewWelcomePrompt();
    addNum.clickTextToSpeech();
    addNum.enterRecordingName('Test' + randNum.toString());
    addNum.enterRecordingText('Hey How Are You');
    addNum.clickGenerateButton();
    addNum.clickRecordingSaveButton();
    addNum.clickIvrSaveButton();
    addNum.verifySaved();
  });

  it('Should delete IVR', function () {
    addNum.deleteIVR('Testing' + randNum.toString());
    addNum.handleAlertForDelete();
    addNum.verifyDeletedIvr();
  });

  it('Verifies Inbound Call Menu Elements', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickInboundCallMenu();
    addNum.verifySearchBox();
    addNum.verifyNewQueueBtn();
    addNum.verifyTableHeaderName([
      'Name',
      'Calls',
      'Answered',
      'Unanswered',
      'Agents',
      'Modified',
    ]);
  });

  it('Verifies New Queue Form Elements', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickInboundCallMenu();
    addNum.clickNewQueueBtn();
    addNum.verifyNameField();
    addNum.verifyDescriptionField();
    addNum.verifyExtensionsDropdown('Select Phone Group');
    addNum.verifyExtensionsDropdown('Select Numbers');
    addNum.verifyAssignAgent('Agents');
    addNum.verifyAssignCampaignDropdown('Select Campaign');
    addNum.verifyRingStrategy(['Round Robin', 'Ring All']);
    addNum.verifyWrapupTimeoutDropdown();
    addNum.verifyRingTimeDurationDropdown();
    addNum.verifyTimeoutDestinationDropdown();
    addNum.verifyAfterHourDestinationDropdown();
  });

  it('Fill Form to Create New Queue', () => {
    addNum.enterName('demo testing');
    addNum.enterDescription('testing');
    addNum.selectExtensionDropdown('Select Numbers', '0160');
    addNum.selectAssignAgent('Agents', 'anil');
    addNum.selectAssignCampaignDropdown('Select Campaign', 'FirstCampaign');
    addNum.clickCreateQueueBtn();
    addNum.verifySaved();
  });

  it('Delete the Created Queue', () => {
    addNum.clickDeleteBtn('demo testing');
    addNum.handleAlertForDelete();
  });

  it('Verifies the DNC Elements', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickDncMenu();
    addNum.verifyDncCards();
    addNum.verifyDncCardTitle(['Numbers', 'DNC Area Codes', 'DNC States']);
    addNum.verifySearchBox();
    addNum.verifyDncUploadFileBtn();
    addNum.verifyDncTableHeader([
      'File Name',
      'Total Records',
      'Failed',
      'Valid',
      'Created',
    ]);
  });

  it('Verifies Elements and Add DNC Number', () => {
    addNum.clickAddBtn('Numbers');
    addNum.verifyNumberField();
    addNum.verifyAddMoreBtn();
    addNum.verifySaveBtn();
    addNum.verifyCancelBtn();
    addNum.enterDncNumber('9999999999');
    addNum.clickSaveBtn();
    addNum.verifyAddedValue('(999) 999-9999');
  });

  it('Delete Added DNC Number', () => {
    addNum.clickDeleteDncValue('Numbers', '(999) 999-9999');
    addNum.handleAlertForDelete();
  });

  it('Verifies Elements and Add DNC Area Codes', () => {
    addNum.clickAddBtn('DNC Area Codes');
    addNum.verifyNumberField();
    addNum.verifyAddMoreBtn();
    addNum.verifySaveBtn();
    addNum.verifyCancelBtn();
    addNum.enterDncNumber('999');
    addNum.clickSaveBtn();
    addNum.verifyAddedValue('999');
  });

  it('Delete Added DNC Area Code', () => {
    addNum.clickDeleteDncValue('Area', '999');
    addNum.handleAlertForDelete();
  });

  it('Verifies Elements and Add DNC States', () => {
    addNum.clickAddBtn('DNC States');
    addNum.verifySelectStateDropdown();
    addNum.verifyAddMoreBtn();
    addNum.verifySaveBtn();
    addNum.verifyCancelBtn();
    addNum.selectState('Colorado');
    addNum.clickSaveBtn();
    addNum.verifyAddedValue('Colorado');
  });

  it('Delete Added DNC States', () => {
    addNum.clickDeleteDncValue('States', 'Colorado');
    addNum.handleAlertForDelete();
  });

  it('Verifies Elements of Call Result Page', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickCallResultMenu();
    addNum.verifySearchBox();
    addNum.verifyRadioBtn(['All', 'Active', 'Inactive']);
    addNum.verifyAddNewCallResultBtn();
    addNum.verifyTableHeaderName([
      'Call Result',
      'Number Group',
      'Campaigns',
      'State',
      'Default',
      'Global',
      'Added',
    ]);
    addNum.verifyTableBodyElement([
      'Abandoned',
      'Answering Machine',
      'Busy',
      'Call Back',
      'Disconnected Number',
      'No Answer',
      'Not Interested',
      'Successful Sale',
      'Unknown',
      'Voicemail',
    ]);
  });

  it('Verifies Add New Call Result Elements', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickCallResultMenu();
    addNum.clickAddNewCallResultBtn();
    addNum.verifyNameField();
    addNum.verifyActiveInactive('Active');
    addNum.verifyActiveInactive('Inactive');
    addNum.verifyNumberGroupDropdown();
    addNum.verifyButtonColorBox();
    addNum.verifyAssignCampaignDropdown('Select Number Group');
    addNum.verifyShowOnNewCompaignPage('Yes');
    addNum.verifyShowOnNewCompaignPage('No');
    addNum.verifyAddNewRuleBtn();
    addNum.verifyRules([
      'Do Not Redial Contact',
      'Do Not Redial Number',
      'Add Contact to DNC',
      'Add Number to DNC',
      'Mark as Lead',
      'Send to Email',
    ]);
    addNum.verifyCallResultCancelBtn();
    addNum.verifyCallResultSaveBtn();
  });

  it('Add New Call Result', () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickCallResultMenu();
    addNum.clickAddNewCallResultBtn();
    addNum.enterName('DemoTesting');
    addNum.chooseShowOnNewCampaignPage('Yes');
    addNum.chooseActiveInactive('Active');
    addNum.selectCallResultCampaignDropdown('FirstCampaign');
    addNum.clickCallResultSaveBtn();
  });
});
