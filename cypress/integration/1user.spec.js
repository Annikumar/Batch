import User from '../support/pages/User';

let fixtureData;
let randNum = Math.floor(Math.random() * 100000);
const addUser = new User();

describe('Login Successfully and Add User', () => {
  before(() => {
    // To add random number in constants.json
    cy.readFile('cypress/fixtures/constants.json', (err, data) => {
      if (err) {
        return console.error(err);
      }
    }).then((data) => {
      data.randNum = randNum;
      cy.writeFile('cypress/fixtures/constants.json', JSON.stringify(data));
    });

    cy.fixture('constants')
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit(fixtureData.url, { failOnStatusCode: false });
      });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    cy.Logout();
  });

  it('Should Login', () => {
    cy.Login(fixtureData.username, fixtureData.password);
  });

  it('Should Add User for Agent role', () => {
    addUser.clickingOnUserOption();
    cy.wait(3000);
    addUser.clickAddNewUserButton();
    //cy.log(randNum);
    addUser.enterFirstName(fixtureData.userFirstname);
    addUser.enterLastName(fixtureData.userLastname + randNum.toString());
    addUser.selectROle('Agent');
    //cy.log(randNum);
    addUser.enterEmail(
      fixtureData.userEmail.replace(
        'automation',
        'automation' + randNum.toString()
      )
    );
    addUser.enterPassword(fixtureData.userPassword);
    addUser.enterPhoneNumber('0123456789');
    addUser.clickSaveButton();
    addUser.verifySuccessToast();
  });

  it('Should show added user in table', () => {
    addUser.clickingOnUserOption();
    addUser.verifyAddedUser(
      fixtureData.userFirstname,
      fixtureData.userLastname + randNum.toString()
    );
  });

  it.skip('Should delete the added user', () => {
    addUser.clickingOnUserOption();
    addUser.deleteAddedUser(
      fixtureData.userFirstname,
      fixtureData.userLastname + randNum.toString()
    );
    addUser.handleAlertForDelete();
    addUser.verifyDeletedToast();
  });

  it("Verify Search Box is visible", function () {
    addUser.verifySearchBox();
  });

  it("User should search using Search Box", function () {
    addUser.searchUser("qa supervisor");
    addUser.verifySearchedUser();
  });

  it("verify Dropdowns present on user page",function(){
    addUser.verifyRoleDropdown();
    addUser.verifyGroupsDropdown();
  });

  it("Role dropdown should show the selected role",function(){
    addUser.clickRoleDropdown();
    addUser.clickAdminstratorRole("Adminstrators");
  })




});
