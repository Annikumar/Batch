import Setup from '../support/pages/Setup';

const setup = new Setup();
let testData;
const randNum = Math.floor(Math.random() * 1000);
const agentEmail = 'random' + randNum + '@email.com';
const supervisorEmail = 'random' + randNum + 1 + '@email.com';

describe('Setup Account for Testing', () => {
  before(() => {
    cy.readFile('cypress/fixtures/testData.json', (err, data) => {
      if (err) {
        return console.error(err);
      }
    }).then((data) => {
      data.AgentEmail = agentEmail;
      data.SupervisorEmail = supervisorEmail;
      cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data));
    });
    cy.visit('/');
    cy.fixture('testData').then((data) => (testData = data));
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  it('login successfully', () => {
    cy.Login(testData.email, testData.password);
  });
  it('Setup Account', () => {
    const [agentFirstName, agentlastName] = testData.agent.split(' ');
    const [supervisorFirstName, supervisorlastName] = testData.supervisor.split(
      ' '
    );

    setup.addNewAgent(
      agentFirstName,
      agentlastName,
      testData.AgentEmail,
      'Fleek@2016',
      '0123456789'
    );
    setup.addNewSupervisor(
      supervisorFirstName,
      supervisorlastName,
      testData.SupervisorEmail,
      'Fleek@2016',
      '0123456789'
    );
    setup.getAgentName();
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      setup.BuyNewPhoneNumber(data.AgentName);
    });
    setup.getPhoneNumber();
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      setup.createCampaign(
        testData.campaign,
        ['Answering Machine', 'Busy', 'Call Back'],
        data.Number,
        [data.AgentName, data.agent]
      );
    });
  });
});
