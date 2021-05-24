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

  it('Verify the Dashboard Elements', () => {
    suprevisor.verifyDashboardElementsBox([
      'Average Call Duration',
      'Average Wait Time',
      'Average Abandon Time',
      'Average Calls Per Agent Daily',
      'Active Campaigns',
      'Active agents',
      'Active Numbers',
      'Total DNC',
      'Total Calls',
      'Total Connects',
      'Leads Generated',
      'Average Agent Wait Time',
    ]);
    suprevisor.verifyDashboardGraphElementsBox([
      'Calls Summary',
      'Responsiveness',
      'Agents',
      'Total Calls',
      'Call Results',
      'Calls Locations',
      'Average Call Duration',
    ]);
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

  it('Verify the Reports SubMenu Items', () => {
    suprevisor.clickReportsMenu();
    suprevisor.verifyReportsHeaderElements([
      'Live',
      'Recent Contacts',
      'Campaigns',
      'Agents',
      'Numbers',
      'Heat Map',
      'Floor Map',
    ]);
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

  it('Verify the Agents Name in Reports Agent section', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.verifyReportsAgentName(testData.agent);
    suprevisor.verifyReportsAgentName(testData.AdminName);
  });

  it('verify the Agents Details in the Reports Agent section', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.clickAgentsDetailsPlusBtn();
    suprevisor.verifyAgentsDetails([
      'Answered',
      'Appointments',
      'Leads',
      'Total',
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

  it('Verify the Elements of Campaign section of Reports page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Campaigns');
    suprevisor.verifyAllStatusDropdown();
    suprevisor.verifyAllAgentsDropdown();
    suprevisor.verifyExportButton();
    suprevisor.verifyDatePicker();
  });

  it('Verify the Table headings of the Campaing section of Reports page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Campaigns');
    suprevisor.verifyCampaignsTableHeading([
      'Campaign',
      'Status',
      'Dials',
      'Answered',
      'BU',
      'CB',
      'NA',
      'Agents',
      'Contacts',
      'Completed',
    ]);
  });

  it('Verify the Elements of Number section in Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Numbers');
    suprevisor.verifySearchBox();
    suprevisor.verifyDatePicker();
    suprevisor.verifyExportButton();
  });

  it('Verify the Table headings og Number section in Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Numbers');
    suprevisor.verifyNumberSectionTableHeadings([
      'Phone Number',
      'Destination',
      'Inbound',
      'Outbound',
      'Added',
    ]);
  });

  it('Verify the Elements of Agent Heap Map in Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Heat Map');
    suprevisor.verifyAllGroupsDropdown();
    suprevisor.verifyReportHeatRangePicker();
    suprevisor.verifyRangeSelectRadioBtns(['Day', 'Week', 'Month']);
  });

  it(`Verifies the Floor Map Elements for Supervisor`, () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Floor Map');
    suprevisor.verifyAddNewFloorButton();
  });
});
