import Agent from '../support/pages/Agent';

let fixtureData;
let randNum = Math.floor(Math.random() * 100000);
const agent = new Agent();

describe('Agent Profile', function () {
  beforeEach(() => {
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
    agent.selectAgentStatus('Break');
    cy.Logout();
  });

  it('Agent Should Login Successfully', () => {
    cy.Login(fixtureData.agentUsername, fixtureData.agentPassword);
  });

  it('Agent should not access the edit/view Campaign page', () => {
    agent.clickCampaignMenu();
    agent.selectCampaignName('FirstCampaign');
    agent.verifyAccessDeniedMsg();
  });

  it('Verify it open Select Campaign Window when selecting Available Status', () => {
    agent.selectAgentStatus('Available');
    agent.verifySelectCampaignBox();
    agent.selectCampaign('FirstCampaign');
    agent.clickContinueBtn();
  });

  it('Verify the Recent Contacts Page Landing', () => {
    agent.clickRecentContact();
    agent.verifyRecentContactPage();
  });

  it('Verifies the Edit button functionality for Recent Contacts', () => {
    agent.clickRecentContact();
    agent.clickEditRecentContact('New', 'User');
    agent.verifyCallResultWindow();
  });

  it('Edit the Call Result of Recent Contacts', () => {
    agent.clickRecentContact();
    agent.clickEditRecentContact('New', 'User');
    agent.verifyCallResultWindow();
    agent.selectCallResult('Busy');
    agent.clickContinueBtn();
    cy.wait(2000);
    agent.verifyCallResult('Busy');
  });
});
