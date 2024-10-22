import { ignoreSpeedTestPopup } from '../Utils';

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
const SearchedUser = 'AUTOMATION';
const SelectStatus = '.ss-select-group-items';
const ContinueButton = '//button[text()="Continue"]';
const DialPad = '.stg-softphone-wrapper';
const DialpadNumber9 = "//div[text()='9']";
const DialpadCallButton = '.stg-softphone-callbutton';
const CallTimerContactButton = '.stg-softphone-contact';
const AnsweringMachine = "//div[text()='Busy']";
const calander = '.calendar';
const todayButton = 'button[value="today"]';
const pastButton = 'button[value="past"]';
const futureButton = 'button[value="future"]';
const UserProfileOptions = '.dropdown-menu.show';
const UserSettingOptions = '.profile-buttons';
const SettingsButton = 'div[href*="settings"]';
const profile = 'div[href*="profile"]';
const UserSettingProfileFields = (val) => "input[name='" + val + "']";
const billing = 'div[href*="billing"]';
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
const BillingAddress = "//div//span[text()='Billing Info']";
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
const addNewCard = "//button[contains(text(),'Add New Card')]";
const newRuleButton = "//button[text()='ADD NEW RULE']";
const leadScoreExample = '.profile-right';
const AgentScriptHeading = "//label[text()='Agent Scripts']";
const NewAgentScriptButton = '.addnew';
const AgentScriptTableHeading = '.table thead';
const AudioLibraryNewRecording =
  "//button[contains(text(),'Add New Recording')]";
const AudioLibrarySearchBox = '.search-box-wrapper .search-box';
const searchBox = '.search-box';
const AudioLibraryTableHeading = '.recordings  thead';
const AudioLibraryRecordings = '.recordings  tbody';
const saveBtn = "button svg[data-icon='save']";
const cancelBtn = "//button[contains(text(),'CANCEL')]";
const ruleRemoveBtn = (rule) =>
  "//span[contains(@class,'ss-select-value-label')][text()='" +
  rule +
  "']/ancestor::div[contains(@class,'lead__score-middle')]//img[@alt='Delete']";
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
const save = "//button[text()=' Save']";
const affiliate = "//button[text()='Affiliate']";
const leadEmail = '#lead_email';
const leadSubmitBtn = 'input[name="commit"][value="Submit"]';
const sendLeadMessage = '//strong[text()="Thank you! The lead was submitted."]';
const iframe = 'iframe[title="Affiliate"]';
const agentSlider = (planName) =>
  "//div[div[text()='" + planName + "']]//div[@class='rc-slider-handle']";
const cardNumber = 'input[name="cardnumber"]';
const expiryDate = 'input[name="exp-date"]';
const cvc = 'input[name="cvc"]';
const countires = '.modal-body .ss-select-value';
const zip = 'input[name="zip"]';
const cards = '.cardtype';
const deleteCardBtn = (last4Digit) =>
  "//tr[td[@class='cardtype' and contains(.,'" +
  last4Digit +
  "')]]//*[name()='svg'][@data-icon='trash-alt']";
const cardDefaultBtn = (last4Digit) =>
  "//tr[td[@class='cardtype' and contains(.,'" +
  last4Digit +
  "')]]//*[name()='svg'][@data-icon='star']";
const cardDeleteToast =
  "//div[contains(@class,'mytoast') and text()='The card has been successfully removed']";
const chaticon = 'div[id="fc_frame"]';
const chatWindow = '.fc-conversation-view';
const enterChat = '#app-conversation-editor p';
const chatBoxInputEmail = '.email-input input';
const chatBoxEnterText = '.user-comment';
const chatBoxSendMessage = '.send-message';
const cancelAccountReason = (reason) =>
  "//div[@class='radio'][contains(.,'" + reason + "')]";
const confirmDelete = '.security input';
const dialogCloseBtn = '.modal-body svg[data-icon="times"]';
const popUpHeader = '.modal-header';
const taskLeftArrow = '.daypicker__month-form svg:nth-of-type(1)';
const DashboardCalender = '.fakeinput__overflow';
const CalenderMonth = '.daypicker__month-select';
const filterStartDate = "(//div[@class='date-input-field'])[1]";
const filterEndDate = "(//div[@class='date-input-field'])[2]";
const filterSelectDate = (date) =>
  "//div[@class='DayPicker-Body']//div[text()='" + date + "']";
const loginAsPlusIcon = ".dropdown-menu svg[data-icon='plus']";
const Agent = (user) => "//span[text()='" + user + "']";
const dashboardName = '.name';
const backToAdmin = '.nav-item a[href*="logout"]';
const homeButton = '.breadcrumb-item .active';
const radioBtn = (btnName) =>
  `//label[text()="${btnName}"]//span[@class="checkmark"]`;
const addNewBtn = '//button//div[contains(text(),"Add New")]';
const refreshBtn = 'span[title="Refresh"]';
const leadItems = '.lead-item .lead-item__label';
const leadSheetName = '.lead-edit__header .custom-input__text';
const leadSheetNameField = '.lead-edit__header .custom-input__text input';
const saveFieldBtn = '.custom-input__save';
const leadItemsName = (itemName) =>
  `//div[@class="lead-edit__list"]//span[contains(@class,"custom-input__text")][text()="${itemName}"]`;
const leadSaveBtn = 'button[type="submit"]';
const leadItemsNameField = '.lead-edit__list .lead-edit__custom-input input';
const leadSheetDeleteBtn = (sheetName) =>
  `//tr[td[text()="${sheetName}"]]//img[contains(@src,"delete")]`;
const messageIcon = '.position-relative';
const chatBox = '.chat__container';
const chatCloseButton = '.chat__close';
const receiverDropdown = '.chat__container .ss-select-control';
const usersName = '.ss-select-option';
const messageField = '.chat__input textarea';
const chatName = '.chat__conversation__top-name';
const messageText = '.chat__message__text';
const emojiIcon = '.emoji-icon';
const emojiWindow = '.emoji-mart';
const chatSearchBox = '.chat__container .search-box';
const emojiSearchBox = '.emoji-mart-search input';
const searchedEmojiList = (emojiName) =>
  'div[data-name="Search"] + .emoji-mart-category-list li button[aria-label*="' +
  emojiName +
  '"]';
const completedCheckbox = `//label[@class="radio_cstm" and text()="Completed"]//span[@class="checkmark"]`;
const taskAddNewBtn = '//button[span[text()="ADD NEW"]]';
const calendarEventTypesBox = '.calendar-event-types';
const calendarMonthPicker = '.calendar-month-selector';
const addEventTypeButton = '.calendar-event-types span[role="button"]';
const deleteEventTypeBtn = (eventName) =>
  `//div[span[contains(@class,"calendar-event-input") and text()="${eventName}"]]/following-sibling::div//*[name()="svg"][2]`;
const eventTypeNameField = 'input[placeholder="Event Name"]';
const saveEventTypeNameField = '.calendar-event-controls svg:nth-of-type(1)';
const eventTypeNames = '.calendar-event-input';
const contactsDropdown =
  '//div[@class="modal-content"]//span[@class="ss-select-placeholder"]/parent::div[contains(@class,"ss-select-control")]';
const contactsSearch = '.modal-content .search-box';
const contactsSearchResult = '.ss-select-option';
const descriptionField = 'input[name="description"]';
const eventTitle = 'input[name="title"]';
const eventThreeDotMenuBtn = (contactName) =>
  `//a[text()="${contactName}"]/ancestor::td[contains(@class,"contactfield")]/following-sibling::td[contains(@class,"dropdownfield")]`;
const dropdownItems = '.dropdown-item';
const eventStatusCheckbox = (contactName, eventStatus) =>
  `//a[text()="${contactName}"]/ancestor::td[contains(@class,"contactfield")]/parent::tr//img[@alt='${eventStatus}']`;
const eventTimeDropdown = `//div[label[text()="Event Time"]]//div[contains(@class,"ss-select-control")]`;
const hardwareTestButton = '.main_sec button';
const callGraph = '.flex-fill .recharts-responsive-container';
const callGraphCloseBtn = 'button img[src*="close"]';
const modalTitle = '.modal-title';
const micTestStartBtn = '.recorder-buttons svg';
const statusTimer = '.agent__presence-time';

export default class Dashboard {
  clickDashboard() {
    cy.get(DashboardMenu).click({ force: true });
  }

  clickMessageIcon() {
    cy.get(messageIcon).click();
  }

  verifyChatBox() {
    cy.get(chatBox).should('be.visible');
  }

  verifyChatBoxClose() {
    cy.get(chatBox).should('not.exist');
  }

  clickStartChatButton() {
    cy.get('button').then((button) => {
      for (let i = 0; i < button.length; i++) {
        if (button[i].textContent.trim() === 'Start chat') {
          button[i].click();
          break;
        }
      }
    });
  }

  enterMessage(message) {
    cy.get(messageField).type(message, { force: true });
  }

  enterMessageMoreThan160Words(message) {
    for (let i = 0; i < 165; i++) {
      cy.get(messageField).type(message);
    }
  }

  verifyMessageLimit() {
    cy.get(messageField).then((message) => {
      expect(message.text().split('').length).to.equal(160);
    });
  }

  enterUserToSearch(name) {
    cy.get(chatSearchBox).type(name);
  }

  verifySearchedEmoji(name) {
    cy.get(searchedEmojiList(name)).should('be.visible');
  }

  clickSendMessageButton() {
    cy.get('button').then((button) => {
      for (let i = 0; i < button.length; i++) {
        if (button[i].textContent.trim() === 'Send') {
          cy.get(button[i]).click({ force: true });
          break;
        }
      }
    });
  }

  enterEmojiName(name) {
    cy.get(emojiSearchBox).type(name, { delay: 200 });
  }

  VerifySendMessageButton(condition) {
    cy.get('button').then((button) => {
      for (let i = 0; i < button.length; i++) {
        if (button[i].textContent.trim() === 'Send') {
          cy.get(button[i]).should(condition);
          break;
        }
      }
    });
  }

  clickChatCloseButton() {
    cy.get(chatCloseButton).click();
  }

  verifyMessageText(message) {
    cy.get(messageText).should('contain.text', message);
  }

  selectChat(name) {
    cy.get(chatName, { timeout: 30000 }).then((chat) => {
      for (let i = 0; i < chat.length; i++) {
        if (chat[i].textContent.trim() === name) {
          chat[i].click();
          break;
        }
      }
    });
  }

  verifySearchedChatName(name) {
    cy.get(chatName).should('contain.text', name);
  }

  selectUserToSendMessage(name) {
    cy.get(receiverDropdown).click();
    cy.get(usersName).then((users) => {
      for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < users.length; j++) {
          if (users[j].textContent.trim() === name[i]) {
            users[j].click();
            break;
          }
        }
      }
    });
    // cy.get(receiverDropdown).click();
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
    cy.get(Dialer).should('exist');
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
    cy.get('.roletitle').then((el) => {
      expect(el.text().toLowerCase()).to.contain(SearchedUser.toLowerCase());
    });
  }

  verifyRefreshBtn() {
    cy.get(refreshBtn).should('be.visible');
  }

  clickSaveFieldBtn() {
    cy.get(saveFieldBtn).click();
  }

  clickStatusButton() {
    cy.get(StatusDropDown).click();
  }

  clickLeadItemsNameField(name) {
    cy.xpath(leadItemsName(name)).first().click();
  }

  enterLeadItemsName(name) {
    cy.get(leadItemsNameField).first().type(name);
  }

  clickLeadSaveBtn() {
    cy.get(leadSaveBtn).click({ force: true });
  }

  clickAddNewLeadSheet() {
    cy.xpath(addNewBtn).click();
  }

  selectAvailable(Status, campaign) {
    cy.get(SelectStatus)
      .contains(Status)
      .then((option) => {
        option[0].click();
      });
    // cy.contains('FirstCampaign').click();
    cy.get('.modal-body .ss-select').click();
    cy.get('.ss-select-option', { timeout: 5000 }).then((el) => {
      for (let i = 0; i < el.length; i++) {
        if (el[i].textContent.trim() === campaign) {
          cy.get(el[i]).click();
          break;
        }
      }
    });
  }

  verifyLeadSheetTableHeadings(heading) {
    for (let i = 0; i < heading.length; i++) {
      cy.get(tableHeaderElement).should('contain.text', heading[i]);
    }
  }

  clickConfirmButton() {
    cy.get('.modal-footer button').click();
  }

  verifyAddNewLeadSheetBtn() {
    cy.xpath(addNewBtn).should('be.visible');
  }

  clickContinue() {
    cy.xpath(ContinueButton).click();
  }

  VerifyRadioBtn(btnName) {
    for (let i = 0; i < btnName.length; i++) {
      cy.xpath(radioBtn(btnName[i])).should('be.visible');
    }
  }

  verifysearchBox() {
    cy.get(searchBox).should('be.visible');
  }

  clickDialer() {
    cy.get(Dialer).click();
  }

  verifyDialPad() {
    cy.get(DialPad, { timeout: 30000 }).should('exist');
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

  verifyAddedLeadSheet(sheetName) {
    cy.xpath(leadSheetDeleteBtn(sheetName)).should('be.visible');
  }

  clickDeleteLeadSheet(sheetName) {
    cy.xpath(leadSheetDeleteBtn(sheetName)).click();
  }

  verifyDeletedLeadSheet(sheetName) {
    cy.xpath(leadSheetDeleteBtn(sheetName)).should('not.exist');
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

  selectLeadItem(leadItemName) {
    cy.get(leadItems).then((lead) => {
      for (let i = 0; i < lead.length; i++) {
        if (lead[i].textContent.trim() === leadItemName) {
          cy.get(lead[i]).click();
          break;
        }
      }
    });
  }

  verifyUserProfileOptions() {
    cy.get(UserProfileOptions).should('be.visible');
  }

  clickBilling() {
    cy.get(billing).click();
  }

  clickLeadSheetName() {
    cy.get(leadSheetName).click();
  }

  enterLeadSheetName(name) {
    cy.get(leadSheetNameField).clear().type(name);
  }

  verifyUserSettingOptions(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(UserSettingOptions).should('contain.text', element[i]);
    }
  }

  clickSettingsButton() {
    cy.get(SettingsButton).first().click();
  }

  clickProfile() {
    cy.get(profile).click();
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
    cy.xpath(BillingPauseAccount, { timeout: 60000 }).should('be.visible');
  }

  verifyCancelAccount() {
    cy.xpath(BillingCancelAccount).should('be.visible');
  }

  verifyInvoice() {
    cy.get(BillingInvoicing, { timeout: 60000 }).should('be.visible');
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

  clickLeadSheets() {
    cy.get(UserSettingOptions).contains('Lead Sheets').click({ force: true });
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
    cy.xpath(newRuleButton).scrollIntoView().click();
  }

  verifyLeadScoreExample() {
    cy.get(leadScoreExample).should('be.visible');
  }

  clickLeadScore() {
    cy.get(UserSettingOptions).contains('Lead Score').click();
    this.clickCloseSoftphoneBtn();
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
    cy.wait(1000);
    cy.get('body').then(($body) => {
      if ($body.find(saveBtn).length) {
        cy.get(saveBtn).click();
      }
    });
  }

  verifyAddedRule(rule) {
    cy.xpath(ruleRemoveBtn(rule)).should('exist');
  }

  clickRuleRemoveBtn(rule) {
    cy.xpath(ruleRemoveBtn(rule))
      .scrollIntoView()
      .click({ force: true, multiple: true });
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
    cy.xpath(deleteBtn(name)).should('not.exist');
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
    cy.get(AudioLibrarySearchBox).clear().type(name);
  }

  verifySearchResult(recordingName) {
    cy.xpath(recording(recordingName)).should('be.visible');
  }

  clickDeleteRecordingBtn(recordingName) {
    cy.xpath(recordingDeleteBtn(recordingName)).click({ force: true });
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
        cy.get(softphoneCloseBtn).click({ force: true });
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
    cy.reload();
    ignoreSpeedTestPopup();
    this.clickStartBtn();
    cy.xpath(plans(planName)).click();
  }

  upgradePlan(planName) {
    cy.reload();
    ignoreSpeedTestPopup();
    // this.clickStartBtn();
    cy.get('.rc-slider-step').first().click();
    cy.xpath(plans(planName)).click();
  }

  clickContinueBtn() {
    cy.xpath(continueBtn).click();
  }

  clickStartBtn() {
    cy.xpath(startBtn, { timeout: 20000 }).should('be.visible');
    cy.xpath(startBtn, { timeout: 20000 }).click();
  }
  clickAgentFeatureDisable() {
    cy.xpath(ProfileAgentFeaturesDisable).click();
  }
  verifyDialerNotVisible() {
    cy.get(Dialer).should('not.exist');
  }

  clickAgentFeatureEnable() {
    cy.xpath(ProfileAgentFeaturesEnable).click();
  }

  verifyDialerVisible() {
    cy.wait(5000);
    cy.get(Dialer).should('be.visible');
  }

  clickSaveButton() {
    cy.xpath(save).click();
    cy.wait(1000);
  }

  clickAffiliateBtn() {
    cy.xpath(affiliate).click();
  }
  enterLeadEmail(email) {
    const iframe = cy
      .get('iframe[title="Affiliate"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
    iframe.find('input[name="lead[email]"]').type(email);
    // const $iframe = cy
    //   .get(iframe)
    //   .its('0.contentDocument.body')
    //   .should('be.visible')
    //   .then(cy.wrap);
    // // $iframe.get(leadEmail).should('be.visible');
    // cy.log($iframe[1]);
    // for (let i = 0; i < $iframe.length; i++) {
    //   cy.log($iframe[i]);
    // }

    // $iframe.find('input', { timeout: 10000 }).should('be.visible').type(email);
    // cy.get(iframe).then(($iframe) => {
    //   const $body = $iframe.contents().find('body');
    //   let Email = cy.wrap($body);
    //   Email.find(leadEmail).type(email);
    // });
  }

  clickLeadSubmitBtn() {
    cy.get(iframe).then(($iframe) => {
      const $body = $iframe.contents().find('body');
      let Submit = cy.wrap($body);
      for (let i = 0; i < Submit.length; i++) {
        cy.log(Submit[i]);
      }
      cy.log(Submit);
      Submit.find(leadSubmitBtn).click();
    });
  }

  VerifyLeadSendMessage() {
    cy.get(iframe).then(($iframe) => {
      const $body = $iframe.contents().find('body');
      let Message = cy.wrap($body);
      Message.find(sendLeadMessage).should('be.visible');
    });
  }

  enterCardName(name) {
    cy.get(enterName).type(name);
  }

  Iframe() {
    return cy
      .get('iframe[title*="Secure card number"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
  }

  enterCardNumber(no) {
    this.Iframe().find(cardNumber).type(no);
  }

  enterExpiryDate(date) {
    const iframe = cy
      .get('iframe[title*="Secure expiration date"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
    iframe.find(expiryDate).type(date);
  }

  enterCVC(cvv) {
    const iframe = cy
      .get('iframe[title*="Secure CVC"]')
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
    iframe.find(cvc).type(cvv);
  }

  clickAddNewCard() {
    cy.xpath(addNewCard).click();
  }

  chooseCountry(country) {
    cy.get(countires).click();
    cy.get('.ss-select-option').then((el) => {
      for (let i = 0; i < el.length; i++) {
        if (el[i].textContent.trim() === country) {
          cy.get(el[i]).scrollIntoView().click({ force: true });
          break;
        }
      }
    });
  }

  enterBillingZip(billingZip) {
    cy.get(zip).type(billingZip);
  }

  verifyAddedCard(last4digit) {
    cy.get(cards).should('contain.text', last4digit);
  }

  clickDeleteCardBtn(last4Digit) {
    cy.xpath(deleteCardBtn(last4Digit)).click();
  }

  clickCardDefaultBtn(last4Digit) {
    cy.xpath(cardDefaultBtn(last4Digit)).click();
  }

  verifyCardDefault(last4Digit) {
    cy.xpath(deleteCardBtn(last4Digit)).should('not.exist');
  }

  verifyCardDelete() {
    cy.xpath(cardDeleteToast).should('be.visible');
  }

  downloadAndVerifyInvoice() {
    cy.get('.profile-invoices1 table tr:nth-child(1) a', {
      timeout: 60000,
    }).then((link) => {
      const href = link[0].getAttribute('href');
      let invoiceName;
      cy.get('.profile-invoices1 table tr:nth-child(1) td:nth-of-type(2)').then(
        (el) => {
          invoiceName = el.text().trim();
          cy.downloadFile(
            href,
            'cypress/fixtures/Download',
            'Invoice-' + invoiceName + '.pdf'
          );
          cy.task('getPdfContent', 'Invoice-' + invoiceName + '.pdf').then(
            (content) => {
              expect(content.text).to.contains(invoiceName);
            }
          );
        }
      );
    });
  }
  verifyChaticon() {
    cy.get(chaticon).should('be.visible');
  }

  // clickChatIcon() {
  //   cy.get(chaticon).click({ force: true });
  //   cy.wait(3000);
  // }

  verifyChatWindow() {
    cy.get(chatWindow).should('be.visible');
  }

  getIframeDocument = () => {
    return cy
      .get('iframe[id="fc_widget"]')
      .its('0.contentDocument')
      .should('exist');
  };
  getIframeBody = () => {
    return this.getIframeDocument()
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap);
  };

  clickChatIcon() {
    this.getIframeBody().find('.chat-content').click();
  }

  verifyChatPopUp() {
    this.getIframeBody().find('.fc-conversation-view').should('be.visible');
  }

  verifyChatTitle() {
    this.getIframeBody()
      .find('.channel-title')
      .should('contain.text', 'Customer Support');
  }

  verifyAttachmentIcon() {
    this.getIframeBody().find('.icon-ic_attachment').should('be.visible');
  }

  verifyEmojiIcon() {
    this.getIframeBody().find('.icon-ic_smiley').should('be.visible');
  }

  verifyCloseButton() {
    this.getIframeBody().find('.icon-ic_close').should('be.visible');
  }

  enterChatInBox(text) {
    this.getIframeBody().find(enterChat).type(text).type('{enter}');
  }

  enterEmailInBox(email, text) {
    cy.wait(2000);
    this.getIframeBody()
      .find('.fc-conversation-view')
      .then(($el) => {
        if ($el.find('.btn-csat-no').length) {
          this.getIframeBody().find('.btn-csat-yes').click({ force: true });
          // this.getIframeBody()
          //   .xpath('//span[@role="button"][text()="No"]')
          //   .click();
        }
      });
    this.getIframeBody()
      .find('.fc-conversation-view')
      .then((el) => {
        if (el.find(chatBoxInputEmail).length) {
          this.enterEmail(email);
          this.enterTextInChatBox(text);
          this.clickSendChat();
        }
      });
  }

  enterEmail(email) {
    this.getIframeBody().find(chatBoxInputEmail).clear().type(email);
  }

  enterTextInChatBox(text) {
    this.getIframeBody().find(chatBoxEnterText).type(text);
  }

  clickSendChat() {
    this.getIframeBody().find(chatBoxSendMessage).click();
  }

  verifyMessageSent(text) {
    this.getIframeBody().find(chatWindow).should('contain.text', text);
  }

  clickCancelAccount() {
    cy.xpath(BillingCancelAccount).click({ force: true });
  }

  chooseCancelAccountReason(reason) {
    cy.xpath(cancelAccountReason(reason)).click();
  }

  EnterConfirmCancelAccount(DELETE) {
    cy.get(confirmDelete).type(DELETE);
  }

  clickProceedWithCancel() {
    cy.get('button').then((button) => {
      for (let i = 0; i < button.length; i++) {
        if (button[i].textContent.trim() === 'Proceed With Cancellation') {
          cy.get(button[i]).click();
          break;
        }
      }
    });
  }

  clickCancelImmediately() {
    cy.get('button').then((button) => {
      for (let i = 0; i < button.length; i++) {
        if (button[i].textContent.trim() === 'Cancel Immediately') {
          cy.get(button[i]).click();
          break;
        }
      }
    });
  }

  verifyContactSupportWindow() {
    cy.get('.modal-content p').should(
      'have.text',
      'Your cancellation request has been successfully submitted. We will reach out to you within 24-48 hours for an update.'
    );
  }

  clickDialogCloseButton() {
    cy.get(dialogCloseBtn).click();
  }

  verifyPopUpHeader(heading) {
    cy.get(popUpHeader).should('contain.text', heading);
  }

  clickTaskLeftArrow() {
    cy.get(taskLeftArrow).click({ force: true });
    cy.wait(1000);
  }

  getLastMonth() {
    var month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const today = new Date();
    const lastMonth = month[today.getMonth() - 1];
    return lastMonth;
  }

  verifyMonth(month) {
    cy.get(CalenderMonth).should('contain.text', month);
  }

  clickDashboardCalendar() {
    cy.get(DashboardCalender).click();
  }

  EnterFilterStartAndEndDate(date, val) {
    cy.xpath(filterSelectDate(date)).click().should('have.class', val);
  }

  clickLoginAsPlusIcon() {
    cy.get(loginAsPlusIcon).click();
  }

  clickAgentOrSupervisor(user) {
    cy.xpath(Agent(user)).click();
  }

  verifyUserDashboardName(user) {
    cy.get(dashboardName, { timeout: 10000 }).should('have.text', user);
  }

  clickBackToAdmin() {
    cy.get(backToAdmin).click();
  }

  clickHomeButton() {
    cy.get(homeButton).click();
  }
  verifyDashboardCalandar() {
    cy.get(DashboardCalender).should('be.visible');
  }

  clickEmojiIcon() {
    cy.get(emojiIcon).click();
  }

  verifyEmojiWindow() {
    cy.get(emojiWindow).should('be.visible');
  }

  verifyTodayButton() {
    cy.get(todayButton).should('be.visible');
  }

  verifyTodayButtonIsSelected() {
    cy.get(todayButton + '[class*="btn-primary"]').should('be.visible');
  }

  verifyPastButtonNotSelected() {
    cy.get(pastButton + '[class*="btn-primary"]').should('not.exist');
  }

  verifyFutureButtonNotSelected() {
    cy.get(futureButton + '[class*="btn-primary"]').should('not.exist');
  }

  verifyPastButton() {
    cy.get(pastButton).should('be.visible');
  }

  verifyFutureButton() {
    cy.get(futureButton).should('be.visible');
  }

  clickTodayButton() {
    cy.get(todayButton).click();
  }

  clickPastButton() {
    cy.get(pastButton).click();
  }

  clickFutureButton() {
    cy.get(futureButton).click();
  }

  verifyCompletedCheckbox() {
    cy.xpath(completedCheckbox).should('be.visible');
  }

  clickCompletedCheckbox() {
    cy.xpath(completedCheckbox).click();
  }

  verifyTaskAddNewButton() {
    cy.xpath(taskAddNewBtn).should('be.visible');
  }

  clickTaskAddNewButton() {
    cy.xpath(taskAddNewBtn).click();
  }

  verifyCalendarEventTypesBox() {
    cy.get(calendarEventTypesBox).should('be.visible');
  }

  verifyCalendarMonthPickerBox() {
    cy.get(calendarMonthPicker).should('be.visible');
  }

  verifyAddEventTypeButton() {
    cy.get(addEventTypeButton).should('be.visible');
  }

  clickAddEventTypeButton() {
    cy.get(addEventTypeButton).click();
  }

  clickDeleteEventTypeBtn(name) {
    cy.xpath(deleteEventTypeBtn(name)).click();
  }

  typeEventTypeName(name) {
    cy.get(eventTypeNameField).type(name);
  }

  clickSaveEventTypeNameField() {
    cy.get(saveEventTypeNameField).click();
  }

  verifyAddedEventTypeName(name) {
    cy.get(eventTypeNames).should('contain.text', name);
  }

  verifyDeletedEventTypeName(name) {
    cy.get(eventTypeNames).should('not.contain.text', name);
  }

  clickEventSaveButton() {
    cy.get('button').then((btn) => {
      for (let i = 0; i < btn.length; i++) {
        if (btn[i].textContent.trim() === 'Save') {
          cy.get(btn[i]).click();
          break;
        }
      }
    });
  }

  clickEventThreeDotMenuBtn(name) {
    cy.xpath(eventThreeDotMenuBtn(name)).first().click();
  }

  verifyCompletedEventDisappear(name) {
    cy.xpath(eventThreeDotMenuBtn(name)).should('not.exist');
  }

  selectDropdownItemToClick(menu) {
    cy.get(dropdownItems).then((items) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.trim() === menu) {
          cy.get(items[i]).click();
          break;
        }
      }
    });
  }

  enterEventDescription(description) {
    cy.get(descriptionField).type(description);
  }

  chooseContactToAddEvent(contact) {
    cy.xpath(contactsDropdown).first().click();
    cy.get(contactsSearch).type(contact);
    cy.wait(1000);
    cy.get(contactsSearchResult).then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].textContent.trim() === contact) {
          cy.get(result[i]).click();
          break;
        }
      }
    });
  }

  clickEventStatusCheckbox(contactName, eventStatus) {
    cy.xpath(eventStatusCheckbox(contactName, eventStatus)).then((checkBox) => {
      for (let i = 0; i < checkBox.length; i++) {
        cy.get(checkBox[i]).click();
      }
    });
  }

  enterEventTitle(title) {
    cy.get(eventTitle).type(title);
  }

  selectEventTime() {
    cy.xpath(eventTimeDropdown).click();
    cy.get('.ss-select-option').then((opt) => {
      for (let i = 0; i < opt.length; i++) {
        if (opt[i].textContent.trim() === '11:30 PM') {
          opt[i].click();
          break;
        }
      }
    });
  }

  clickHardwareTestButton() {
    cy.get(hardwareTestButton).should('be.visible').click();
  }

  verifyCallGraph() {
    cy.get(callGraph).should('have.length', 2).should('be.visible');
  }

  verifyButtonsVisible(buttonName) {
    cy.get('button').then((Btn) => {
      for (let i = 0; i < Btn.length; i++) {
        if (Btn[i].textContent.trim() === buttonName) {
          cy.get(Btn[i], { timeout: 60000 }).should('be.visible');
        }
      }
    });
  }

  clickCallGraphCloseBtn() {
    cy.get(callGraphCloseBtn).first().click();
  }

  clickOnButton(buttonName) {
    cy.get('button').then((Btn) => {
      for (let i = 0; i < Btn.length; i++) {
        if (Btn[i].textContent.trim() === buttonName) {
          cy.get(Btn[i]).click();
          break;
        }
      }
    });
  }

  verifyModalTitle(title) {
    cy.get(modalTitle).should('have.text', title);
  }

  verifySpeedTestCompletion() {
    cy.xpath('//button[contains(text(),"Done")]', { timeout: 60000 }).should(
      'be.visible'
    );
  }

  clickMicTestStartButton() {
    cy.get(micTestStartBtn).click();
  }

  verifyMicTestCompletion() {
    cy.xpath('//button[contains(text(),"Done")]', { timeout: 60000 }).should(
      'be.enabled'
    );
  }

  verifyStatusTimerVisible() {
    cy.get(statusTimer).should('contain.text', '0:00');
  }
}
