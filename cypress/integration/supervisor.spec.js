import Suprevisor from '../support/pages/Supervisor';

let testData;
const suprevisor = new Suprevisor();
let randNum = Math.floor(Math.random() * 100000);

describe('SuperVisor Flow', () => {
  before(() => {
    cy.readFile('cypress/fixtures/testData.json').then(
      (data) => (testData = data)
    );
    cy.visit('/', { failOnStatusCode: false });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    cy.Logout();
  });

  it('Supervisor Should Login Successfully', () => {
    cy.Login(testData.SupervisorEmail, testData.password);
  });

  it('Verify View Button Functionality for Contacts', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickViewBtn('New', 'User');
    suprevisor.verifyViewForm();
  });

  it('Verify Add Contact using Create New option', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickAddNewContactButton();
    suprevisor.selctCreateNewContactOption();
    suprevisor.verifyEditForm();
  });

  it('Verify Add Contact using Upload File option', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickAddNewContactButton();
    suprevisor.selectUploadFileOption();
    suprevisor.verifyUploadForm();
  });

  it('Verifies the Profile Page', () => {
    suprevisor.clickUserProfile();
    suprevisor.clickprofileButton();
    suprevisor.verifyProfilePage();
  });

  // Fixed according to the BAT-747
  it('Verify Supervisor can Login as Agent', () => {
    suprevisor.clickDashboardMenu();
    suprevisor.clickLoginAsBtn();
    suprevisor.clickOpenUser();
    suprevisor.loginWithUser(testData.agent);
    suprevisor.verifyLogin(testData.agent);
    suprevisor.clickOnProfile();
    suprevisor.clickBackToSupervisor();
    suprevisor.verifySupervisorProfile();
  });

  it('Verify the Reports Header Elements', () => {
    suprevisor.clickReportsMenu();
    suprevisor.verifyReportsHeaderElements([
      'Live',
      'Recent Contacts',
      'Campaigns',
      'Agents',
      'Numbers',
      'Agents Heat Map',
      'Floormap',
    ]);
  });

  it(`Verifies that the Supervisor don't have access to FloorMap`, () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Floormap');
    suprevisor.verifyFloorMapAccessDenied();
  });

  it('Verify the Live section Elements of Report', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Live');
    suprevisor.verifyReportLiveElements([
      'Talking Time',
      'Active Calls',
      'Active Campaigns',
      'Missed Calls',
      'Abandoned Calls',
      'Remaining Redials',
      'Online Agents',
      'Remaining Leads',
      'In Queue',
      'Paused Agents',
      'Dialing Ratio',
      'Average Agent Wait Time',
    ]);
  });

  it('Verify the Recent Contact Elements of Report Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Recent Contacts');
    suprevisor.verifyInboundOutboundDropdown();
    suprevisor.verifyAllAgentsDropdown();
    suprevisor.verifyCallResultsDropdown();
    suprevisor.verifyAllDurationsDropdown();
    suprevisor.verifyAllCampaignsDropdown();
    suprevisor.verifyDatePicker();
    suprevisor.verifyExportButton();
  });

  it('Verify the Recent Contacts Table Headings', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Recent Contacts');
    suprevisor.verifyRecentContactsTableHeadings([
      'Call Type',
      'Date/Time',
      'Call From',
      'Customer Number',
      'Customer Name',
      'Agent',
      'Campaign',
      'Call Result',
      'Duration',
    ]);
  });

  it('Verify the Elements of Agent Section for Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.verifyDepartmentsDropdown();
    suprevisor.verifyAllCampaignsDropdown();
    suprevisor.verifyDatePicker();
    suprevisor.verifyExportButton();
  });

  it('Verify the Agents Table Headings', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.verifyRecentContactsTableHeadings([
      'Agent',
      'Logged Time',
      'Calls',
      'Answered',
      'Abandon',
      'Abandon Rate',
      'Available',
      'Break',
      'Lunch',
      'In training',
      'Out of desk',
      'On Call',
      'Wrap Up Time',
      'In Meeting',
      'Auto Pause',
      'PrepWork',
      'After Call',
    ]);
  });
});
