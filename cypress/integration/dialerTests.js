import Dialer from '../support/pages/Dialer';
import { ignoreSpeedTestPopup, selectAgentStatus } from '../support/Utils';

let testData;
const Dial = new Dialer();

describe.skip('Dialer Test Scenario', () => {
  before(() => {
    cy.visit('/');
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      testData = data;
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

  it('Login To Application', () => {
    cy.Login(Cypress.env('username'), Cypress.env('password'));
    cy.wait(2000);
    ignoreSpeedTestPopup();
  });

  it('Change status to Available', () => {
    Dial.selectStatus('Available');
    Dial.verifySelectCampaignBoxHeading();
    Dial.clickSelectCampaignDropdown();
    Dial.selectCampaign(testData.campaign);
    Dial.clickConfirmButton();
  });

  it('create new campaign with predictive dialer', () => {
    Dial.clickCampaignMenu();
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('PredictiveCampaign');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickNextButton();
    Dial.clickCallResultsDropdown();
    Dial.selectCallResults([
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
    ]);
    Dial.clickNextButton();
    Dial.clickOnRadioButton('Individual Agents');
    Dial.selectAgentToAssign(testData.AdminName);
    Dial.clickOnButton('SAVE');
  });
});
