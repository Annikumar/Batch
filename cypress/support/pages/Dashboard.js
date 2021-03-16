const DashboardMenu = 'a[title="Dashboard"]';
const CallSummery = 'Calls Summary';
const Responsiveness = 'Responsiveness';
const Agents = 'Agents';
const TotalCalls = 'Total Calls';
const CallResults = 'Call Results';
const CallLocations = 'Calls Locations';
const AverageCallDuration = 'Average Call Duration';
const ButtonLoginAs = '//button[text()="Login As"]';
const StatusDropDown = 'div#navbarSupportedContent div.ss-select';
const Dialer = 'img[src*="softphone.svg"]';
const Task = 'a[href="/tasks/"]';
const UserProfile = '.profile_name';
const LoginSearchBox = 'form[class="search"] input';
const SearchedUser = 'automation testing2';
const SelectStatus = '.ss-select-group-items';
const ContinueButton = '//button[text()="Continue"]';
const DialPad = '.stg-softphone-wrapper';
const DialpadNumber9 = "//div[text()='9']";
const DialpadCallButton = '.stg-softphone-callbutton';
const CallTimerContactButton = '.stg-softphone-contact';
const AnsweringMachine = "//div[text()='Busy']";
const calander = '.calendar';
const UserProfileOptions = '.dropdown-menu.show';
const UserSettingOptions = '.profile-buttons';
const SettingsButton = "//span[text()='Settings']";
const UserSettingProfileFields = (val) => "input[name='" + val + "']";
const ProfileFirstname = "input[name='firstname']";
const ProfileLastname = "input[name='lastname']";
const ProfileEmail = "input[name='email']";
const ProfileAddress = "input[name='address']";
const ProfileCity = "input[name='city']";
const ProfileZip = "input[name='zip']";
const ProfilePhone = "input[name='phone']";
const ProfilePhone2 = "input[name='phone2']";
const ProfileState = "//span[text()='State']";
const ProfileTimezone = "//div[label[text()='Timezone']]/div";
const ProfilePasswordChangeButton = "//div[label[text()='Password']]/button";
const ProfileAgentFeaturesEnable =
  "//div[label[text()='Agent Features']]//label[text()='Enable']";
const ProfileAgentFeaturesDisable =
  "//div[label[text()='Agent Features']]//label[text()='Disable']";
const BillingSingleLineDialer = "//div[text()='Single Line Dialer']";
const BillingMultiLineDialer = "//div[text()='Multi-Line Dialer']";
const BillingUsageStatus = "//div[text()='Usage Stats']";
const BillingPaymentMethods = "//div[text()='Payment Methods']";
const BillingAddress = "//div[text()='Billing Address']";
const BillingPauseAccount = "//button[text()='Pause Account']";
const BillingCancelAccount = "//button[text()='Cancel Account']";
const BillingInvoicing = '.profile-invoices1';
const AddressBookHeading = "//label[text()='Address Book']";
const AddressBookNewContact = '.addnew';
const tableHeaderElement = '.table thead';
const VoicemailHeading = "//label[text()='Voicemail']";
const NewMailbox = '.addnew';
const VoicemailTableHeader = '.voicemail thead';
const LeadScoringHeading = "//label[text()='Lead Scoring']";
const Ticks = '.ticks';
const Ruler = '.ruler';
const title = '.titles';
const newRuleButton = "//button[text()='ADD NEW RULE']";
const leadScoreExample = '.profile-right';
const AgentScriptHeading = "//label[text()='Agent Scripts']";
const NewAgentScriptButton = '.addnew';
const AgentScriptTableHeading = '.table thead';
const AudioLibraryNewRecording =
  "//button[contains(text(),'Add New Recording')]";
const AudioLibrarySearchBox = '.search-box-wrapper .search-box';
const AudioLibraryTableHeading = '.recordings  thead';
const AudioLibraryRecordings = '.recordings  tbody';
const saveBtn = "button svg[data-icon='save']";
const cancelBtn = "//button[contains(text(),'CANCEL')]";
const ruleRemoveBtn = (rule) =>
  "//span[contains(@class,'ss-select-value-label')][text()='" +
  rule +
  "']/ancestor::div[@class='row']//img[@alt='Delete']";
const scriptText = '.ProseMirror';
const deleteBtn = (Name) =>
  "//tr[td[text()='" + Name + "']]//img[contains(@src,'delete')]";
const editBtn = (Name) =>
  "//tr[td[text()='" + Name + "']]//img[contains(@src,'edit')]";
const errorMessage = (message) =>
  "//div[@class='Toastify__toast-body'][contains(.,'" + message + "')]";
const recordingDeleteBtn = (recordingName) =>
  "//tr[td[text()='" + recordingName + "']]//img[contains(@src,'delete')]";
const recording = (recordingName) =>
  "//tr[td[contains(text(),'" + recordingName + "')]]";
const uploadFile = 'input[type="file"]';
const recordingName = '.modal-body input[name="name"]';
const recordingSaveButton =
  "//div[@class='modal-footer']//button[text()=' SAVE']";
const uploadedRecording = (fileName) =>
  "//span[contains(@class,'ss-select-value-label')][text()='" + fileName + "']";
const textToSpeech = 'button[value="generate"]';
const enterName = '.modal-body input[name="name"]';
const recordingText = 'textarea[name="text"]';
const generateButton = '//button[text()="Generate"]';
const speech = '.progress';
const searchClearBtn = '.search-box-wrapper button.x-close-icon';
const softphoneCloseBtn = '.stg-softphone-right-close';
const putSubscriptionOnHold = "//button[text()='Put Subscription On Hold']";
const keepPhoneCheckbox = '.radio_cstm';
const basePrice = '.price span:nth-of-type(1)';
const totalPrice = '.total .value';
const pauseSubscriptionBox = '.modal-content';
const pauseSubscriptionBoxCloseBtn = '.modal-content svg[data-icon="times"]';
const pauseMessage = '.alert-warning';
const plans = (planName) => "//div[div[text()='" + planName + "']]//button";
const continueBtn = '//button[contains(text(),"CONTINUE")]';
const startBtn = "//button[contains(text(),'START')]";

export default class Dashboard {
  clickDashboard() {
    cy.get(DashboardMenu).click({ force: true });
  }

  verifyDashboardElements() {
    cy.contains(CallSummery).should('be.visible');
    cy.contains(Responsiveness).should('be.visible');
    cy.contains(Agents).should('be.visible');
    cy.contains(TotalCalls).should('be.visible');
    cy.contains(CallResults).should('be.visible');
    cy.contains(CallLocations).should('be.visible');
    cy.contains(AverageCallDuration).should('be.visible');
  }

  verifyDashboardHeaderElement() {
    cy.xpath(ButtonLoginAs).should('be.visible');
    cy.get(StatusDropDown).should('be.visible');
    cy.get(Dialer).should('be.visible');
    cy.get(Task).should('be.visible');
    cy.get(UserProfile).should('be.visible');
  }

  clickLoginAs() {
    cy.xpath(ButtonLoginAs).click();
  }

  searchUser(user) {
    cy.get(LoginSearchBox).type(user);
  }

  verifySearchedUser() {
    cy.contains(SearchedUser).should('be.visible');
  }

  clickStatusButton() {
    cy.get(StatusDropDown).click();
  }

  selectAvailable(Status) {
    cy.get(SelectStatus)
      .contains(Status)
      .then((option) => {
        option[0].click();
      });
    cy.contains('FirstCampaign').click();
  }

  clickContinue() {
    cy.xpath(ContinueButton).click();
  }

  clickDialer() {
    cy.get(Dialer).click();
  }

  verifyDialPad() {
    cy.get(DialPad).should('be.visible');
  }

  dialNumber() {
    for (let i = 0; i < 10; i++) {
      cy.xpath(DialpadNumber9).click();
      cy.wait(1000);
    }
  }

  clickCallButton() {
    cy.get(DialpadCallButton).click();
  }

  verifyCallStarted() {
    cy.get(CallTimerContactButton).should('be.visible');
  }

  clickAnsweringMachine() {
    cy.xpath(AnsweringMachine).click();
  }

  clickTaskButton() {
    cy.get(Task).click();
  }

  verifyTask() {
    cy.get(calander).should('be.visible');
  }

  clickUserProfile() {
    cy.get(UserProfile).click();
  }

  verifyUserProfileOptions() {
    cy.get(UserProfileOptions).should('be.visible');
  }

  clickBilling() {
    cy.get(UserSettingOptions).contains('Billing').click();
  }

  verifyUserSettingOptions(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(UserSettingOptions).should('contain.text', element[i]);
    }
  }

  clickSettingsButton() {
    cy.xpath(SettingsButton).click();
  }

  verifyUserSettingsProfileFields(val) {
    for (let i = 0; i < val.length; i++) {
      cy.get(UserSettingProfileFields(val[i])).should('be.visible');
    }
  }

  verifyProfileState() {
    cy.xpath(ProfileState).should('be.visible');
  }

  verifyProfileTimeZone() {
    cy.xpath(ProfileTimezone).should('be.visible');
  }

  verifyProfilePasswordChangeButton() {
    cy.xpath(ProfilePasswordChangeButton).should('be.visible');
  }

  verifyProfileAgentFeaturesEnable() {
    cy.xpath(ProfileAgentFeaturesEnable).should('be.visible');
  }

  verifyBillingSingleLineDialer() {
    cy.xpath(BillingSingleLineDialer).should('be.visible');
    this.clickCloseSoftphoneBtn();
  }

  verifyBillingMultipleLineDialer() {
    cy.xpath(BillingMultiLineDialer).should('be.visible');
  }

  verifyUsageStatus() {
    cy.xpath(BillingUsageStatus).should('be.visible');
  }

  verifyPaymentMethod() {
    cy.xpath(BillingPaymentMethods).should('be.visible');
  }

  verifyBillingAddress() {
    cy.xpath(BillingAddress).should('be.visible');
  }

  verifyPauseAccount() {
    cy.xpath(BillingPauseAccount, { timeout: 30000 }).should('be.visible');
  }

  verifyCancelAccount() {
    cy.xpath(BillingCancelAccount).should('be.visible');
  }

  verifyInvoice() {
    cy.get(BillingInvoicing).should('be.visible');
  }

  verifyAddressBookingHeading() {
    cy.xpath(AddressBookHeading).should('be.visible');
  }

  verifyAddressBookNewContactButton() {
    cy.get(AddressBookNewContact).should('be.visible');
  }

  verifyAddressBookTableHeaderElement(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(tableHeaderElement).should('contain.text', element[i]);
    }
  }

  clickAddressBook() {
    cy.get(UserSettingOptions).contains('Address Book').click();
  }

  verifyVoicemailHeading() {
    cy.xpath(VoicemailHeading).should('be.visible');
  }

  verifyNewMailButton() {
    cy.get(NewMailbox).should('be.visible');
  }

  verifyVoicemailTableHeading(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(VoicemailTableHeader).should('contain.text', element[i]);
    }
  }

  clickVoicemail() {
    cy.get(UserSettingOptions).contains('Voicemail').click();
  }

  verifyLeadScoreHeading() {
    cy.xpath(LeadScoringHeading).should('be.visible');
  }

  verifyLeadScoringTable() {
    cy.get(Ticks).should('be.visible');
    cy.get(Ruler).should('be.visible');
    cy.get(title).should('be.visible');
  }

  verifyNewRulerButton() {
    cy.xpath(newRuleButton).should('be.visible');
  }

  clickNewRuleBtn() {
    cy.xpath(newRuleButton).click();
  }

  verifyLeadScoreExample() {
    cy.get(leadScoreExample).should('be.visible');
  }

  clickLeadScore() {
    cy.get(UserSettingOptions).contains('Lead Score').click();
  }

  verifyAgentScriptHeading() {
    cy.xpath(AgentScriptHeading).should('be.visible');
  }

  verifyNewAgentScriptButton() {
    cy.get(NewAgentScriptButton).should('be.visible');
  }

  clickNewAgentScriptBtn() {
    cy.get(NewAgentScriptButton).click();
  }

  verifyAgentScriptTableHeading(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(AgentScriptTableHeading).should('contain.text', element[i]);
    }
  }

  clickAgentScripts() {
    cy.get(UserSettingOptions).contains('Agent Scripts').click({ force: true });
  }

  verifyAudioLibraryNewRecording() {
    cy.xpath(AudioLibraryNewRecording).should('be.visible');
  }

  verifyAudioLibrarySearchBox() {
    cy.get(AudioLibrarySearchBox).should('be.visible');
  }

  verifyAudioLibraryTableHeading(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(AudioLibraryTableHeading).should('contain.text', element[i]);
    }
  }

  verifyAudioLibraryRecordings() {
    cy.get(AudioLibraryRecordings).should('be.visible');
  }

  clickAudioLibrary() {
    cy.get(UserSettingOptions).contains('Audio Library').click();
  }
  verifyProfileAgentFeaturesDisable() {
    cy.xpath(ProfileAgentFeaturesDisable).should('be.visible');
  }

  clickSaveBtn() {
    cy.get(saveBtn).click();
  }

  verifyAddedRule(rule) {
    cy.xpath(ruleRemoveBtn(rule)).should('exist');
  }

  clickRuleRemoveBtn(rule) {
    cy.xpath(ruleRemoveBtn(rule)).click({ force: true });
  }

  verifyRuleRemoved(rule) {
    cy.xpath(ruleRemoveBtn(rule)).should('not.exist');
  }

  enterScriptName(name) {
    cy.get(UserSettingProfileFields('name')).clear().type(name);
  }

  enterScriptText(text) {
    cy.get(scriptText).clear().type(text);
  }

  verifyAddedScript(name) {
    cy.xpath(deleteBtn(name)).should('exist');
  }

  clickDeletebtn(name) {
    cy.xpath(deleteBtn(name)).click();
  }

  verifyScriptDelete(name) {
    cy.xpath(deleteBtn(name)).click();
  }

  clickEditBtn(scriptName) {
    cy.xpath(editBtn(scriptName)).click();
  }

  verifyEditScript(name) {
    cy.xpath(deleteBtn(name)).should('exist');
  }

  verifyErrorMessage(message) {
    cy.xpath(errorMessage(message)).should('be.visible');
  }

  clickCancelBtn() {
    cy.xpath(cancelBtn).click();
  }

  clickAddNewContact() {
    cy.get(AddressBookNewContact).click();
  }

  enterContactName(name) {
    cy.get(UserSettingProfileFields('name')).clear().type(name);
  }

  enterPhoneNumber(phone) {
    cy.get(UserSettingProfileFields('phonenumber')).clear().type(phone);
  }

  enterDescription(description) {
    cy.get(UserSettingProfileFields('description')).clear().type(description);
  }

  verifyAddedContact(contactName) {
    cy.xpath(deleteBtn(contactName)).should('exist');
  }

  verifyContactDelete(contactName) {
    cy.xpath(deleteBtn(contactName)).should('not.exist');
  }

  enterNameToSearch(name) {
    cy.get(AudioLibrarySearchBox).type(name);
  }

  verifySearchResult(recordingName) {
    cy.xpath(recording(recordingName)).should('be.visible');
  }

  clickDeleteRecordingBtn(recordingName) {
    cy.xpath(recordingDeleteBtn(recordingName)).click();
  }

  verifyDeletedRecording(recordingName) {
    cy.xpath(recordingDeleteBtn(recordingName)).should('not.exist');
  }

  clickAddNewRecording() {
    cy.xpath(AudioLibraryNewRecording).click();
  }

  uploadFile(file) {
    cy.get(uploadFile).attachFile(file);
  }

  enterRecordingName(recording) {
    cy.get(recordingName).clear().type(recording);
  }

  clickRecordingSaveButton() {
    cy.xpath(recordingSaveButton).click();
    cy.wait(2000);
  }

  verifyRecording(fileName) {
    cy.xpath(recordingDeleteBtn(fileName)).should('be.visible');
  }

  clickTextToSpeech() {
    cy.get(textToSpeech).click();
  }

  enterRecordingName(recording) {
    cy.get(enterName).clear().type(recording);
  }

  enterRecordingText(text) {
    cy.get(recordingText).type(text);
  }

  clickGenerateButton() {
    cy.xpath(generateButton).click();
    cy.get(speech, { timeout: 7000 }).should('be.visible');
  }

  clickSearchClearBtn() {
    cy.get(searchClearBtn).click();
  }

  clickPauseAccountBtn() {
    cy.xpath(BillingPauseAccount).click();
  }

  clickCloseSoftphoneBtn() {
    cy.get('body').then(($body) => {
      if ($body.find(softphoneCloseBtn).length) {
        cy.get(softphoneCloseBtn).click();
      }
    });
  }

  clickPutSubscriptionOnHold() {
    cy.xpath(putSubscriptionOnHold).click();
  }

  clickKeepPhoneCheckbox() {
    cy.get(keepPhoneCheckbox).click();
  }

  compareBaseAndTotalPrice(condition) {
    let price;
    let total;
    cy.get(pauseSubscriptionBox).then(($body) => {
      price = $body.find(basePrice).text();
      total = $body.find(totalPrice).text();
      price = price.substring(1);
      total = total.substring(1);
      if (condition === 'keep phone') {
        expect(parseInt(price)).to.lessThan(parseInt(total));
      }
      if (condition === 'dont keep phone') {
        expect(price).to.equal(total);
      }
    });
  }

  clickClosePauseSubscriptionBox() {
    cy.get(pauseSubscriptionBoxCloseBtn).click();
  }

  verifyAccountPauseMessage() {
    cy.get(pauseMessage, { timeout: 20000 }).should('be.visible');
  }

  choosePlan(planName) {
    cy.xpath(plans(planName)).click();
  }

  clickContinueBtn() {
    cy.xpath(continueBtn).click();
  }

  clickStartBtn() {
    cy.xpath(startBtn, { timeout: 20000 }).should('be.visible');
    cy.xpath(startBtn, { timeout: 20000 }).click();
  }
}
