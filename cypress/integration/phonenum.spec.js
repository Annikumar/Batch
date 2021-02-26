import PhoneNum from "../support/pages/PhoneNum";
import promisify from "cypress-promise";

let fixtureData;
let num;
const addNum = new PhoneNum();
let randNum = Math.floor(Math.random() * 100000);

describe("Add Phone Number flow", () => {
  before(() => {
    cy.fixture("constants")
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
      });
  });

  it.skip("Should Login", () => {
    cy.Login(fixtureData.username, fixtureData.password);
  });

  it("Should Buy Phone number successfully ", async () => {
    addNum.clickPhoneNumberMenu();
    addNum.clickBuyDidButton();
    addNum.selectStateModeOption("Arizona");
    cy.log(fixtureData.randNum);
    addNum.clickSearchButton();
    addNum.verifysearchStartedToast();
    addNum.selectPhoneNumber();
    addNum.assignAgentUser(
      fixtureData.userLastname + fixtureData.randNum.toString()
    );
    num = await addNum.getFirstPhoneNumber();
    await addNum.clickOrderNowButton();
    await addNum.closingDialog();
  });

  it("Should show added Phone number in table", () => {
    addNum.clickPhoneNumberMenu();
    addNum.verifyAddedPhoneNum(num);
  });
  it.skip("Should delete the added Phone Number", () => {
    addNum.clickPhoneNumberMenu();
    addNum.deleteAddedPhoneNumber(num);
    addNum.handleAlertForDelete();
    addNum.verifyDeletedToast();
  });

  it("Should Add New IVR",function(){
    addNum.clickPhoneNumberMenu();
    addNum.clickIvrAttendent();
    addNum.clickNewIvr();
    addNum.enterName("Testing" + randNum.toString());
    addNum.enterDescription("New Ivr");
    addNum.selectCampaign();
    addNum.selectNumber("(480) 240-5720");
    addNum.clickAddNewWelcomePrompt();
    addNum.clickTextToSpeech();
    addNum.enterRecordingName("Test"+ randNum.toString());
    addNum.enterRecordingText("Hey How Are You");
    addNum.clickGenerateButton();
    addNum.clickRecordingSaveButton();
    addNum.clickIvrSaveButton();
    addNum.verifySavedIvr();

  });


  it("Should delete IVR",function(){
    addNum.deleteIVR();
    addNum.handleAlertForDelete();
    addNum.verifyDeletedIvr();
  });

});
