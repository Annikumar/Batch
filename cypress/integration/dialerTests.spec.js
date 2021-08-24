import Dialer from '../support/pages/Dialer';
import { ignoreSpeedTestPopup, selectAgentStatus } from '../support/Utils';

let testData;
const Dial = new Dialer();

describe('Dialer Test Scenario', () => {
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
    Dial.verifySuccessToastMessage('Campaign Created');
  });

  it('Archive the Created Predictive Campaign', () => {
    Dial.clickCampaignMenu();
    Dial.clickThreeDotMenuBtn('PredictiveCampaign');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create a Preview Dialer Campaign', () => {
    Dial.clickCampaignMenu();
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('PreviewCampaign');
    Dial.clickOnRadioButton('Preview Dialer');
    cy.wait(1000);
    Dial.clickOnRadioButton('Preview Dialer');
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
    Dial.verifySuccessToastMessage('Campaign Created');
  });

  it('Archive the Created Preview Campaign', () => {
    Dial.clickCampaignMenu();
    Dial.clickThreeDotMenuBtn('PreviewCampaign');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('should give warning if user increases the simultaneous dials per Agent to more than 3', () => {
    Dial.clickCampaignMenu();
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('PreviewCampaign');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickNextButton();
    Dial.enterSimultaneousDialsPerAgent(4);
    Dial.verifyWarningTitle();
    Dial.clickWarningGotItBtn();
  });

  it('Create campaign with highest Score lead first call order', () => {
    Dial.clickCampaignMenu();
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('CampaignWithHighestScore');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Highest Score Leads first');
    cy.wait(1000);
    Dial.clickOnRadioButton('Highest Score Leads first');
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
    Dial.verifySuccessToastMessage('Campaign Created');
  });

  it('Archive the Created Campaign', () => {
    Dial.clickCampaignMenu();
    Dial.clickThreeDotMenuBtn('CampaignWithHighestScore');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create campaign with lowest Score lead first call order', () => {
    Dial.clickCampaignMenu();
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('CampaignWithLowestScore');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Lowest Score Leads first');
    cy.wait(1000);
    Dial.clickOnRadioButton('Lowest Score Leads first');
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
    Dial.verifySuccessToastMessage('Campaign Created');
  });

  it('Archive the Created Campaign', () => {
    Dial.clickCampaignMenu();
    Dial.clickThreeDotMenuBtn('CampaignWithLowestScore');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });
});
