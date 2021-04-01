import Dashboard from '../support/pages/Dashboard';
import { selectAgentStatus } from '../support/Utils';

const Dash = new Dashboard();
let fixtureData;
let cardLast4Digit;
let randNum = Math.floor(Math.random() * 100000);

describe('Dashboard Elements', function () {
  before(() => {
    cy.fixture('constants')
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
        cardLast4Digit = fixtureData.cardNumber.slice(
          fixtureData.cardNumber.length - 4
        );
      });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    selectAgentStatus('Offline');
    cy.Logout();
  });

  it('Should Login', () => {
    cy.Login(fixtureData.username, fixtureData.password);
  });

  it('verify elements in Dashboard', function () {
    Dash.clickDashboard();
    Dash.verifyDashboardElements();
  });

  it('verify elements in Dashboard Header', function () {
    Dash.verifyDashboardHeaderElement();
  });

  it('Login As Button Functionality', function () {
    Dash.clickLoginAs();
    Dash.searchUser('automation');
    Dash.verifySearchedUser();
  });

  it('Change Admin Status', function () {
    Dash.clickStatusButton();
    Dash.selectAvailable('Available', 'FirstCampaign');
    Dash.clickConfirmButton();
  });

  it('Verify functionality of Dialer button', function () {
    Dash.clickDialer();
    Dash.verifyDialPad();
  });

  it.skip('Verify user is able to make call using dialer button', () => {
    Dash.dialNumber();
    Dash.clickCallButton();
    Dash.verifyCallStarted();
    Dash.clickCallButton();
    Dash.clickAnsweringMachine();
    Dash.clickContinue();
  });

  it('Verify Task Button Functionality', () => {
    Dash.clickTaskButton();
    Dash.verifyTask();
  });

  it('Verify on click user profile show options', () => {
    Dash.clickUserProfile();
    Dash.verifyUserProfileOptions();
    Dash.clickUserProfile();
  });

  it('Verify User setting option should show these options', () => {
    Dash.clickUserProfile();
    Dash.clickSettingsButton();
    Dash.verifyUserSettingOptions([
      'Address Book',
      'Voicemail',
      'Integrations',
      'Lead Score',
      'Agent Scripts',
      'Audio Library',
    ]);
  });

  it('Verify User Setting Profile Elements', () => {
    Dash.clickUserProfile();
    Dash.clickProfile();
    Dash.verifyUserSettingsProfileFields([
      'firstname',
      'lastname',
      'email',
      'address',
      'city',
      'zip',
      'phone',
      'phone2',
    ]);
    Dash.verifyProfileState();
    Dash.verifyProfileTimeZone();
    Dash.verifyProfilePasswordChangeButton();
    Dash.verifyProfileAgentFeaturesEnable();
    Dash.verifyProfileAgentFeaturesDisable();
  });

  it('Verify User settings Billing Elements', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.verifyBillingSingleLineDialer();
    Dash.verifyBillingMultipleLineDialer();
    Dash.verifyUsageStatus();
    Dash.verifyPaymentMethod();
    Dash.verifyBillingAddress();
    Dash.verifyPauseAccount();
    Dash.verifyCancelAccount();
    Dash.verifyInvoice();
  });

  it('Add New Credit Card', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickAddNewCard();
    Dash.enterCardName(fixtureData.cardHolderName);
    Dash.enterCardNumber(fixtureData.cardNumber);
    Dash.enterExpiryDate(fixtureData.cardExpiryDate);
    Dash.enterCVC(fixtureData.cardCVC);
    Dash.chooseCountry('United States');
    Dash.enterBillingZip('43256');
    Dash.clickContinue();
    Dash.verifyAddedCard(cardLast4Digit);
  });

  it('Verify the Default Credit Card Functionality', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickCardDefaultBtn(cardLast4Digit);
    Dash.verifyCardDefault(cardLast4Digit);
    Dash.clickCardDefaultBtn('0505');
    Dash.verifyCardDefault('0505');
  });

  it('Delete the Added New Credit Card', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickDeleteCardBtn(cardLast4Digit);
    Dash.verifyCardDelete();
  });

  it('Verifies monthly total should be greater when keeping phone', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickPauseAccountBtn();
    cy.wait(2000);
    Dash.compareBaseAndTotalPrice('keep phone');
    Dash.clickClosePauseSubscriptionBox();
  });

  it('Verifies monthly total should be equal when not keeping phone', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickPauseAccountBtn();
    cy.wait(2000);
    Dash.clickKeepPhoneCheckbox();
    Dash.compareBaseAndTotalPrice('dont keep phone');
    Dash.clickClosePauseSubscriptionBox();
  });

  it('Pause Account while keeping the Phone Number', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickPauseAccountBtn();
    cy.wait(2000);
    Dash.clickPutSubscriptionOnHold();
    Dash.clickStartBtn();
    Dash.verifyAccountPauseMessage();
  });

  it('Unpause account by choosing any Plan', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.choosePlan('Multi-Line Dialer'); // Single Line Dialer
    Dash.clickContinueBtn();
    Dash.verifyPauseAccount();
  });

  it('Pause Account while not keeping the Phone Number', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickPauseAccountBtn();
    cy.wait(2000);
    Dash.clickKeepPhoneCheckbox();
    Dash.clickPutSubscriptionOnHold();
    Dash.clickStartBtn();
    Dash.verifyAccountPauseMessage();
  });

  it('Unpause account by choosing any Plan', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.choosePlan('Multi-Line Dialer'); // Single Line Dialer
    Dash.clickContinueBtn();
    Dash.verifyPauseAccount();
  });

  it('Upgrade the Plan', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.upgradePlan('Multi-Line Dialer'); // Single Line Dialer
    Dash.clickContinueBtn();
  });

  it('Verify User settings Address Boook elements', () => {
    Dash.clickUserProfile();
    Dash.clickSettingsButton();
    Dash.clickAddressBook();
    Dash.verifyAddressBookingHeading();
    Dash.verifyAddressBookNewContactButton();
    Dash.verifyAddressBookTableHeaderElement([
      'Name',
      'Description',
      'Phone Number',
      'Created',
    ]);
  });

  it('Add a New Contact', () => {
    Dash.clickAddressBook();
    Dash.clickAddNewContact();
    Dash.enterContactName('Testing');
    Dash.enterPhoneNumber('9999999999');
    Dash.enterDescription('This is a Testing contact');
    Dash.clickSaveBtn();
    Dash.verifyAddedContact('Testing');
  });

  it('Fails to Add a Duplicate Contact', () => {
    Dash.clickAddressBook();
    Dash.clickAddNewContact();
    Dash.enterContactName('Testing');
    Dash.enterPhoneNumber('9999999999');
    Dash.enterDescription('This is a Testing contact');
    Dash.clickSaveBtn();
    Dash.verifyErrorMessage('Duplicate contact name');
    Dash.clickCancelBtn();
  });

  it('Edit the Existing contact', () => {
    Dash.clickAddressBook();
    Dash.clickEditBtn('Testing');
    Dash.enterContactName('DemoTesting');
    Dash.enterPhoneNumber('9999999999');
    Dash.enterDescription('This is the edited Contact');
    Dash.clickSaveBtn();
    Dash.verifyAddedContact('DemoTesting');
  });

  it('Delete the Contact', () => {
    Dash.clickAddressBook();
    Dash.clickDeletebtn('DemoTesting');
    Dash.verifyContactDelete('DemoTesting');
  });

  it('Verify User Setting Voicemail Elements', () => {
    Dash.clickVoicemail();
    Dash.verifyVoicemailHeading();
    Dash.verifyNewMailButton();
    Dash.verifyVoicemailTableHeading(['Name', 'Email', 'Recording', 'Created']);
  });

  it('Verify User Setting Lead Score elements', () => {
    Dash.clickLeadScore();
    Dash.verifyLeadScoreHeading();
    Dash.verifyLeadScoringTable();
    Dash.verifyNewRulerButton();
    Dash.verifyLeadScoreExample();
  });

  it('Add a New Lead Rule', () => {
    Dash.clickLeadScore();
    Dash.clickNewRuleBtn();
    Dash.clickSaveBtn();
    Dash.verifyAddedRule('Email');
  });

  it('Remove the added Lead Rule', () => {
    Dash.clickLeadScore();
    Dash.clickRuleRemoveBtn('Email');
    Dash.clickSaveBtn();
    Dash.verifyRuleRemoved('Email');
  });

  it('Verify User Setting Agent Scripts Elements', () => {
    Dash.clickAgentScripts();
    Dash.verifyAgentScriptHeading();
    Dash.verifyNewAgentScriptButton();
    Dash.verifyAgentScriptTableHeading(['Script Name', 'Created']);
  });

  it('Add a New Agent Script', () => {
    Dash.clickAgentScripts();
    Dash.clickNewAgentScriptBtn();
    Dash.enterScriptName('Testing');
    Dash.enterScriptText('This is a testing Script');
    Dash.clickSaveBtn();
    Dash.verifyAddedScript('Testing');
  });

  it('Add a New Agent Script with duplicate name', () => {
    Dash.clickAgentScripts();
    Dash.clickNewAgentScriptBtn();
    Dash.enterScriptName('Testing');
    Dash.enterScriptText('This is a testing Script');
    Dash.clickSaveBtn();
    Dash.verifyErrorMessage('Duplicate agent script name');
    Dash.clickCancelBtn();
  });

  it('Edit the Agent Script', () => {
    Dash.clickAgentScripts();
    Dash.clickEditBtn('Testing');
    Dash.enterScriptName('DemoTesting');
    Dash.enterScriptText('This is the Edited Agent Script');
    Dash.clickSaveBtn();
    Dash.verifyEditScript('DemoTesting');
  });

  it('Remove the Added Agent Script', () => {
    Dash.clickAgentScripts();
    Dash.clickDeletebtn('DemoTesting');
    Dash.verifyScriptDelete('DemoTesting');
  });

  it('Verify User Setting Audio Library Elements', () => {
    Dash.clickAudioLibrary();
    Dash.verifyAudioLibraryNewRecording();
    Dash.verifyAudioLibrarySearchBox();
    Dash.verifyAudioLibraryTableHeading([
      'Recording Name',
      'File Name',
      'Audio Type',
      'Created',
    ]);
    Dash.verifyAudioLibraryRecordings();
  });

  it('Add a new Recording using Upload File', () => {
    Dash.clickAudioLibrary();
    Dash.clickAddNewRecording();
    Dash.uploadFile('preview.mp3');
    Dash.enterRecordingName('preview' + randNum.toString());
    Dash.clickRecordingSaveButton();
    Dash.verifyRecording('preview' + randNum.toString());
  });

  it('Add a new recording using Text to Speech', () => {
    Dash.clickAudioLibrary();
    Dash.clickAddNewRecording();
    Dash.clickTextToSpeech();
    Dash.enterRecordingName('TextSpeech' + randNum.toString());
    Dash.enterRecordingText('Hey How Are You');
    Dash.clickGenerateButton();
    Dash.clickRecordingSaveButton();
    Dash.verifyRecording('TextSpeech' + randNum.toString());
  });

  it('Verifies the Search functionality', () => {
    Dash.clickAudioLibrary();
    Dash.enterNameToSearch('preview' + randNum.toString());
    Dash.verifySearchResult('preview' + randNum.toString());
    Dash.clickSearchClearBtn();
    Dash.enterNameToSearch('TextSpeech' + randNum.toString());
    Dash.verifySearchResult('TextSpeech' + randNum.toString());
    Dash.clickSearchClearBtn();
  });

  it('Delete the Recording', () => {
    Dash.clickAudioLibrary();
    Dash.clickDeleteRecordingBtn('preview' + randNum.toString());
    Dash.verifyDeletedRecording('preview' + randNum.toString());
    Dash.clickDeleteRecordingBtn('TextSpeech' + randNum.toString());
    Dash.verifyDeletedRecording('TextSpeech' + randNum.toString());
  });

  it('Call feature should disable for admin if Agent Feature is Disable', () => {
    Dash.clickUserProfile();
    Dash.clickProfile();
    Dash.clickAgentFeatureDisable();
    Dash.clickSaveButton();
    Dash.verifyDialerNotVisible();
  });

  it('Call feature should enable for admin if Agent Feature is Enable', () => {
    Dash.clickUserProfile();
    Dash.clickProfile();
    Dash.clickAgentFeatureEnable();
    Dash.clickSaveButton();
    Dash.verifyDialerVisible();
  });

  it.skip('Send Email to add a New Lead', () => {
    Dash.clickUserProfile();
    Dash.clickSettingsButton();
    Dash.clickAffiliateBtn();
    Dash.enterLeadEmail('testing@email.com');
    Dash.clickLeadSubmitBtn();
    Dash.VerifyLeadSendMessage();
  });

  it.skip('Should open Contact Support Window when Cancelling Account', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.clickCancelAccount();
    Dash.chooseCancelAccountReason('Not using it Currently');
    Dash.EnterConfirmCancelAccount('DELETE');
    Dash.clickProceedWithCancel();
    Dash.clickCancelImmediately();
    Dash.verifyContactSupportWindow();
    Dash.clickDialogCloseButton();
  });

  it('download invoice and Verify', () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    Dash.downloadAndVerifyInvoice();
  });
  it('Verify chat option should be visible', () => {
    Dash.clickDashboard();
    Dash.verifyChaticon();
  });

  it('Verify Chat icon should open chat window', () => {
    Dash.clickChatIcon();
    Dash.verifyChatPopUp();
  });

  it('Verify user is able to enter chat in chat box', () => {
    Dash.enterEmailInBox('test@test.com', 'Hello');
    Dash.enterChatInBox('Hello');
    Dash.verifyMessageSent('Hello');
  });

  it('Verify chat pop up Elements', () => {
    Dash.verifyChatTitle();
    Dash.verifyAttachmentIcon();
    Dash.verifyEmojiIcon();
    Dash.verifyCloseButton();
  });

  it('When admin select status as available it should show start calling in popup', () => {
    Dash.clickStatusButton();
    Dash.selectAvailable('Available', 'FirstCampaign');
    Dash.verifyPopUpHeader('Start Calling');
    Dash.clickConfirmButton();
  });
});
