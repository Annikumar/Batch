import Setup from '../support/pages/Setup';
import { ignoreSpeedTestPopup } from '../support/Utils';

const setup = new Setup();
let testData;
const randNum = Math.floor(Math.random() * 1000);
const agentEmail = 'random' + randNum + '@email.com';
const supervisorEmail = 'random' + randNum + 1 + '@email.com';
const adminWithoutCallingEmail = 'random' + randNum + 2 + '@test.com';

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
    ignoreSpeedTestPopup();
    const [agentFirstName, agentlastName] = testData.agent.split(' ');
    const [supervisorFirstName, supervisorlastName] =
      testData.supervisor.split(' ');
    const [contactFirstName, contactlastName] = testData.Contact.split(' ');
    const [adminFirstName, adminlastName] =
      testData.adminWithoutCalling.split(' ');

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
    setup.addNewAdminWithoutCalling(
      adminFirstName,
      adminlastName,
      adminWithoutCallingEmail,
      testData.password,
      '9999999999'
    );
    setup.getAdminName();
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      setup.BuyNewPhoneNumber(data.AdminName);
    });
    setup.getPhoneNumber();
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      setup.assignNumberToAgent(data.Number, data.AdminName);
    });
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
