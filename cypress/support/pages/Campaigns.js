const campaignsMenu = 'a[title="Campaigns"]';
const addCampaign = '//button[contains(text(),"CREATE NEW CAMPAIGN")]';
const inputName = 'input[name="name"]';
const switchBar = 'span.switch';
const radioBtn = (mode) =>
  "//label[input[@type='radio']][contains(.,'" +
  mode +
  "')]//span[@class='checkmark']";
const callerIdDropdown =
  "//label[text()='Caller ID']/ancestor::div[contains(@class,'row')]//div[contains(@class,'ss-select-control')]";
const nextArrow = '.collapse.show .btn-primary.circle';
const callerIdDrpdwn =
  '//div[contains(text(),"individual numbers")]/following-sibling::div/div[contains(@class,"ss-select")]';
const agentsDrpdwn =
  '//div[contains(@class,"ss-select-control")]/span[contains(text(),"Agents")]';
const createCampBtn = '//button[contains(text(),"SAVE")]';
const statusDrpdwn = '.campaignForm span[title="Status"]';
const dropdownOptions = '.ss-select-group-items';
const pausedDrpdwn = '.campaignForm span[title="Paused"]';
const campaignHeader = '.campaignsTop';
const searchBox = '.search-box-wrapper';
const Agent = 'span[title="Agent"]';
const contactsCountSlider = '.slider-control';
const campaignHeadings = 'table[class=table] thead';
const archiveCampaignButton = "//a[text()='Archive']";
const statusArchived = "//div[text()='Archived']";
const recycleMenu = "a[title='Recycle']";
const timeZoneDropDown = "span[title*='Eastern Time']";
const maxLine = "//label[text()='Max Lines Per Agent']/parent::div//input";
const callTypeAutoAnswer = "//label[text()='Auto Answer']";
const callTypeBeepOnce = "//label[text()='Beep Once']";
const callTypeRingingSound = "//label[text()='Ringing Sound']";
const AbandonmentTimeout =
  "//label[text()='Abandonment Timeout']/parent::div/div";
const callOptions = (option) => "//label[text()='" + option + "']//span";
const AnswerMachineDetectionDisable =
  "//label[text()='Answering Machine Detection']/parent::div/following-sibling::div/label[text()='Disable']/span";
const callRecordingEnable =
  "//label[text()='Call Recording']/parent::div/following-sibling::div/label[text()='Enable']/span";
const callRecordingDisable =
  "//label[text()='Call Recording']/parent::div/following-sibling::div/label[text()='Disable']/span";
const callerIDGroup = '.row-callerid .ss-select:not(.multiple)';
const callerIDNumber = '.row-callerid .multiple';
const callingHours = "//label[text()='Calling Hours']/parent::div/div/div";
const callResult = "div[class='collapse show'] .row-calldisposition .ss-select";
const MaxAttempts = "//label[text()='Max Attempts Per Record']/parent::div/div";
const simultaneousDials =
  "//label[text()='Simultaneous Dials Per Agent']/parent::div/div";
const RetryTime =
  "//label[text()='Retry Time']/parent::div/following-sibling::div";
const AgentScript = '.row-agentscript .ss-select-control';
const AgentScriptCreateNew = '.row-agentscript button';
const contactLists = "//label[text()='Contact Lists']/parent::div/div";
const assignAgent =
  "//label[text()='Assign Agents']/ancestor::div[@class='row']/following-sibling::div";
const FedralDNCYES =
  "//label[text()='Scrub Federal DNC']/parent::div/following-sibling::div/label[text()='Yes']/input";
const FedralDNCNo =
  "//label[text()='Scrub Federal DNC']/parent::div/following-sibling::div/label[text()='No']/input";
const companyDNCYES =
  "//label[text()='Scrub Company DNC']/parent::div/following-sibling::div/label[text()='Yes']/input";
const companyDNCNO =
  "//label[text()='Scrub Company DNC']/parent::div/following-sibling::div/label[text()='No']/input";
const CancelButton = "//button[text()=' CANCEL']";
const RecStartDate = "//label[text()='Start Date']/parent::div/div";
const RecEndDate = "//label[text()='End Date']/parent::div/div";
const RecCallResult = "span[class='ss-select-placeholder']";
const RecUseList = "//label[text()='Use Lists From']/parent::div/div";
const RecCampaignName = "input[name='newcampaignname']";
const RecSkipLeadsCheckbox = "input[name='skip_leads']";
const RecSkipContacts = "input[name='skip_dnr']";
const RecSaveCampaign = "//button[contains(text(),'SAVE CAMPAIGN')]";
const Alert = '.alert';
const PauseStatus = "//div[text()='Paused']";
const ActiveStatus = "//div[text()='Active']";
const ErrorMessage = '.error-msg';
const scheduleTable = '.schedule-table';
const scheduleCancelButton =
  "//div[@class='modal-footer']//button[text()=' CANCEL']";
const scheduleCheckmark =
  "//div[text()='Sunday']/parent::div//span[@class='checkmark']";
const schedule =
  "//div[text()='Sunday']/parent::div//div[contains(@class,'ss-select') and not(contains(@class,'fakeinput'))]";
const checkSelectAll =
  "//div[@class='schedule-table']//div[contains(@class,'ss-select') and not(contains(@class,'fakeinput'))]";
const selectAllCheckbox =
  "//div[text()='Select all']/parent::div//span[@class='checkmark']";
const applyToAll = "//span[text()='Apply to all']";
const checkApply = "//strong[text()='Sun']";
const applyButton = "//button[text()=' APPLY']";
const newScriptPopUp = '.modal-body';
const contactListDropdown = '.ss-select-dropdown';
const campaignSetting = '.custom_drop ';
const campaignSettingOptions = '.dropdown-menu-right';
const FirstCampaignMenuButton =
  "//span[text()='FirstCampaign']/ancestor::tr//div[contains(@class,'custom_drop ')]/span";
const campaignEditButton = "//a[text()='Edit']";
const campaignChange =
  "//span[text()='FirstCampaign']/ancestor::tr//td[text()='Predictive Dialer']";
const callerIdError = '.ss-select.error';
const campaign = '.main_sec .ss-select:not(.multiple)';
const options = '.ss-select-option';
const recycleCallResult =
  '//label[text()="Call Results"]/following-sibling::div[contains(@class,"ss-select")]';
const questionIcon = 'img[src*="question"]';
const useListsFrom =
  '//label[text()="Use Lists From"]/following-sibling::div[contains(@class,"ss-select")]';
const newCampaignName = 'input[name="newcampaignname"]';
const saveCampaign = '.wizard-buttons button[type="submit"]';
const successToast = '.Toastify__toast-body';
const campaignTable = '.table tbody';

export default class Campaign {
  clickCampaignMenu() {
    cy.get(campaignsMenu).click({ force: true });
  }

  clickAddNewCampaign() {
    cy.xpath(addCampaign).click();
  }

  enterName(name) {
    cy.get(inputName).type(name);
  }
  enableAdvancedSwitchBar() {
    cy.get(switchBar).click();
  }

  selectDialingModeOption(dialMode) {
    cy.xpath(radioBtn(dialMode)).click();
  }

  clickNextCircleArrow() {
    cy.get(nextArrow).click({ force: true });
  }

  selectCallerId(callerMode, number) {
    cy.xpath(radioBtn(callerMode)).click();
    cy.xpath(callerIdDropdown).click();
    cy.get('.ss-select-option').then((el) => {
      for (let i = 0; i < el.length; i++) {
        if (el[i].textContent.trim().endsWith(number)) {
          cy.get(el[i]).click({ force: true });
          break;
        }
      }
    });
  }

  selectAgentsDrpdwn(agentMode, agnts) {
    cy.xpath(radioBtn(agentMode)).click();
    cy.xpath(agentsDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(agnts)
      .then((option) => {
        option[0].click();
      });
  }

  selectCallResultsOption(callRslts) {
    cy.get(
      'div[class="collapse show"] .row-calldisposition .ss-select'
    ).click();
    cy.get(dropdownOptions)
      .contains(callRslts)
      .then((option) => {
        option[0].click();
      });
  }

  clickCreateCampButton() {
    cy.xpath(createCampBtn).click({ force: true });
  }

  verifyAddedCampaign(camp) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + camp + '")]',
      { timeout: 10000 }
    ).should('be.visible');
  }

  clickToSelectPasused() {
    cy.get(statusDrpdwn).click();
  }

  clickToSelectActive() {
    cy.get(pausedDrpdwn).click();
  }

  clickToSelectStatus() {
    cy.get(statusDrpdwn).click();
  }

  changeCampaignStatusByDrpdwn(status) {
    cy.get(dropdownOptions)
      .contains(status)
      .then((option) => {
        option[0].click();
      });
  }

  changesCampaignStatus(campName, status) {
    cy.xpath(
      '//tr[td[span[contains(text(),"' +
        campName +
        '")]]]//td/div[contains(@class,"progress-status") and contains(@class,"' +
        status +
        '")]'
    ).click();
  }

  verifyCampaignNotVisible(camp) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + camp + '")]',
      { timeout: 5000 }
    ).should('not.be.visible');
  }

  verifyCampaignHeaderElement(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(campaignHeader).should('contain.text', element[i]);
    }
  }

  verifySearchBox() {
    cy.get(searchBox).should('be.visible');
  }

  verifyStatusBox() {
    cy.get(statusDrpdwn).should('be.visible');
  }

  verifyAgentBox() {
    cy.get(Agent).should('be.visible');
  }

  verifyContactsCountSlider() {
    cy.get(contactsCountSlider).should('be.visible');
  }

  verifyAddCompaignButton() {
    cy.xpath(addCampaign).should('be.visible');
  }

  verifyCampaignHeaderHedings(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(campaignHeadings).should('contain.text', element[i]);
    }
  }

  clickEditCampaign(campaignName) {
    cy.xpath(
      '//span[text()="' +
        campaignName +
        '"]/ancestor::tr//img[contains(@src,"edite1.svg")]'
    ).click();
  }

  clickArchiveCampaignButton() {
    cy.xpath(archiveCampaignButton).click();
  }

  handleAlertForDelete() {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Delete user?');
    });
    cy.on('window:confirm', () => true);
  }

  verifyArchivedCampaign(campaignName, check) {
    cy.xpath('//*[text()="' + campaignName + '"]')
      .first()
      .scrollIntoView()
      .should(check);
  }

  clickStatusArchived() {
    cy.xpath(statusArchived).click();
  }

  clickRecycleMenu() {
    cy.get(recycleMenu).click({ force: true });
  }

  searchCampaign(campname) {
    cy.get(searchBox).type(campname);
  }

  verifyCampaignNameField() {
    cy.get(inputName).should('be.visible');
  }

  verifyDialModeDropdown() {
    cy.xpath(radioBtn('Preview Dialer')).should('be.visible');
    cy.xpath(radioBtn('Predictive Dialer')).should('be.visible');
  }

  newCampaignDropdown(dropdownName) {
    for (let i = 0; i < dropdownName.length; i++) {
      cy.xpath(
        "//label[text()='" + dropdownName[i] + "']/parent::div/div"
      ).should('be.visible');
    }
  }

  verifyCallTypeAutoAnswer() {
    cy.xpath(callTypeAutoAnswer).should('be.visible');
  }

  verifyCallTypeBeepOnce() {
    cy.xpath(callTypeBeepOnce).should('be.visible');
  }

  verifyCallTypeRingingSound() {
    cy.xpath(callTypeRingingSound).should('be.visible');
  }

  verifyCallerIdError() {
    cy.get(callerIdError).should('be.visible');
  }

  verifyCallOptions(options) {
    for (let i = 0; i < options.length; i++) {
      cy.xpath(callOptions(options[i])).should('be.visible');
    }
  }

  verifyAnswerMachineDisableButton() {
    cy.xpath(AnswerMachineDetectionDisable).should('be.visible');
  }

  verifyCallRecordingEnable() {
    cy.xpath(callRecordingEnable).should('be.visible');
  }

  verifyCallRecordingDisable() {
    cy.xpath(callRecordingDisable).should('be.visible');
  }

  verifyCallerID(caller) {
    for (let i = 0; i < caller.length; i++) {
      cy.xpath(radioBtn(caller[i])).should('be.visible');
    }
  }

  verifyCallerIDNumber() {
    cy.get(callerIDNumber).should('be.visible');
  }

  verifyCallingHours() {
    cy.xpath(callingHours).should('be.visible');
  }

  verifyCallResult() {
    cy.get(callResult).should('be.visible');
  }

  verifyMaxAttempts() {
    cy.xpath(MaxAttempts).should('be.visible');
  }

  verifyRetryTime() {
    cy.xpath(RetryTime).should('be.visible');
  }

  verifySimulataneousDials() {
    cy.xpath(simultaneousDials).should('be.visible');
  }

  verifyAgentScript() {
    cy.get(AgentScript).should('be.visible');
  }

  verifyAgentScriptCreateNewButton() {
    cy.get(AgentScriptCreateNew).should('be.visible');
  }

  verifyContactList() {
    cy.xpath(contactLists).should('be.visible');
  }

  verifyCallOrder(order) {
    for (let i = 0; i < order.length; i++) {
      cy.xpath(callOptions(order[i])).should('be.visible');
    }
  }

  verifyAssignAgent() {
    cy.xpath(assignAgent).should('be.visible');
  }

  verifyFedralDNCYes() {
    cy.xpath(FedralDNCYES).should('exist');
  }

  verifyFedralDNCNo() {
    cy.xpath(FedralDNCNo).should('exist');
  }

  verifyCompanyDNCYes() {
    cy.xpath(companyDNCYES).should('exist');
  }

  verifyCompanyDNCNo() {
    cy.xpath(companyDNCNO).should('exist');
  }

  verifyCancelButton() {
    cy.xpath(CancelButton).should('exist');
  }

  verifyRecStartDate() {
    cy.xpath(RecStartDate).should('be.visible');
  }

  verifyRecEndDate() {
    cy.xpath(RecEndDate).should('be.visible');
  }

  verifyRecCallResult() {
    cy.get(RecCallResult).should('be.visible');
  }

  verifyRecUseList() {
    cy.xpath(RecUseList).should('be.visible');
  }

  verifyRecCampaignName() {
    cy.get(RecCampaignName).should('be.visible');
  }

  verifyRecSkipLeads() {
    cy.get(RecSkipLeadsCheckbox).should('exist');
  }

  verifyRecSkipContact() {
    cy.get(RecSkipContacts).should('exist');
  }

  verifyRecSaveCampaignButton() {
    cy.xpath(RecSaveCampaign).should('be.visible');
  }

  verifyAlert() {
    cy.get(Alert).should('be.visible');
  }

  clickCampaignName(camp) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + camp + '")]/span'
    ).click();
  }

  clickPauseStatus() {
    cy.xpath(PauseStatus).click();
  }

  clickActiveStatus() {
    cy.xpath(ActiveStatus).click();
  }

  verifyErrorMessage(text) {
    cy.get(ErrorMessage).should('contain.text', text);
  }

  clickCallingHours() {
    cy.xpath(callingHours).click();
  }

  verifyScheduleTable() {
    cy.get(scheduleTable).should('be.visible');
  }

  clickScheduleCancelButton() {
    cy.xpath(scheduleCancelButton).click();
  }

  clickScheduleCheckmark() {
    cy.xpath(scheduleCheckmark).click();
  }

  verifyScheduleCheckbox(attr) {
    cy.xpath(schedule).should(attr, 'readonly');
  }

  clickSelectAllCheckbox() {
    cy.xpath(selectAllCheckbox).click();
  }

  verifySelectAll(attr) {
    cy.wait(4000);
    cy.xpath(checkSelectAll).should(attr, 'readonly');
  }

  clickApplyToAllButton() {
    cy.xpath(applyToAll).click();
  }

  VerifyApplyFunctionality() {
    cy.xpath(checkApply).should('be.visible');
  }

  clickApplyButton() {
    cy.xpath(applyButton).click();
  }

  verifyScheduleTableNotVisible() {
    cy.get(scheduleTable).should('not.exist');
  }

  clickAgentScriptCreateNewButton() {
    cy.get(AgentScriptCreateNew).click();
  }

  verifyAgentScriptPopUp() {
    cy.get(newScriptPopUp).should('be.visible');
  }

  verifyContactListDropdown() {
    cy.get(contactListDropdown).should('be.visible');
  }

  clickContactListDropdown() {
    cy.xpath(contactLists).click();
  }

  clickCampaignSetting() {
    cy.get(campaignSetting).first().click();
  }

  verifyCampaignSettingOptions(option) {
    for (let i = 0; i < option.length; i++) {
      cy.get(campaignSettingOptions).should('contain.text', option[i]);
    }
  }

  clickSaveCampaign() {
    cy.xpath(RecSaveCampaign).click();
  }

  clickFirstCampaignMenuButton() {
    cy.xpath(FirstCampaignMenuButton).click({ force: true });
  }

  clickEditCampaignNew() {
    cy.xpath(campaignEditButton).click({ force: true });
  }

  verifyCampaignChange() {
    cy.xpath(campaignChange).should('be.visible');
  }

  selectOptions(optionName) {
    cy.get(options).then((opt) => {
      for (let i = 0; i < opt.length; i++) {
        if (opt[i].textContent.trim() === optionName) {
          cy.get(opt[i]).click({ force: true });
          break;
        }
      }
    });
  }

  selectCamapignToRecycle(campaignName) {
    cy.get(campaign).click();
    this.selectOptions(campaignName);
  }

  selectRecycleCallResult(callResult) {
    cy.xpath(recycleCallResult).click();
    this.selectOptions(callResult);
    this.clickQuestionIcon();
  }

  clickQuestionIcon() {
    cy.get(questionIcon).first().click();
  }

  selectUseListsFrom(listName) {
    cy.xpath(useListsFrom).click();
    this.selectOptions(listName);
    this.clickQuestionIcon();
  }

  enterNewCampaignName(name) {
    cy.get(newCampaignName).type(name);
  }

  clickRecycleSaveCampaign() {
    cy.get(saveCampaign).click();
  }

  verifySuccessToast(message) {
    cy.get(successToast).should('contain.text', message);
  }

  verifyAddedRecycleCampaign(campaignName) {
    cy.get(campaignTable).should('contain.text', campaignName);
  }
}
