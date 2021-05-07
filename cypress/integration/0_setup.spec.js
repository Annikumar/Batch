import Setup from '../support/pages/Setup';

const setup = new Setup();
let testData;
const randNum = Math.floor(Math.random() * 1000);
const agentEmail = 'random' + randNum + '@email.com';
const supervisorEmail = 'random' + randNum + 1 + '@email.com';

describe('Setup Account for Testing', () => {
  before(() => {
    cy.visit('/');
    cy.fixture('testData').then((data) => (testData = data));
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  after(() => {
    cy.Logout();
  });

  it('login successfully', () => {
    cy.Login(Cypress.env('username'), Cypress.env('password'));
  });
  it('Setup Account', () => {
    const [agentFirstName, agentlastName] = testData.agent.split(' ');
    const [supervisorFirstName, supervisorlastName] = testData.supervisor.split(
      ' '
    );
    const [contactFirstName, contactlastName] = testData.Contact.split(' ');

    setup.addNewAgent(
      agentFirstName,
      agentlastName,
      agentEmail,
      testData.password,
      '0123456789'
    );
    setup.addNewSupervisor(
      supervisorFirstName,
      supervisorlastName,
      supervisorEmail,
      testData.password,
      '0123456789'
    );
    setup.getAdminName();
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      setup.BuyNewPhoneNumber(data.AdminName);
    });
    setup.getPhoneNumber();
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      setup.createCampaign(
        testData.campaign,
        [
          'Abandoned',
          'Answering Machine',
          'Busy',
          'Call Back',
          'Disconnected Number',
          'Do Not Call',
          'No Answer',
          'Not Interested',
          'Successful sale',
          'Unknown',
          'Voicemail',
        ],
        data.Number,
        [data.AdminName, data.agent]
      );
    });
    cy.wait(2000);
    setup.addNewContact(contactFirstName, contactlastName);
  });
});
