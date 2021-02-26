import promisify from "cypress-promise";

const phoneNumMenu = 'a[title="Phone System"]';
const buyDidbtn = '//button[contains(text(),"BUY DID")]';
const stateDrpdwn =
  '//div[@class="modal-body"]//div[contains(@class,"ss-select")]//span[contains(text(),"Select state")]';
const searchBtn = '.modal-body button svg[data-icon="search"]';
const firstNum = '//div[@class="modal-body"]//div[@class="numbers"]/div[1]';
const firstNumberChkBx =
  '//div[@class="modal-body"]//div[@class="numbers"]/div[1]//input';
const orderNow = '.btn svg[data-icon="shopping-cart"]';
// const orderNow = '//button[contains(text(),"Order Now")]';
const dropdownOptions = ".ss-select-group-items";
const searchToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Search started")]';
const closeBtn = '//button[contains(text(),"Close")]';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Number deleted")]';
const assignToDrpdwn = '//div[span[contains(text(),"User extension")]]';
const ivrAttendent = 'a[title="IVR/Auto Attendant"]';
const newIvr = '//button[text()=" NEW IVR"]';
const ivrName = 'input[name="name"]';
const ivrDescription = 'input[name="description"]'
const clickselectCampaign = '//span[text()="Select Campaign"]'
const selectFromDropdown = '.ss-select-dropdown'
const phoneNumber = '//span[text()="Select Numbers"]'
const newWelcomePrompt = '//button[text()=" ADD NEW"]'
const recordingName = '.modal-body input[name="name"]'
const textToSpeech = 'button[value="generate"]'
const recordingText = 'textarea[name="text"]'
const generateButton = '//button[text()="Generate"]'
const speech = '.progress'
const recordingSaveButton = "//div[@class='modal-footer']//button[text()=' SAVE']"
const ivrSaveButton = ".modal_btn button[class*='save']"
const saved = "//div[text()='Saved']"
const deleteIvr = "img[src*='delete.svg']"
const DeletedIVR = "//div[text()='IVR deleted']"



export default class PhoneNum {
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
    cy.xpath(firstNumberChkBx, { timeout: 14000 }).click();
  }

  async clickOrderNowButton() {
    await promisify(cy.get(orderNow).click({ force: true }));
  }

  async closingDialog() {
    await promisify(cy.xpath(closeBtn).click());
  }

  async getFirstPhoneNumber() {
    const totalAmt = await promisify(cy.xpath(firstNum));
    return totalAmt.text().trim();
  }

  verifysearchStartedToast() {
    cy.xpath(searchToast, { timeout: 5000 }).should("be.visible");
  }

  verifyAddedPhoneNum(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + num + '")]',
      { timeout: 10000 }
    ).should("be.visible");
  }
  verifyAddedPhoneNumNotVisible(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + num + '")]',
      { timeout: 5000 }
    ).should("not.be.visible");
  }

  deleteAddedPhoneNumber(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//tr[td[contains(.,"' +
        num +
        '")]]//span[img[contains(@src,"delete.svg")]]',
      { timeout: 5000 }
    ).click();
  }
  handleAlertForDelete() {
    cy.on("	window:alert", (str) => {
      expect(str).to.equal("Delete Number?");
    });
    cy.on("window:confirm", () => true);
  }
  verifyDeletedToast() {
    cy.xpath(deleteToast).should("be.visible");
  }

  assignAgentUser(usrName) {
    cy.xpath(assignToDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(usrName)
      .then((option) => {
        option[0].click();
      });
  }

  clickIvrAttendent(){
    cy.get(ivrAttendent).click({ force:true });
  }

  clickNewIvr(){
    cy.xpath(newIvr).click();
  }

  enterName(name){
    cy.get(ivrName).type(name);
  }

  enterDescription(desc){
    cy.get(ivrDescription).type(desc);
  }

  selectCampaign() {
    cy.xpath(clickselectCampaign).click();
    cy.get(selectFromDropdown)
      .contains("FirstCampaign")
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

  clickAddNewWelcomePrompt(){
    cy.xpath(newWelcomePrompt).click({force:true})
  }

  enterRecordingName(recording){
    cy.get(recordingName).type(recording)
  }
  clickTextToSpeech(){
    cy.get(textToSpeech).click();
  }

  enterRecordingText(text){
    cy.get(recordingText).type(text);
  }

  clickGenerateButton(){
    cy.xpath(generateButton).click();
    cy.get(speech, {timeout : 7000} ).should("be.visible")
  }

  clickRecordingSaveButton(){
    cy.xpath(recordingSaveButton).click();
    cy.wait(2000);
  }

  clickIvrSaveButton(){
    cy.get(ivrSaveButton).click({force:true})
  }

  verifySavedIvr(){
    cy.xpath(saved).should("be.visible");
  }

  deleteIVR(){
    cy.get(deleteIvr).click()
  }

  handleAlertForDelete() {
    cy.on("	window:alert", (str) => {
      expect(str).to.equal("Delete user?");
    });
    cy.on("window:confirm", () => true);
  }

  verifyDeletedIvr(){
    cy.xpath(DeletedIVR).should("be.visible");
  }


}
