import User from '../support/pages/User';
import Dashboard from '../support/pages/Dashboard';
import { selectAgentStatus } from '../support/Utils';

let fixtureData;
let testData;
let randNum = Math.floor(Math.random() * 100000);
const addUser = new User();
var count;
const Dash = new Dashboard();

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

    cy.fixture('testData').then((data) => (testData = data));

    cy.fixture('constants')
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit('/', { failOnStatusCode: false });
      });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    selectAgentStatus('Offline');
    cy.Logout();
  });

  it('Should Login', () => {
    cy.Login(Cypress.env('username'), Cypress.env('password'));
    addUser.getPhoneNumber();
  });

  it('Should Add User for Agent role', () => {
    addUser.clickingOnUserOption();
    cy.wait(3000);
    addUser.clickAddNewUserButton();
    addUser.clickAddAgent();
    addUser.enterFirstName(fixtureData.userFirstname);
    addUser.enterLastName(fixtureData.userLastname + randNum.toString());
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
    addUser.searchUser(
      fixtureData.userFirstname +
        ' ' +
        fixtureData.userLastname +
        randNum.toString()
    );
    addUser.verifyAddedUser(
      fixtureData.userFirstname,
      fixtureData.userLastname + randNum.toString()
    );
  });

  it('Should delete the added user', () => {
    addUser.clickingOnUserOption();
    addUser.searchUser(
      fixtureData.userFirstname +
        ' ' +
        fixtureData.userLastname +
        randNum.toString()
    );
    cy.wait(2000);
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

  it('Verify the Search Functionality', function () {
    addUser.clickingOnUserOption();
    addUser.searchUser('supervisor automation');
    addUser.verifySearchedUser('supervisor automation');
  });

  it('verify Dropdowns present on user page', function () {
    addUser.verifyRoleDropdown();
    addUser.verifyGroupsDropdown();
    addUser.verifyAddNewUserButton();
  });

  it('Role dropdown should show the selected role', function () {
    addUser.clickRoleDropdown();
    addUser.clickAdminstratorRole('Administrators');
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

  it('verify Add New Agent Page Element', function () {
    addUser.clickAddNewUserButton();
    addUser.clickAddAgent();
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

  it('verify Add New Supervisor Page Element', function () {
    addUser.clickAddNewUserButton();
    addUser.clickAddSupervisor();
    addUser.verifyFirstName();
    addUser.verifyLastName();
    addUser.verifyRoleDropdownNewUser();
    addUser.verifyEmailField();
    addUser.verifyPasswordField();
    addUser.verifyPhoneNumber();
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

  it('Should add a new Agent Status', () => {
    addUser.clickingOnUserOption();
    addUser.clickAddAgentStatus();
    addUser.enterAgentStatusName('Working');
    addUser.clickOnAgentStatusSaveBtn();
    addUser.verifyAddedAgentStatus('Working');
  });

  it('Remove the Added Agent Status', () => {
    cy.wait(1000);
    addUser.clickingOnUserOption();
    addUser.removeAddedAgentStatus('Working');
    addUser.verifyRemovedAgentStatus();
  });

  it('Should add a new Agent Group', () => {
    addUser.clickingOnUserOption();
    addUser.clickAddAgentGroup();
    addUser.enterAgentGroupName('Working');
    addUser.clickOnAgentGroupSaveBtn();
    addUser.verifyAddedAgentGroup('Working');
  });

  it('Remove the Added Agent Group', () => {
    addUser.clickingOnUserOption();
    addUser.removeAddedAgentGroup('Working');
    addUser.verifyRemovedAgentGroup('Working');
  });

  it('Agent count should increase when admin add agent', async () => {
    Dash.clickUserProfile();
    Dash.clickBilling();
    count = await addUser.getTotalAgentCount();
    cy.log(count);
  });

  it('Create Agent and Verify count', () => {
    addUser.clickingOnUserOption();
    cy.wait(3000);
    addUser.clickAddNewUserButton();
    addUser.clickAddAgent();
    addUser.enterFirstName(fixtureData.userFirstname);
    addUser.enterLastName(fixtureData.userLastname + randNum.toString());
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
    Dash.clickUserProfile();
    Dash.clickBilling();
    addUser.verifyAgentCount(count);
  });

  it('Verify Validation on fields on Add new user page', () => {
    addUser.clickingOnUserOption();
    cy.wait(3000);
    addUser.searchUser(
      fixtureData.userFirstname +
        ' ' +
        fixtureData.userLastname +
        randNum.toString()
    );
    cy.wait(2000);
    addUser.deleteAddedContact(
      fixtureData.userFirstname,
      fixtureData.userLastname + randNum.toString()
    );
    addUser.clickAddNewUserButton();
    addUser.clickSaveButton();
    addUser.verifyFieldValidation([
      'Enter First Name',
      'Enter Last Name',
      'Enter Password',
      'Enter Email',
      'Enter Phone',
    ]);
    addUser.clickCancelBtn();
  });
});
