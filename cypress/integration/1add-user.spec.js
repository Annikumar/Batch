import AddUser from "../support/pages/AddUser";

let fixtureData;
let randNum = Math.floor(Math.random() * 100);
const addUser = new AddUser();

describe("Login Successfully and Add User", () => {
  before(() => {
    // To add random number in constants.json
    cy.readFile("cypress/fixtures/constants.json", (err, data) => {
      if (err) {
        return console.error(err);
      }
    }).then((data) => {
      data.randNum = randNum;
      cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
    });

    cy.fixture("constants")
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
      });
  });

  it("Should Login", () => {
    cy.Login(fixtureData.username, fixtureData.password);
  });

  it("Should Add User for Agent role", () => {
    addUser.clickingOnUserOption();
    //cy.wait(3000);
    addUser.clickAddNewUserButton();
    //cy.log(randNum);
    addUser.enterFirstName(fixtureData.userFirstname);
    addUser.enterLastName(fixtureData.userLastname + randNum.toString());
    addUser.selectROle("Agent");
    //cy.log(randNum);
    addUser.enterEmail(
      fixtureData.userEmail.replace(
        "automation",
        "automation" + randNum.toString()
      )
    );
    addUser.enterPassword(fixtureData.userPassword);
    addUser.enterPhoneNumber("0123456789");
    addUser.clickSaveButton();
    addUser.verifySuccessToast();
  });

  it("Should show added user in table", () => {
    addUser.clickingOnUserOption();
    addUser.verifyAddedUser(
      fixtureData.userFirstname,
      fixtureData.userLastname + randNum.toString()
    );
  });

  it.skip("Should delete the added user", () => {
    addUser.clickingOnUserOption();
    addUser.deleteAddedUser(
      fixtureData.userFirstname,
      fixtureData.userLastname + randNum.toString()
    );
    addUser.handleAlertForDelete();
    addUser.verifyDeletedToast();
  });
});
