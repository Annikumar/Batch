import AddContacts from "../support/pages/AddContacts";

let fixtureData;
let randNum = Math.floor(Math.random() * 100);
const addCont = new AddContacts();

describe(" Login Successfully and Add Contact", () => {
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

  it("Should Add Contact using Create New option", () => {
    addCont.clickingOnContactOption();
    cy.wait(3000);
    addCont.clickAddNewContactButton();
    addCont.selctCreateNewContactOption();
    addCont.enterFirstName(fixtureData.userFirstname);
    addCont.enterLastName(fixtureData.contactLastname + randNum.toString());
    addCont.enterAddress("anyAddress");
    addCont.enterCity("Tucson");
    addCont.selectState("Arizona");
    addCont.enterZipCode("85701");
    addCont.enterEmail(
      fixtureData.contactEmail.replace(
        "automation-contact",
        "automation-contact" + randNum.toString()
      )
    );
    addCont.enterPhoneNumber("0123456789");
    addCont.clickSaveButton();
    addCont.verifySuccessToast();
  });

  it("Should show added contacts in table", () => {
    addCont.clickingOnContactOption();
    addCont.verifyAddedContacts(
      fixtureData.userFirstname,
      fixtureData.contactLastname + randNum.toString()
    );
  });

  it("Should delete the added Contact", () => {
    addCont.clickingOnContactOption();
    addCont.deleteAddedContacts(
      fixtureData.userFirstname,
      fixtureData.contactLastname + randNum.toString()
    );
    addCont.handleAlertForDelete();
    addCont.verifyDeletedToast();
  });

  it("Should add contact using upload file", () => {
    addCont.clickingOnContactOption();
    addCont.clickAddNewContactButton();
    addCont.selectUploadFileOption();
    addCont.uploadFileForContact();
    cy.wait(2000);
    addCont.selectFirstNameDropdown();
    addCont.selectLastNameDropdown();
    addCont.selectEmailDropdown();
    addCont.selectPhoneDropdown();
    addCont.clickNextButton();
    addCont.clickSubmitButton();
    addCont.verifyImportStartedToast();
    addCont.verifyImportContactCompleteToast();
    cy.wait(3000);
  });

  it("Should show added contacts in table", () => {
    addCont.clickingOnContactOption();
    addCont.verifyAddedContacts("Automation", "CSV1");
  });

  it("Should delete the added Contact", () => {
    addCont.clickingOnContactOption();
    addCont.deleteAddedContacts("Automation", "CSV1");
    addCont.handleAlertForDelete();
    addCont.verifyDeletedToast();
  });
});
