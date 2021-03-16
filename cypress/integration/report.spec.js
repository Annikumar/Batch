import Report from '../support/pages/Report';

const report = new Report();
let fixtureData;

describe('Report Page', function () {
  before(() => {
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

  it('verify report header element', function () {
    report.clickReportMenu();
    report.reportHeaderElement([
      'Live',
      'Recent Contacts',
      'Campaigns',
      'Agents',
      'Numbers',
    ]);
  });

  it('verify report live elements', function () {
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
      'Avgerage Agent Wait Time',
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
    report.clickRecentContactButton();
    report.verifyRecentContactsDropdown([
      'Inbound+Outbound',
      'Call Results',
      'All Agents',
      'All Campaigns',
      'All Durations',
      'Export',
    ]);
  });

  it('verify report table header element for Report Contact', function () {
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
    report.clickReportCampaignsButton();
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
    report.clickAgentButton();
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
    report.clickNumberButton();
    report.verifyReportTableHeaderElements([
      'Phone Number',
      'Destination',
      'Inbound',
      'Outbound',
      'Added',
    ]);
  });

  it('Verify Functionality of search Button and Designation Dropdown', function () {
    report.searchNumber('9283662821');
    report.verifySearchedNumber('Sandeep Kumar');
  });

  it('Verify All status dropdown should show statuses', () => {
    report.clickReportCampaignsButton();
    report.clickCampaignStatusDropdown();
    report.verifyStatusDropdownElements([
      'All Statuses',
      'Active',
      'Paused',
      'Complete',
      'Deleted',
    ]);
  });

  it('Verify On click of campaign calender it should open calender', () => {
    report.clickCampaignCalanderDropdown();
    report.verifyCalender();
  });

  it('verify Calender Elements', () => {
    report.verifyCalenderTimeline([
      'Today',
      'This Week',
      'Past 3 Months',
      'Past 6 Months',
      'Past 12 Months',
      'This Year',
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
});
