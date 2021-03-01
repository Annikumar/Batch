

const campaignsMenu = 'a[title="Campaigns"]';
const addCampaign = '//button[contains(text(),"CREATE NEW CAMPAIGN")]';
const inputName = 'input[name="name"]';
const switchBar = "span.switch";
const dialingModeDrpdwn =
  '//label[contains(text(),"Dialing Mode")]/following-sibling::div[contains(@class,"ss-select")]';
const nextArrow = ".collapse.show .btn-primary.circle";
const callerIdDrpdwn =
  '//div[contains(text(),"individual numbers")]/following-sibling::div/div[contains(@class,"ss-select")]';
const agentsDrpdwn =
  '//div[contains(@class,"ss-select-control")]/span[contains(text(),"Agents")]';
const createCampBtn = '//button[contains(text(),"CREATE CAMPAIGN")]';
const statusDrpdwn = '.campaignForm span[title="Status"]';
const dropdownOptions = ".ss-select-group-items";
const pausedDrpdwn = '.campaignForm span[title="Paused"]';
const campaignHeader = '.campaignsTop'
const searchBox = '.search-box-wrapper'
const Agent = 'span[title="Agent"]'
const contactsCountSlider = '.slider-control'
const campaignHeadings = "table[class=table] thead"
const archiveCampaignButton = "//a[text()='Archive']"
const statusArchived = "//div[text()='Archived']"
const recycleMenu = "a[title='Recycle']"
const timeZoneDropDown = "span[title*='Eastern Time']"
const maxLine = "//label[text()='Max Lines Per Agent']/parent::div//input"
const callTypeAutoAnswer = "//label[text()='Auto Answer']"
const callTypeBeepOnce = "//label[text()='Beep Once']"
const callTypeRingingSound = "//label[text()='Ringing Sound']"
const AbandonmentTimeout = "//label[text()='Abandonment Timeout']/parent::div/div"
const AnswerMachingDetectionEnable = "//label[text()='Answering Machine Detection']/parent::div/following-sibling::div/label[text()='Enable']/span"
const AnswerMachineDetectionDisable = "//label[text()='Answering Machine Detection']/parent::div/following-sibling::div/label[text()='Disable']/span"
const callRecordingEnable = "//label[text()='Call Recording']/parent::div/following-sibling::div/label[text()='Enable']/span"
const callRecordingDisable = "//label[text()='Call Recording']/parent::div/following-sibling::div/label[text()='Disable']/span"
const callerIDGroup = ".row-callerid .ss-select:not(.multiple)"
const callerIDNumber = ".row-callerid .multiple"
const callingHours = "//label[text()='Calling Hours']/parent::div/div"
const callResult = "div[class='collapse show'] .row-calldisposition .ss-select"
const MaxAttempts = "//label[text()='Max Attempts Per Record']/parent::div/div"
const RetryTime = "//label[text()='Retry time']/parent::div/div"
const AgentScript = ".row-agentscript .ss-select-control"
const AgentScriptCreateNew = ".row-agentscript button"
const contactLists = "//label[text()='Contact Lists']/parent::div/div"
const assignAgent = "//label[text()='Assign Agents']/ancestor::div[@class='row']/following-sibling::div"
const FedralDNCYES = "//label[text()='Scrub Federal DNC']/parent::div/following-sibling::div/label[text()='Yes']/input"
const FedralDNCNo = "//label[text()='Scrub Federal DNC']/parent::div/following-sibling::div/label[text()='No']/input"
const companyDNCYES = "//label[text()='Scrub Company DNC']/parent::div/following-sibling::div/label[text()='Yes']/input"
const companyDNCNO = "//label[text()='Scrub Company DNC']/parent::div/following-sibling::div/label[text()='No']/input"
const CancelButton = "//button[text()=' CANCEL']"


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
    cy.xpath(dialingModeDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(dialMode)
      .then((option) => {
        option[0].click();
      });
  }
  clickNextCircleArrow() {
    cy.get(nextArrow).click({ force: true });
  }

  selectCallerId(number) {
    cy.xpath(callerIdDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(number)
      .then((option) => {
        option[0].click();
      });
  }

  selectAgentsDrpdwn(agnts) {
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
    ).should("be.visible");
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
    ).should("not.be.visible");
  }

  verifyCampaignHeaderElement(element){
    for(let i=0;i<element.length; i++){
      cy.get(campaignHeader).should('contain.text',element[i])
    }
  };

  verifySearchBox(){
    cy.get(searchBox).should("be.visible");
  }

  verifyStatusBox(){
    cy.get(statusDrpdwn).should("be.visible");
  }

  verifyAgentBox(){
    cy.get(Agent).should("be.visible");
  }

  verifyContactsCountSlider(){
    cy.get(contactsCountSlider).should("be.visible");
  }

  verifyAddCompaignButton(){
    cy.xpath(addCampaign).should("be.visible");
  }

  verifyCampaignHeaderHedings(element){
    for(let i=0;i<element.length; i++){
      cy.get(campaignHeadings).should('contain.text',element[i])
    }
  };

  clickEditCampaign(campaignName){
    cy.xpath('//span[text()="'+campaignName+'"]/ancestor::tr//img[contains(@src,"edite1.svg")]').click()
  }

  clickArchiveCampaignButton(){
    cy.xpath(archiveCampaignButton).click()
  }

  handleAlertForDelete() {
    cy.on("	window:alert", (str) => {
      expect(str).to.equal("Delete user?");
    });
    cy.on("window:confirm", () => true);
  }

  verifyArchivedCampaign(campaignName,check){
    cy.xpath('//*[text()="'+campaignName+'"]').should(check);
  }

  clickStatusArchived(){
    cy.xpath(statusArchived).click();
  }

  clickRecycleMenu(){
    cy.get(recycleMenu).click();
  }

  searchCampaign(campname){
    cy.get(searchBox).type(campname);
  }

  verifyCampaignNameField(){
    cy.get(inputName).should("be.visible")
  }

  verifyDialModeDropdown(){
    cy.get(dialingModeDrpdwn).should("be.visible")
  }

  newCampaignDropdown(dropdownName){
    cy.xpath("//label[text()='"+dropdownName+"']/parent::div/div")
  }

  verifyAnswerMachineEnableButton(){
    cy.get(AnswerMachingDetectionEnable).should("be.visible")
  }
  
  verifyAnswerMachineDisableButton(){
    cy.get(AnswerMachineDetectionDisable).should("be.visible")
  }

  verifyCallRecordingEnable(){
    cy.get(callRecordingEnable).should("be.visible")
  }

  verifyCallRecordingDisable(){
    cy.get(callRecordingDisable).should("be.visible")
  }

  verifyCallerIDGroup(){
    cy.get(callerIDGroup).should("be.visible")
  }

  verifyCallOrder(order){
    cy.get("//label[text()='"+order+"']").should("be.visible");
  }


}
