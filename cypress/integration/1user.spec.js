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

  it('Should delete the added user', () => {
    addUser.clickingOnUserOption();
    addUser.deleteAddedContact(
      fixtureData.userFirstname,
      fixtureData.userLastname + randNum.toString()
    );
    addUser.handleAlertForDelete();
    addUser.verifyDeletedToast();
  });

  it('Verify Search Box is visible', function () {
    addUser.verifySearchBox();
  });

  it('User should search using Search Box', function () {
    addUser.searchUser('qa supervisor');
    addUser.verifySearchedUser();
  });

  it('verify Dropdowns present on user page', function () {
    addUser.verifyRoleDropdown();
    addUser.verifyGroupsDropdown();
    addUser.verifyAddNewUserButton();
  });

  it('Role dropdown should show the selected role', function () {
    addUser.clickRoleDropdown();
    addUser.clickAdminstratorRole('Adminstrators');
  });

  it('verify Agent Statuses Heading and All Statuses', function () {
    addUser.clickingOnUserOption();
    addUser.verifyAgentStatusesHeading();
    addUser.verifyAgentStatusesType([
      'Available',
      'Break',
      'Lunch',
      'In training',
      'Out of desk',
      'Offline',
      'In Meeting',
      'PrepWork',
      'After Call',
    ]);
  });

  it('verify New user Page Element', function () {
    addUser.clickAddNewUserButton();
    addUser.verifyFirstName();
    addUser.verifyLastName();
    addUser.verifyRoleDropdownNewUser();
    addUser.verifyEmailField();
    addUser.verifyPasswordField();
    addUser.verifyPhoneNumber();
    addUser.verifyAssignToGroup();
    addUser.verifyCancelButton();
    addUser.verifySaveButton();
    addUser.verifySecondPhoneField();
    addUser.clickCancelButton();
  });

  it('Verify Elements of table headers', function () {
    addUser.verifyUserTableHeadings([
      'Name',
      'Status',
      'Role',
      'Group',
      'Campaigns',
      'Added',
    ]);
  });

  it('Verify User Edit and Delete Button', function () {
    addUser.verifyUserEditButton();
    addUser.verifyUserDeleteButton();
  });
});
