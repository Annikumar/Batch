import AddPhoneNum from "../support/pages/AddPhoneNum";
import promisify from "cypress-promise";

let fixtureData;
let num;
const addNum = new AddPhoneNum();

describe("Login Successfully and Add Phone Number", () => {
  before(() => {
    cy.fixture("constants")
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
      });
  });

  it("Should Login", () => {
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
});
