import promisify from 'cypress-promise';

const phoneNumMenu = 'a[title="Phone System"]';
const buyDidbtn = '//button[contains(text(),"BUY DID")]';
const stateDrpdwn =
  '//div[@class="modal-body"]//div[contains(@class,"ss-select")]//span[contains(text(),"Select state")]';
const searchBtn = '.modal-body button svg[data-icon="search"]';
const firstNum = '.number';
const firstNumberChkBx =
  '//div[@class="modal-body"]//div[@class="numbers"]/div[1]//input';
const orderNow = '.btn svg[data-icon="shopping-cart"]';
// const orderNow = '//button[contains(text(),"Order Now")]';
const dropdownOptions = '.ss-select-group-items';
const searchToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Search started")]';
const closeBtn = '//button[contains(text(),"Close")]';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Number deleted")]';
const assignToDrpdwn = '//div[span[contains(text(),"User extension")]]';
const ivrAttendent = 'a[title="IVR/Auto Attendant"]';
const newIvr = '//button[text()=" NEW IVR"]';
const Name = 'input[name="name"]';
const description = 'input[name="description"]';
const clickselectCampaign = '//span[text()="Select Campaign"]';
const selectFromDropdown = '.ss-select-dropdown';
const phoneNumber = '//span[text()="Select Extension"]';
const newWelcomePrompt = '//button[text()=" ADD NEW"]';
const uploadedWelcomePrompt = (fileName) =>
  "//span[contains(@class,'ss-select-value-label')][text()='" + fileName + "']";
const recordingName = '.modal-body input[name="name"]';
const textToSpeech = 'button[value="generate"]';
const recordingText = 'textarea[name="text"]';
const generateButton = '//button[text()="Generate"]';
const speech = '.progress';
const recordingSaveButton =
  "//div[@class='modal-footer']//button[text()=' SAVE']";
const ivrSaveButton = ".modal_btn button[class*='save']";
const saved = "//div[text()='Saved']";
const deleteIvr = (x) =>
  "//tr[contains(.,'" + x + "')]//td//img[contains(@src,'delete')]";
const DeletedIVR = "//div[text()='IVR deleted']";
const inboundCallMenu = 'a[title="Inbound Calls"]';
const searchBox = '.search-box';
const newQueueBtn = '//button[contains(text(),"NEW QUEUE")]';
const tableHeader = '.table thead';
const selectDropdown = (dropdownName) =>
  "//div[contains(@class,ss-select-control)]//span[text()='" +
  dropdownName +
  "']";
const ringStrategyRadioBtn = '.radio_cstm';
const radioBtn = '.radio_cstm';
const wrapupTimeout =
  '//div[div[label[text()="Wrapup Timeout"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const ringTimeDuration =
  '//div[div[label[text()="Max Ring Time Duration"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const timeoutDestination =
  '//div[div[label[text()="Timeout Destination"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const afterHourDestination =
  '//div[div[label[text()="After Hours Destination"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const createQueueBtn = '//button[text()="CREATE QUEUE"]';
const cancelBtn = '//button[contains(text(),"CANCEL")]';
const deleteBtn = (user) =>
  "//tr[contains(.,'" + user + "')]//td//img[contains(@src,'delete')]";
const dncMenu = 'a[title="DNC"]';
const dncCards = '.dnc.card';
const uploadFileBtn = '//button[contains(text(),"Upload File")]';
const addBtn = (title) =>
  "//div[contains(@class,'card-title')][contains(.,'" + title + "')]//img";
const numberField = '.modal-content input[type="text"]';
const saveBtn = '//button[contains(text(),"SAVE")]';
const addMoreBtn = '.modal-content img[src*="add"]';
const deleteAddedDncValue = (title, value) =>
  "//div[span[strong[contains(text(),'" +
  title +
  "')]]]//following-sibling::div//span[text()='" +
  value +
  "']/ancestor::div[@class='item']//img";
const selectStateDropdown = '.modal-content .ss-select';
const ivrDropdown = (title, dropdown) =>
  "//div[contains(@class,form-group)][.='" +
  title +
  "']/following-sibling::div//span[text()='" +
  dropdown +
  "']";
const newDigitBtn = '//button[contains(text(),"NEW DIGIT")]';
const addNewBtn = '//button[contains(text(),"ADD NEW")]';
const addNewCallResult = '//button[contains(text(),"New Call Result")]';
const newGroupBtn = '//button[contains(text(),"New Group")]';
const tableBody = '.group-inner .disposition';
const callResultMenu = 'a[title="Call Results"]';
const customRadioBtn = (x) =>
  "//label[@class='radio_cstm'][contains(.,'" + x + "')]";
const buttonColorBox = '.disposition-color';
const groupNameField = '.group-row input';
const addNewRuleBtn = '//button[contains(text(),"ADD NEW RULE")]';
const newRuleOptions = (option) =>
  "//a[@class='dropdown-item'][text()='" + option + "']";
const callResultSaveBtn = '//button[contains(text(),"Save")]';
const callResultCancelBtn = '//button[contains(text(),"Cancel")]';
const callResultDeleteBtn = '.disposition-controls .fa-trash';
const callResultEditBtn = (callResult) =>
  `//tr[@class="group-inner"]//li[div[text()="${callResult}"]]`;
const addPhoneGroup = '.card-title img[src*="add"]';
const destinationDropdown = '.modal-content .ss-select';
const destinationOptions = (option) =>
  "//div[contains(@class,'ss-select-option')][text()='" + option + "']";
const addedPhoneGroup = (group) =>
  "//div[@class='card-body']//div[contains(@class,'card-item')][contains(.,'" +
  group +
  "')]//img[contains(@src,'delete')]";
const uploadFile = 'input[type="file"]';
const uploadBtn =
  "//div[contains(@class,'dropbox')]//button[contains(text(),'Upload')]";
const uploadedFile = (fileName) =>
  "//tr[contains(.,'" + fileName + "')]//img[contains(@src,'delete')]";
const dncFileDownloadbtn = (fileName) =>
  "//tr[contains(.,'" + fileName + "')]//img[contains(@src,'download')]";
const dncUploadSearchBox =
  "//div[text()='DNC File Upload']/following-sibling::div//input[contains(@class,'search-box')]";
const callresultDropdown =
  'div[class="collapse show"] .row-calldisposition .ss-select';
const deleteRuleBtn = (rule) =>
  "//div[@class='rule'][contains(.,'" +
  rule +
  "')]//img[contains(@src,'delete')]";
const addedNewDigit = '.number-editor input';
const removeNewDigit = (val) =>
  "//div[contains(@class,'number-editor')][input[@value='" +
  val +
  "']]/ancestor::div[contains(@class,'form-group')]//img[contains(@src,'remove')]";
const contactName = '.custom_checkbox + td span:not(.fakelink)';
const phone = '.phone-number';
const nextPage = 'img[title="Next Page"]';
const contactMenu = 'img[src*="edit"]';
const addToDNC = "//a[@class='dropdown-item' and (text()='Add to DNC')]";
const cardText = '.card-text';
const searchedNumber = (number) => "//td[text()='" + number + "']";
const searchedNumber1 = "//td[text()='9283662816']";
const areaCode = 'input[name="areacode"]';
const options = '.ss-select-option';
const editForm = '.edit-form';
const edit = (editName) =>
  '//tr[td[text()="' + editName + '"]]//img[contains(@src,"edit")]';
const saveQueueBtn = '.save_btn';
const groupNameText = '.group-title';
const callResultsName = '.dropdown-item';
const campaignCallResultGroup = `//div[contains(@class,"ss-select-option")]//span[contains(@class,"campaign__status")]/parent::span`;
const callResultsDropdown = '.group-inner div.dropdown';
const saveFieldIcon = '.group-row input + span .fa-check';
const openCallResultGroup = (groupName) =>
  `//td[@class="group-title" and text()="${groupName}"]/preceding-sibling::td[@class="group-opener"]`;
const deleteCallResultGroupIcon = (groupName) =>
  `//td[@class="group-title" and text()="${groupName}"]/parent::tr[@class="group-row"]//span/*[name()="svg"][contains(@class,"fa-trash")]`;
const editCallResultGroupIcon = (groupName) =>
  `//td[@class="group-title" and text()="${groupName}"]/parent::tr[@class="group-row"]//span/*[name()="svg"][contains(@class,"fa-pencil")]`;
const showOnCampaignPage = `//label[@class="radio_cstm"][text()="Display on New Campaign Page"]//span[@class="checkmark"]`;

export default class PhoneNum {
  clickCallResultDeleteBtn() {
    cy.get(callResultDeleteBtn).then((del) => {
      for (let i = 0; i < del.length; i++) {
        cy.get(del[i]).click();
      }
    });
  }

  verifyCreatedCallResult(callResult) {
    // cy.get(callresultDropdown).click();
    // cy.get(dropdownOptions).contains(callResult).should('be.visible');
    cy.get('.ss-select-value-label').contains(callResult).should('be.visible');
  }

  verifyCreatedCallResultGroup(groupName) {
    cy.get('.row-calldisposition .ss-select-control').click();
    cy.xpath(campaignCallResultGroup).should('contain.text', groupName);
  }

  clickCallResultEditBtn(callResult) {
    cy.xpath(callResultEditBtn(callResult)).click({ force: true });
  }

  verifyCallResultDelete(callResult) {
    cy.xpath(callResultEditBtn(callResult)).should('not.exist');
  }

  enterSearchKeyword(search) {
    cy.get(searchBox).type(search);
  }

  enterPhoneToSearchKeyword(search) {
    cy.log(search);
    const num = search.split('');
    for (let i = 0; i < num.length; i++) {
      if (num[i] != '(' && num[i] != ')' && num[i] != ' ' && num[i] != '-') {
        cy.get(searchBox).type(num[i]);
      }
    }
  }

  clickAddNewRuleBtn() {
    cy.xpath(addNewBtn).click();
  }

  selectRule(option) {
    cy.xpath(newRuleOptions(option)).click();
  }

  clickDeleteRuleBtn(rule) {
    cy.xpath(deleteRuleBtn(rule)).click({ force: true });
  }

  verifySearchResults(callResult) {
    cy.xpath(callResultEditBtn(callResult)).should('be.visible');
  }

  clickAddPhoneGroup() {
    cy.get(addPhoneGroup).click({ force: true });
  }

  SelectDestination(destination) {
    cy.get(destinationDropdown).click();
    cy.wait(1000);
    cy.xpath(destinationOptions(destination)).click();
  }

  clickSaveFieldIcon() {
    cy.get(saveFieldIcon).click();
  }

  VerifyAddedGroupName(name) {
    cy.get(groupNameText).should('contain.text', name);
  }

  VerifyDeleteGroup(name) {
    cy.get(groupNameText).should('not.contain.text', name);
  }

  verifyDestinationDropdown() {
    cy.get(destinationDropdown).should('be.visible');
  }

  clickDeleteCallResultGroupIcon(groupName) {
    cy.xpath(deleteCallResultGroupIcon(groupName)).click();
  }

  verifyAddedPhoneGroup(group) {
    cy.xpath(addedPhoneGroup(group)).should('be.visible');
  }

  clickDeletePhoneGroup(group) {
    cy.xpath(addedPhoneGroup(group)).click();
  }

  clickEditCallResultGroupIcon(groupName) {
    cy.xpath(editCallResultGroupIcon(groupName)).click();
  }

  clickUploadFileBtn() {
    cy.xpath(uploadFileBtn).click({ force: true });
  }

  uploadFile(file) {
    cy.get(uploadFile).attachFile(file);
  }

  clickUploadBtn() {
    cy.xpath(uploadBtn).click();
  }

  selectCallResultsFromDropdown(callResultName) {
    cy.get(callResultsDropdown).click();
    cy.get(callResultsName).then((results) => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].textContent.trim() === callResultName) {
          results[i].click();
        }
      }
    });
  }

  clickCloseBtn() {
    cy.xpath(closeBtn, { timeout: 5000 }).click();
  }

  verifyUploadDncFile(fileName) {
    cy.xpath(uploadedFile(fileName)).should('be.visible');
  }

  enterCallResutlGroupName(name) {
    cy.get(groupNameField).type(name);
  }

  verifyDncFileDownloadBtn(fileName) {
    cy.xpath(dncFileDownloadbtn(fileName)).should('be.visible');
  }

  clickDeleteDncFile(fileName) {
    cy.xpath(uploadedFile(fileName)).click();
  }

  enterFileNameToSearch(search) {
    cy.xpath(dncUploadSearchBox).type(search);
  }

  verifySearchResult(result) {
    cy.xpath(uploadedFile(result)).should('be.visible');
  }

  clickOpenCallResultGroup(groupName) {
    cy.xpath(openCallResultGroup(groupName)).click();
  }

  chooseActiveInactive(choice) {
    cy.xpath(customRadioBtn(choice)).click();
  }

  verifyCallResultSaveBtn() {
    cy.xpath(callResultSaveBtn).should('be.visible');
  }

  verifyCallResultCancelBtn() {
    cy.xpath(callResultCancelBtn).should('be.visible');
  }

  clickCallResultSaveBtn() {
    cy.xpath(callResultSaveBtn).click({ force: true });
  }

  verifyUploadedWelcomePrompt(fileName) {
    cy.xpath(uploadedWelcomePrompt(fileName)).should('be.visible');
  }

  chooseShowOnNewCampaignPage(choice) {
    cy.xpath(customRadioBtn(choice)).click();
  }

  verifyAddNewRuleBtn() {
    cy.xpath(addNewRuleBtn).should('be.visible');
  }

  verifyShowOnNewCompaignPage(choice) {
    cy.xpath(showOnCampaignPage).should('be.visible');
  }

  verifyRules(rules) {
    for (let i = 0; i < rules.length; i++) {
      cy.xpath(customRadioBtn(rules[i])).should('be.visible');
    }
  }

  verifyButtonColorBox() {
    cy.get(buttonColorBox).should('be.visible');
  }

  chooseButtonColor(color) {
    cy.get(buttonColorBox).click();
  }

  verifyNumberGroupDropdown() {
    cy.xpath(selectDropdown('Select Number Group')).should('be.visible');
  }

  verifyCallResultGroupDropdown() {
    cy.xpath(selectDropdown('Select Call Results Group')).should('be.visible');
  }

  verifyActiveInactive(choice) {
    cy.xpath(customRadioBtn(choice)).should('be.visible');
  }

  clickPhoneNumberMenu() {
    cy.get(phoneNumMenu).click({ force: true });
  }

  clickBuyDidButton() {
    cy.xpath(buyDidbtn).click();
  }

  selectStateModeOption(state) {
    cy.xpath(stateDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(state)
      .then((option) => {
        option[0].click();
      });
  }
  clickSearchButton() {
    cy.get(searchBtn).click({ force: true });
  }

  selectPhoneNumber(number) {
    cy.xpath(firstNumberChkBx, { timeout: 30000 }).click();
  }

  clickOrderNowButton() {
    cy.get(orderNow).click({ force: true });
  }

  closingDialog() {
    cy.xpath(closeBtn, { timeout: 60000 }).should('be.enabled');
    cy.xpath(closeBtn).click();
  }

  getFirstPhoneNumber() {
    cy.get(firstNum, { timeout: 30000 })
      .first({ timeout: 30000 })
      .then((el) => {
        cy.readFile('cypress/fixtures/testData.json', (err, data) => {
          if (err) {
            return console.error(err);
          }
        }).then((data) => {
          data.BuyNumber = el.text().trim();
          cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data));
        });
      });
  }

  verifysearchStartedToast() {
    cy.xpath(searchToast, { timeout: 5000 }).should('be.visible');
  }

  verifyAddedPhoneNum(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + num + '")]',
      { timeout: 10000 }
    ).should('be.visible');
  }
  verifyAddedPhoneNumNotVisible(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + num + '")]',
      { timeout: 5000 }
    ).should('not.be.visible');
  }

  deleteAddedPhoneNumber(num) {
    cy.xpath(
      '(//tr[td[contains(.,"' +
        num +
        '")]]//*[name()="svg"][@data-icon="trash-alt"])[1]',
      { timeout: 5000 }
    )
      .scrollIntoView()
      .click();
  }
  handleAlertForDelete() {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Delete Number?');
    });
    cy.on('window:confirm', () => true);
  }
  verifyDeletedToast() {
    cy.xpath(deleteToast).should('be.visible');
  }

  assignAgentUser(usrName) {
    cy.xpath(assignToDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(usrName)
      .then((option) => {
        option[0].click();
      });
  }

  clickIvrAttendent() {
    cy.get(ivrAttendent).click({ force: true });
  }

  clickNewIvr() {
    cy.xpath(newIvr).click();
  }

  enterName(name) {
    cy.get(Name).type(name);
  }

  enterDescription(desc) {
    cy.get(description).type(desc);
  }

  selectCampaign() {
    cy.xpath(clickselectCampaign).click();
    cy.get(selectFromDropdown)
      .contains('FirstCampaign')
      .then((option) => {
        option[0].click();
      });
  }

  selectNumber(state) {
    cy.xpath(phoneNumber).click();
    cy.get(selectFromDropdown)
      .contains(state)
      .then((option) => {
        option[0].click();
      });
  }

  clickAddNewWelcomePrompt() {
    cy.xpath(newWelcomePrompt).click({ force: true });
  }

  enterRecordingName(recording) {
    cy.get(recordingName).clear().type(recording);
  }

  clickTextToSpeech() {
    cy.get(textToSpeech).click();
  }

  enterRecordingText(text) {
    cy.get(recordingText).type(text);
  }

  clickGenerateButton() {
    cy.xpath(generateButton).click();
    cy.get(speech, { timeout: 7000 }).should('be.visible');
  }

  clickRecordingSaveButton() {
    cy.xpath(recordingSaveButton).click();
    cy.wait(2000);
  }

  clickIvrSaveButton() {
    cy.get(ivrSaveButton).click({ force: true });
  }

  verifySaved() {
    cy.xpath(saved).should('be.visible');
  }

  deleteIVR(name) {
    cy.xpath(deleteIvr(name)).click();
  }

  handleAlertForDelete() {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Delete user?');
    });
    cy.on('window:confirm', () => true);
  }

  verifyDeletedIvr() {
    cy.xpath(DeletedIVR).should('be.visible');
  }

  clickInboundCallMenu() {
    cy.get(inboundCallMenu).click({ force: true });
  }

  verifySearchBox() {
    cy.get(searchBox).should('be.visible');
  }

  verifyNewQueueBtn() {
    cy.xpath(newQueueBtn).should('be.visible');
  }

  verifyTableHeaderName(header) {
    for (let i = 0; i < header.length; i++) {
      cy.get(tableHeader).should('contain.text', header[i]);
    }
  }

  clickNewQueueBtn() {
    cy.xpath(newQueueBtn).click();
  }

  verifyNameField() {
    cy.get(Name).should('be.visible');
  }

  verifyDescriptionField() {
    cy.get(description).should('be.visible');
  }

  verifyExtensionsDropdown(dropdownName) {
    cy.xpath(selectDropdown(dropdownName)).should('be.visible');
  }

  selectExtensionDropdown(dropdownName, number) {
    cy.xpath(selectDropdown(dropdownName)).click().type(number).type('{enter}');
  }

  verifyAssignAgent(dropdownName) {
    cy.xpath(selectDropdown(dropdownName)).should('be.visible');
  }

  selectAssignAgent(name, agent) {
    cy.xpath(selectDropdown(name))
      .click({ force: true })
      .type(agent)
      .type('{enter}');
    cy.get("img[src*='question']").first().click();
  }

  verifyAssignCampaignDropdown(name) {
    cy.xpath(selectDropdown(name)).should('be.visible');
  }

  selectAssignCampaignDropdown(name, campaign) {
    cy.wait(1000);
    cy.xpath(selectDropdown(name)).click();
    cy.wait(1000);
    cy.get(options).then((opt) => {
      for (let i = 0; i < opt.length; i++) {
        if (opt[i].textContent.trim() === campaign) {
          cy.get(opt[i]).click({ force: true });
          break;
        }
      }
    });
  }

  selectCallResultCampaignDropdown(campaign) {
    cy.xpath(selectDropdown('Select Campaigns')).click();
    cy.wait(1000);
    cy.contains(campaign).click();
  }

  verifyRingStrategy(strategy) {
    for (let i = 0; i < strategy.length; i++) {
      cy.get(ringStrategyRadioBtn).should('contain.text', strategy[i]);
    }
  }

  selectRingStrategy(strategy) {
    cy.get(ringStrategyRadioBtn).contains(strategy).click({});
  }

  verifyWrapupTimeoutDropdown() {
    cy.xpath(wrapupTimeout).should('be.visible');
  }

  selectWrapupTime(time) {
    cy.xpath(wrapupTimeout).click().contains(time).click();
  }

  verifyRingTimeDurationDropdown() {
    cy.xpath(ringTimeDuration).should('be.visible');
  }

  selectRingTimeDuration(time) {
    cy.xpath(ringTimeDuration).click().contains(time).click();
  }

  verifyTimeoutDestinationDropdown() {
    cy.xpath(timeoutDestination).should('be.visible');
  }

  selectTimeoutDestination(destination) {
    cy.xpath(timeoutDestination).click().contains(destination).click();
  }

  verifyAfterHourDestinationDropdown() {
    cy.xpath(afterHourDestination).should('be.visible');
  }

  selectAfterHourDestination(destination) {
    cy.xpath(afterHourDestination).click().contains(destination).click();
  }

  verifyCreateQueueBtn() {
    cy.xpath(createQueueBtn).scrollIntoView().should('be.visible');
  }

  clickCreateQueueBtn() {
    cy.xpath(createQueueBtn).click({ force: true });
  }

  verifyCancelBtn() {
    cy.xpath(cancelBtn).should('be.visible');
  }

  clickDeleteBtn(user) {
    cy.xpath(deleteBtn(user)).click();
  }

  clickDncMenu() {
    cy.get(dncMenu).click({ force: true });
  }

  verifyDncCards() {
    cy.get(dncCards).should('be.visible');
  }

  verifyDncCardTitle(title) {
    for (let i = 0; i < title.length; i++) {
      cy.get(dncCards).should('contain.text', title[i]);
    }
  }

  verifyDncTable() {
    cy.get(tableHeader).should('be.visible');
  }

  verifyDncTableHeader(header) {
    for (let i = 0; i < header.length; i++) {
      cy.get(tableHeader).should('contain.text', header[i]);
    }
  }

  verifyDncUploadFileBtn() {
    cy.xpath(uploadFileBtn).should('be.visible');
  }

  clickAddBtn(title) {
    cy.xpath(addBtn(title)).click();
  }

  verifyNumberField() {
    cy.get(numberField).should('be.visible');
  }

  enterDncNumber(number) {
    cy.get(numberField).type(number);
  }

  verifySaveBtn() {
    cy.xpath(saveBtn).should('be.visible');
  }

  clickSaveBtn() {
    cy.xpath(saveBtn).click({ force: true });
  }

  verifyAddMoreBtn() {
    cy.get(addMoreBtn).should('be.visible');
  }

  verifyAddedValue(number) {
    cy.get(dncCards).should('contain.text', number);
  }

  clickDeleteDncValue(title, number) {
    cy.xpath(deleteAddedDncValue(title, number)).click();
  }

  verifySelectStateDropdown() {
    cy.get(selectStateDropdown).should('be.visible');
  }

  selectState(state) {
    cy.get(selectStateDropdown).type(state);
    cy.wait(2000);
    cy.contains(state).click();
    // cy.xpath("//div[text()='" + state + "']").click();
    // cy.get(selectStateDropdown).type(state, { delay: 3000 }).type('{enter}');
  }

  verifyNewIVRBtn() {
    cy.xpath(newIvr).should('be.visible');
  }

  verifyNewDigitBtn() {
    cy.xpath(newDigitBtn).should('be.visible');
  }

  clickNewDigitBtn() {
    cy.xpath(newDigitBtn).click();
  }

  verifyIVRDropdown(title, dropdown) {
    cy.xpath(ivrDropdown(title, dropdown)).should('be.visible');
  }

  verifyWelcomePromptDropdown(dropdown) {
    cy.xpath(selectDropdown(dropdown));
  }

  verifyAddNewBtn() {
    cy.xpath(addNewBtn).should('be.visible');
  }

  verifyAddNewCallResultBtn() {
    cy.xpath(addNewCallResult).should('be.visible');
  }

  clickAddNewCallResultBtn() {
    cy.xpath(addNewCallResult).click();
  }

  verifyAddNewGroupBtn() {
    cy.xpath(newGroupBtn).should('be.visible');
  }

  clickAddNewGroupBtn() {
    cy.xpath(newGroupBtn).click();
  }

  verifyDefaultCallResults(body) {
    for (let i = 0; i < body.length; i++) {
      cy.get(tableBody).should('contain.text', body[i]);
    }
  }

  verifyRadioBtn(radio) {
    for (let i = 0; i < radio.length; i++) {
      cy.get(radioBtn).should('contain.text', radio[i]);
    }
  }

  clickCallResultMenu() {
    cy.get(callResultMenu).click({ force: true });
  }

  handleDeleteAlert(text) {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal(text);
    });
    cy.on('window:confirm', () => true);
  }

  verifyAddedNewDigit(val) {
    cy.get(addedNewDigit).should('have.value', val);
  }

  verifyDeletedDigit() {
    cy.get(addedNewDigit).should('not.exist');
  }

  removeAddedNewDigit(val) {
    cy.xpath(removeNewDigit(val)).click();
  }

  clickContactMenu() {
    cy.get(contactMenu).first().click();
  }

  clickAddToDNC() {
    cy.xpath(addToDNC).click({ force: true });
  }

  verifyAddedDNCNumber(num) {
    cy.get(cardText).then((el) => {
      expect(el.text()).to.contains(num);
    });
  }
  verifySearchedNumber(number) {
    cy.wait(1000);
    cy.xpath(searchedNumber(number)).should('be.visible');
  }

  verifyNumberNotVisible() {
    cy.xpath(searchedNumber1).should('not.exist');
  }

  enterAreaCode(code) {
    cy.get(areaCode).type(code);
  }

  verifySearchNumber(code) {
    cy.get('.number label', { timeout: 30000 }).should('contain.text', code);
  }

  clickeditIVR(name) {
    cy.xpath(edit(name)).first().click();
  }

  verifyEditIVRPage() {
    cy.get(editForm).should('be.visible');
  }

  clickeditQueue(name) {
    cy.xpath(edit(name)).first().click();
  }

  verifyEditQueuePage() {
    cy.get(editForm).should('be.visible');
  }

  clickSaveQueueBtn() {
    cy.get(saveQueueBtn).scrollIntoView().click();
  }
}
