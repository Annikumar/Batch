import Agent from '../support/pages/Agent';

let testData;
let randNum = Math.floor(Math.random() * 100000);
const agent = new Agent();

describe('Agent Profile', function () {
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
    cy.reload();
    agent.clickDashboardMenu();
    cy.wait(2000);
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      agent.verifyTotalCallsCount(data.TotalCallsCount);
    });
  });

  it('Schedules Follow Up Call for a Contact', () => {
    agent.clickingOnContactOption();
    agent.enterSearch(testData.Contact);
    agent.clickOnContactName(testData.Contact);
    agent.clickFollowUpCall();
    agent.selectDateToFollowUpCall('4,May 2021');
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
    agent.ChooseCallResult('Call Back');
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
});
