import Dialer from '../support/pages/Dialer';
import {
  call,
  covertNumberToNormal,
  ignoreSpeedTestPopup,
  selectAgentStatus,
} from '../support/Utils';

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
    Dial.clickOnMenu('Campaigns');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('PredictiveCampaign');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create a Preview Dialer Campaign', () => {
    Dial.clickOnMenu('Campaigns');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('PreviewCampaign');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('should give warning if user increases the simultaneous dials per Agent to more than 3', () => {
    Dial.clickOnMenu('Campaigns');
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
    Dial.clickOnMenu('Campaigns');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('CampaignWithHighestScore');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create campaign with lowest Score lead first call order', () => {
    Dial.clickOnMenu('Campaigns');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('CampaignWithLowestScore');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create Campaign without call Recording', () => {
    Dial.clickOnMenu('Campaigns');
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('CampaignWithoutCallRecording');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickOnRadioButton('Call Recording');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('CampaignWithoutCallRecording');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create Campaign without Answering Machine Detection', () => {
    Dial.clickOnMenu('Campaigns');
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('CampaignWithoutAnsweringMachineDetection');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickOnRadioButton('Answering Machine Detection');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('CampaignWithoutAnsweringMachineDetection');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create Campaign without Scrub Company DNC', () => {
    Dial.clickOnMenu('Campaigns');
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('CampaignWithoutScrubCompanyDNC');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickOnRadioButton('Scrub Company DNC');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('CampaignWithoutScrubCompanyDNC');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });

  it('Create Campaign with Scrub Federal DNC', () => {
    Dial.clickOnMenu('Campaigns');
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName('CampaignWithScrubFederalDNC');
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickOnRadioButton('Scrub Federal DNC');
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
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn('CampaignWithScrubFederalDNC');
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });
});

describe('Inbound Calls with Call Connect type of Auto Answer mode', () => {
  const campaignName = 'Auto Answer Campaign';
  let callNumber = '+1';
  before(() => {
    cy.visit('/');
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      testData = data;
      callNumber = callNumber + covertNumberToNormal(testData.Number);
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

  it('create new Predictive Dialer Campaign with Auto Answer Mode', () => {
    Dial.clickOnMenu('Campaigns');
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName(campaignName);
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickNextButton();
    Dial.clickOnRadioButton('Auto Answer');
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

  it('Change status to Available', () => {
    Dial.selectStatus('Available');
    Dial.verifySelectCampaignBoxHeading();
    Dial.clickSelectCampaignDropdown();
    Dial.selectCampaign(campaignName);
    Dial.clickConfirmButton();
    Dial.verifySoftPhoneOpen();
  });

  it('Verify that calls are Auto Answering if Agent is Available', () => {
    call(callNumber, +15202010331);
    Dial.verifySoftphone();
    Dial.verifyContactViewPage();
    cy.wait(5000);
    Dial.clickEndCallButton();
    Dial.verifyCallDispositionWindow();
    Dial.selectCallDisposition('No Answer');
    Dial.clickOnButton('Done');
    cy.wait(3000);
    Dial.verifyCallEnd('No Answer');
  });

  it('Verify the Dials and Answered Count in Reports Campaign Page', () => {
    Dial.clickReportsMenu();
    Dial.clickOnSubMenu('Campaigns');
    cy.reload();
    cy.wait(2000);
    ignoreSpeedTestPopup();
    Dial.verifyCampaignDialsCount(campaignName, 1);
    Dial.verifyCampaignAnsweredCount(campaignName, 1);
  });

  it('Archive the Created Predictive Campaign', () => {
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn(campaignName);
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });
});

describe('Inbound Calls Call connect type with Ringing Sound mode', () => {
  const campaignName = 'Ringing Sound Campaign';
  let callNumber = '+1';
  before(() => {
    cy.visit('/');
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
      testData = data;
      callNumber = callNumber + covertNumberToNormal(testData.Number);
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

  it('create new Predictive Dialer Campaign with Auto Answer Mode', () => {
    ignoreSpeedTestPopup();
    Dial.clickOnMenu('Campaigns');
    Dial.clickOnButton('CREATE NEW CAMPAIGN');
    Dial.clickAdvanceSwitch();
    Dial.enterCampaignName(campaignName);
    Dial.clickOnRadioButton('Predictive Dialer');
    Dial.clickOnRadioButton('Individual Numbers');
    Dial.clickNumbersDropdown();
    Dial.selectPhoneNumber(testData.Number);
    Dial.clickNextButton();
    Dial.clickOnRadioButton('Ringing Sound');
    cy.wait(1000);
    Dial.clickOnRadioButton('Ringing Sound');
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

  it('Change status to Available', () => {
    Dial.selectStatus('Available');
    Dial.verifySelectCampaignBoxHeading();
    Dial.clickSelectCampaignDropdown();
    Dial.selectCampaign(campaignName);
    Dial.clickConfirmButton();
    Dial.verifySoftPhoneOpen();
  });

  it('Verify that incoming call give popup to accept or reject with ringing sound if Agent is Available', () => {
    call(callNumber, +15202010331);
    Dial.verifySoftphone();
    Dial.verifyContactViewPage();
    Dial.clickAcceptCallButton();
    cy.wait(5000);
    Dial.clickEndCallButton();
    Dial.verifyCallDispositionWindow();
    Dial.selectCallDisposition('No Answer');
    Dial.clickOnButton('Done');
    cy.wait(3000);
    Dial.verifyCallEnd('No Answer');
  });

  it('Verify the Dials and Answered Count in Reports Campaign Page', () => {
    Dial.clickOnMenu('Dashboard');
    cy.wait(1000);
    Dial.clickReportsMenu();
    Dial.clickOnSubMenu('Campaigns');
    Dial.clickOnMenu('Dashboard');
    cy.wait(1000);
    Dial.clickReportsMenu();
    Dial.clickOnSubMenu('Campaigns');
    cy.reload();
    cy.wait(2000);
    ignoreSpeedTestPopup();
    Dial.verifyCampaignDialsCount(campaignName, 1);
    Dial.verifyCampaignAnsweredCount(campaignName, 1);
  });

  it('Archive the Created Predictive Campaign', () => {
    Dial.clickOnMenu('Campaigns');
    Dial.clickThreeDotMenuBtn(campaignName);
    Dial.clickOnDropdownItem('Archive');
    Dial.verifySuccessToastMessage('Campaign Archived');
  });
});
