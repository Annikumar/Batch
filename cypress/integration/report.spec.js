import Report from '../support/pages/Report';
import { ignoreSpeedTestPopup, selectAgentStatus } from '../support/Utils';

const report = new Report();
let fixtureData;
let testData;

describe('Report Page', function () {
  before(() => {
    cy.readFile('cypress/fixtures/testData.json').then(
      (data) => (testData = data)
    );
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
    ignoreSpeedTestPopup();
  });

  it('verify report live elements', function () {
    report.clickReportMenu();
    report.clickReportsHeader('Live');
    report.verifyReportLiveElements([
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

  it('verify report table header element', function () {
    report.verifyReportTableHeaderElements([
      'Agent',
      'Phone Number',
      'Phone Type',
      'Contact',
      'Campaign',
      'Duration',
    ]);
  });

  it('Verify dropdowns of Report contacts', function () {
    report.clickReportMenu();
    report.clickReportsHeader('Recent Contacts');
    report.clickFilterButton();
    report.verifyRecentContactsDropdown([
      'All Calls',
      'Call Results',
      'Agents',
      'Campaigns',
      'All Durations',
      'Mood',
    ]);
  });

  it('verify report table header element for Recent Contact', function () {
    report.verifyReportTableHeaderElements([
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

  it('verify Dropdowns on Report Campaign', function () {
    report.clickReportMenu();
    report.clickReportsHeader('Campaigns');
    report.VerifyDropdownsReportCampaign([
      'All Statuses',
      'All Agents',
      'Export',
    ]);
  });

  it('verify report table header element for Report Campaign', function () {
    report.verifyReportTableHeaderElements([
      'Campaign',
      'Status',
      'Dials',
      'Answered',
      'NA',
      'Agents',
      'Contacts',
      'Completed ',
    ]);
  });

  it('Verify dropdowns of Report Agent', function () {
    report.clickReportMenu();
    report.clickReportsHeader('Agents');
    report.verifyAgentsDropdowns(['Departments', 'All Campaigns', 'Export']);
  });

  it('verify report table header element for Report Agent', function () {
    report.verifyReportTableHeaderElements([
      'Agent',
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
      'Logged Time',
      'Calls',
      'Answered',
      'Abandon',
      'Abandon Rate',
    ]);
  });

  it('verify report table header element for Report Agent', function () {
    report.clickReportMenu();
    report.clickReportsHeader('Numbers');
    report.verifyReportTableHeaderElements([
      'Phone Number',
      'Destination',
      'Inbound',
      'Outbound',
      'Added',
    ]);
  });

  it('Verify Functionality of search Button and Designation Dropdown', function () {
    report.searchNumber(testData.Number);
    report.verifySearchedNumber(testData.Number);
  });

  it('Verify All status dropdown should show statuses', () => {
    report.clickReportMenu();
    report.clickReportsHeader('Campaigns');
    report.clickCampaignStatusDropdown();
    report.verifyStatusDropdownElements([
      'All Statuses',
      'Active',
      'Paused',
      'Completed',
      'Archived',
    ]);
  });

  it('Verify On click of campaign calender it should open calender', () => {
    report.clickCampaignCalanderDropdown();
    report.verifyCalender();
  });

  it('verify Calender Elements', () => {
    report.verifyCalenderTimeline([
      'Today',
      'Last 7 days',
      'Last 4 weeks',
      'Last 3 months',
      'Last 12 months',
      'Month to date',
      'Quarter to date',
      'Year to date',
    ]);
    report.verifyCalenderMonthDropdown();
    report.verifyCalenderDates();
    report.verifyCalenderDays();
  });

  it('Verify Status Dropdown Functionality', () => {
    report.clickCampaignStatusDropdown();
    report.clickActiveStatus();
    report.verifyStatusVisible('active');
    report.verifyStatusNotVisible('paused');
  });

  it.skip('Verifies the Export Functionality of Recent Contact', () => {
    report.clickReportMenu();
    report.clickReportsHeader('Recent Contacts');
    report.getDialedContactNumbers();
    report.clickExportBtn();
  });

  it('Verify Agent Heat Map Elements', () => {
    report.clickReportMenu();
    report.clickReportsHeader('Heat Map');
    report.verifyAgentHeatMapDropdown();
    report.verifyHeatMapRadioButtons(['Day', 'Week', 'Month']);
    report.verifyHeatMapDatePicker();
    // report.verifyHeatMapStatus([
    //   'Available',
    //   'Break',
    //   'Lunch',
    //   'In training',
    //   'Out of desk',
    //   'On Call',
    //   'Wrap Up Time',
    //   'Disconnected',
    //   'Offline',
    //   'In Meeting',
    //   'Auto Pause',
    //   'PrepWork',
    //   'After Call',
    // ]);
  });

  it('Verify Floor Map Elements', () => {
    report.clickReportMenu();
    report.clickReportsHeader('Floor Map');
    // report.verifyFloorMapViewDropdown();
    report.verifyAddNewFloorButton();
  });
});
