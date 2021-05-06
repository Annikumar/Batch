import Agent from '../support/pages/Agent';
import Campaign from '../support/pages/Campaigns';

let testData;
let randNum = Math.floor(Math.random() * 100000);
const agent = new Agent();
const addCamp = new Campaign();
let fixtureData;
describe('Agent Profile', function () {
  before(() => {
    cy.readFile('cypress/fixtures/testData.json').then(
      (data) => (testData = data)
    );
    cy.fixture('constants').then((data) => (fixtureData = data));

    cy.visit('/', { failOnStatusCode: false });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    agent.selectAgentStatus('Offline');
    cy.Logout();
  });

  it('Agent Should Login Successfully', () => {
    cy.Login(testData.AgentEmail, testData.password);
  });

  it('Verifies the Dashboard Elements', () => {
    agent.verifyAverageCallDurationBox();
    agent.verifyAverageWaitTimeBox();
    agent.verifyAverageAbandonTimeBox();
    agent.verifyTotalCallsBox();
    agent.verifyTalkingTimeBox();
    // agent.verifyRemainingLeadsBox();
    agent.verifyActiveCampaignsBox();
    agent.verifyCallResultsBox();
    agent.verifyCallsSummaryBox();
    agent.verifyTotalCallsGraph();
    agent.verifyAverageCallDurationGraph();
    agent.verifyCallsLocationGraph();
  });

  it('Agent should not access the edit/view Campaign page', () => {
    agent.clickCampaignMenu();
    agent.selectCampaignName(testData.campaign);
    agent.verifyAccessDeniedMsg();
  });

  it('Verify it open Select Campaign Window when selecting Available Status', () => {
    agent.selectAgentStatus('Available');
    agent.verifySelectCampaignBox();
    agent.selectCampaign(testData.campaign);
    agent.clickConfirmButton();
    agent.clickCloseSoftphoneBtn();
  });

  it('Verify the Active Campaign count when Agent become available', () => {
    agent.clickDashboardMenu();
    cy.reload();
    cy.wait(1000);
    agent.verifyActiveCampaignCount();
  });

  it('Verify the Total Calls should increase when agent call a contact', () => {
    agent.getTotalCallsCount();
    agent.clickingOnContactOption();
    // agent.enterSearch('New User');
    agent.clickContactName();
    agent.clickPhoneNumber();
    agent.clickCallBtn();
    cy.wait(1000);
    agent.clickEndCallBtn();
    agent.verifyCallResultWindow();
    agent.selectCallResult('Call Back');
    agent.clickContinueBtn();
    agent.clickDashboardMenu();
    cy.reload();
    cy.wait(1000);
    agent.clickingOnContactOption();
    cy.wait(2000);
    agent.clickRecentContact();
    cy.wait(2000);
    agent.clickDashboardMenu();
    cy.wait(1000);
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      agent.verifyTotalCallsCount(data.TotalCallsCount);
    });
  });

  it('Schedules Follow Up Call for a Contact', () => {
    agent.clickingOnContactOption();
    agent.enterSearch(testData.Contact);
    agent.clickOnContactName(testData.Contact);
    agent.clickFollowUpCall();
    agent.selectDateToFollowUpCall('10,July 2021');
    cy.wait(1000);
    agent.clickSaveButton();
    cy.wait(1000);
    agent.verifyScheduledFollowUpCall(testData.Contact);
    agent.clickCloseButton();
  });

  it('Add a Note to the Contact', () => {
    agent.clickingOnContactOption();
    agent.enterSearch(testData.Contact);
    agent.clickOnContactName(testData.Contact);
    agent.clickNotesBtn();
    agent.clickAddNewNoteBtn();
    agent.enterNote('Hello');
    cy.wait(1000);
    agent.clickSaveButton();
    agent.verifyAddedNote('Hello', 'exist');
  });

  it('Delete the Added Note', () => {
    agent.clickingOnContactOption();
    agent.enterSearch(testData.Contact);
    agent.clickOnContactName(testData.Contact);
    agent.clickNotesBtn();
    agent.clickDeletNoteBtn('Hello');
    agent.verifyAddedNote('Hello', 'not.exist');
  });

  it('Verify Recent Contact dropdowns should be visible', () => {
    agent.clickRecentContact();
    agent.verifyRecentContactDropdown([
      'Inbound+Outbound',
      'Call Results',
      'All Campaigns',
      'All Durations',
      '',
    ]);
  });

  it('Verify Recent Contact Table Header Element', () => {
    agent.verifyTableHeaderElements([
      'Call Type',
      'Date/Time',
      'Call From',
      'Customer Number',
      'Customer Name',
      'Campaign',
      'Call Result',
      'Duration',
    ]);
  });

  it('Verify Table In Header Calender and Export should be Visible', () => {
    agent.clickTimeInStatusButton();
    agent.verifyTableInStatusCalender();
    agent.verifyTableInStatusExport();
  });

  it('Verify Table In Status Table Header Elements', () => {
    agent.verifyTableInStatusTableHeader([
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

  it('Verify Table In Status Table Data should be visible', () => {
    agent.verifyTableInStatusTableData();
  });
  it('Verify Elements On Contact Page', () => {
    agent.clickOnContactButton();
    agent.verifySearchBox();
    agent.checkRoundAndCheckBtns();
    agent.selectAllRoundBtn();
    agent.clickOnAppointmentMadeOnlyBtn();
    agent.clickOnSelfMadeButton();
    agent.selectAllRoundBtn();
  });
  it('Verify Table In Contact Table Header Elements', () => {
    agent.veirifyConatactTableHeader([
      'Full Name',
      'Score',
      'Phone Number',
      'Dialed',
      'Last Contact',
      'Address',
      'Email',
      'Lists',
      'Created',
    ]);
  });
  it('Verify Refersh Button On Contact Page Table Header', () => {
    agent.verifyRefreshBtn();
  });
  it('Verify All List Button On Contact Page Table', () => {
    agent.verifyListButton();
  });
  it('Verify The Elements On Campaign Page', () => {
    agent.clickCampaignMenu();
    agent.verifyEquityBox([
      'Active Campaigns',
      'Paused Campaigns',
      'Completed Campaigns',
      'Archived Campaigns',
    ]);
    agent.verifySearchBoxOnCampaign();
    agent.veriffyStatusBtn();
    agent.verifyAgentBtn();
  });
  it('Verify The Table On Campaign Table Header Element', () => {
    agent.verfyCampaignTableHeader([
      'Name',
      'Mode',
      'Status',
      'Total Leads',
      'New Leads Left',
      'Redials Left',
      'Deals',
      'Answered',
      'Voicemail',
      'Abandon',
      'Agents',
      'DNC',
      'DNR',
      'Created',
    ]);
  });
  it('Verify The Elements On The Page Of View Contact On Contact Page', () => {
    agent.clickingOnContactOption();
    agent.clickContactName();
    agent.vierifyTheHeaderOfViewContact(['Address', 'Phone']);
    agent.verifyContactViewBtn();
    agent.verifyZillowBtn();
    agent.verifyGoogleMapsBtn();
    agent.verifyLeadInfoBtn();
    agent.verifyCallsInfoInHeder();
    agent.verifyVoiceMailInfo();
    agent.verifyPropertyDetailsBtn();
    agent.verifyCampaignBtn();
    agent.verifyNotesBtn();
  });
  it('Verify The Elements On Edit Form Of View Contact', () => {
    agent.verifyEdiitFormOnViewContact([
      'First name',
      'Last name',
      'Address',
      'City',
      'State',
      'Postal Code',
      'Mailing Address',
      'Mailing City',
      'Mailing State',
      'Mailing Postal Code',
      'Contact List',
      'Phone 1',
      'Email',
    ]);
    //agent.verifySaveBtn();
  });
  it('Verify The Script Body On View Contact Page', () => {
    agent.verifyScriptBody();
  });
  it('Verify the Script Minimize Button On contact View Page', () => {
    agent.VerifyscriptMinimizeBtn();
  });
  it('Verify Activities Page On View Contact Page', () => {
    agent.clickOnactivitiesBtn();
    agent.verifyActivitiesPage('Recent Activities');
  });

  it('Verify The Campaign Page On View Contact Of Contacts', () => {
    agent.clickOnCampaignBtnOnViewContact();
    agent.verifyViewContactCampaignTableHeader([
      'Campaign',
      'Call From',
      'Agent',
      'Disposition',
      'Date',
    ]);
  });
  it('Verify Note Page Is Opening On the View Contact', () => {
    agent.clickOnNotesBtnOnViewContact();
    agent.clickOnAddNewNoteBtn();
    agent.verifyAddNewNotePage();
    agent.clickOnAddNoteCloseBtn();
  });
  it('Verify the Text On Agent Profile', () => {
    agent.clickOnAgentProfileDropDown();
    agent.clickOnagentProfile();
    agent.verifyElementsOfAgentProfile([
      'First Name',
      'Last Name',
      'Email',
      'Address',
      'City',
      'State',
      'Zip Code',
      'Mobile Phone',
      'Landline',
      'Timezone',
      'Profile Photo',
      'Password',
    ]);
  });
  it('Verify The Elements On Agent Profile', () => {
    agent.verifyAgentFirstNameInputBox();
    agent.verifyAgentLastNameInputBox();
    agent.verifyAgentEmailInputBox();
    agent.verifyAgentAddressInputBox();
    agent.verifyAgentCityInputBox();
    agent.verifyAgentStateDropDown();
    agent.verifyAgentZipCodeInputBox();
    agent.verifyAgentMobileNumberInputBox();
    agent.verifyAgentLandLineNumberInputBox();
    agent.verifyAgentTimeZoneDropDown();
    agent.verifyAgentProfilePicChangeBtn();
    agent.verifyAgentPasswordChangeBtn();
  });
  it('Verify The Change Campaign Page Elements', () => {
    agent.clickOnAgentProfileDropDown();
    agent.clickOnChangeCampaignBtn();

    agent.verifyTesxtOnChangeCampaignPage('Start Calling');
    agent.verifyConfirmBtnOnChangeCamp();
  });
  it('Verify The Header Of Calender', () => {
    agent.openCalender();
    agent.verifyDateChangeBar();
    agent.verifyDaysOfcalender([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]);
  });
  it('Verify Elements Of Calendar On Dashboard', () => {
    agent.clickOnDashboardBtn();
    agent.openCalenderOnDashBoard();
    agent.verifyCalenderSideBar([
      'Today',
      'Last 7 days',
      'Last 4 weeks',
      'Last 3 months',
      'Last 12 months',
      'Month to date',
      'Quarter to date',
      'Year to date',
    ]);
    agent.verifyCalenderFromDateToDate();
    agent.verifyDaysOfCalender([
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ]);
    agent.verifyMonthChangeBnts();
    agent.verifyMonthYearStatusBar();
  });
  it('Verify The Summary Of Agent In Time In Status Of Recent Contacts', () => {
    agent.clickRecentContact();
    agent.clickTimeInStatusButton();
    agent.clickOnAgentDetailsPlusBtn([
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

  it('Verify it Open the Dialing Keypad when we click on Phone number in Contact View Page', () => {
    agent.clickingOnContactOption();
    // agent.enterSearch('New User');
    agent.clickContactName();
    agent.clickPhoneNumber();
    agent.verifySoftphoneOpen();
  });

  it('Open the Call Result Window when Agent disconnect the Call', () => {
    agent.clickingOnContactOption();
    // agent.enterSearch('New User');
    agent.clickContactName();
    agent.clickPhoneNumber();
    agent.clickCallBtn();
    cy.wait(2000);
    agent.clickEndCallBtn();
    agent.verifyCallResultWindow();
    agent.selectCallResult('Call Back');
    agent.clickContinueBtn();
  });

  it('Verify the Recent Contacts Page Landing', () => {
    agent.clickRecentContact();
    agent.verifyRecentContactPage();
  });

  it('Verifies the Edit button functionality for Recent Contacts', () => {
    agent.clickRecentContact();
    agent.clickEditRecentContact();
    agent.verifyCallResultWindow();
  });

  // Fixed Test case on 5 March accordint to BAT-750
  it('Edit the Call Result of Recent Contacts', () => {
    agent.clickRecentContact();
    agent.clickEditRecentContact();
    agent.verifyCallResultWindow();
    agent.selectCallResult('Busy');
    agent.clickContinueBtn();
    cy.wait(2000);
    agent.verifyCallResult('Busy');
    agent.ChooseCallResult('Call Back');
  });

  it.skip('Verify When Admin Assign Campaign to user it should show in agent Profile', () => {
    cy.Login(Cypress.env('username'), Cypress.env('password'));
    addCamp.clickCampaignMenu();
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    cy.wait(2000);
    addCamp.enterName(fixtureData.campaignName + randNum.toString());
    addCamp.selectDialingModeOption('Predictive Dialer');
    addCamp.selectCallerId('Individual Numbers', testData.Number);
    addCamp.clickNextCircleArrow();
    addCamp.selectCallResultsOption(['Answering Machine', 'Busy', 'Call Back']);
    addCamp.clickNextCircleArrow();
    addCamp.selectAgentsDrpdwn('Individual Agents', testData.agent);
    // agent.selectAgent();
    // agent.ClickAgent();
    addCamp.clickCreateCampButton();
    cy.Logout();
    cy.wait(4000);
    cy.visit('/', { failOnStatusCode: false });
    cy.Login(testData.AgentEmail, testData.password);
    agent.clickCampaignMenu();
    agent.verifyCampaign(fixtureData.campaignName + randNum.toString());
    cy.Logout();
    cy.wait(4000);
    cy.visit('/', { failOnStatusCode: false });
    cy.Login(Cypress.env('username'), Cypress.env('password'));
    addCamp.clickCampaignMenu();
    addCamp.clickEditCampaign(fixtureData.campaignName + randNum.toString());
    addCamp.clickArchiveCampaignButton();
    addCamp.handleAlertForDelete();
    addCamp.verifyArchivedCampaign(
      fixtureData.campaignName + randNum.toString(),
      'not.exist'
    );
  });

  it('Verifies the Call transfer Continue and Cancel Button', () => {
    agent.ChooseCallResult('Call Back');
    agent.clickingOnContactOption();
    // agent.enterSearch('New User');
    agent.clickContactName();
    agent.clickPhoneNumber();
    agent.clickCallBtn();
    agent.clickCallTransferBtn();
    agent.verifyContinueBtn();
    agent.verifyCancelBtn();
    agent.clickCancelBtn();
    agent.clickEndCallBtn();
    agent.selectCallResult('Call Back');
    agent.clickContinueBtn();
    agent.ChooseCallResult('Call Back');
  });
});
