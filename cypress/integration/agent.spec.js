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

  // after(() => {
  //   agent.selectAgentStatus('Offline');
  //   cy.Logout();
  // });

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
    cy.wait(1000);
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
  });

  it('Verifies the Call transfer Continue and Cancel Button', () => {
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
});
