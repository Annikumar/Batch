import Dialer from '../support/pages/Dialer';
import {
  call,
  covertNumberToNormal,
  ignoreSpeedTestPopup,
  selectAgentStatus,
} from '../support/Utils';

let testData;
const Dial = new Dialer();

describe('Inbound Call Scenarios', () => {
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
      cy.url().then((url) => {
        if (url.includes('app.batchdialer.com')) {
          Dial.selectStatus('Available');
          Dial.verifySelectCampaignBoxHeading();
          Dial.clickSelectCampaignDropdown();
          Dial.selectCampaign(campaignName);
          Dial.clickConfirmButton();
          Dial.verifySoftPhoneOpen();
        } else {
          cy.log('Inbound Calls not working in QA');
        }
      });
    });

    it('Verify that calls are Auto Answering if Agent is Available', () => {
      cy.url().then((url) => {
        if (url.includes('app.batchdialer.com')) {
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
        } else {
          cy.log('Inbound Calls are not working in QA');
        }
      });
    });

    it('Verify the Dials and Answered Count in Reports Campaign Page', () => {
      cy.url().then((url) => {
        if (url.includes('app.batchdialer.com')) {
          Dial.clickReportsMenu();
          Dial.clickOnSubMenu('Campaigns');
          cy.reload();
          cy.wait(2000);
          ignoreSpeedTestPopup();
          Dial.verifyCampaignDialsCount(campaignName, 1);
          Dial.verifyCampaignAnsweredCount(campaignName, 1);
        } else {
          cy.log('Inbound Calls are not working in QA');
        }
      });
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
      cy.url().then((url) => {
        if (url.includes('app.batchdialer.com')) {
          Dial.selectStatus('Available');
          Dial.verifySelectCampaignBoxHeading();
          Dial.clickSelectCampaignDropdown();
          Dial.selectCampaign(campaignName);
          Dial.clickConfirmButton();
          Dial.verifySoftPhoneOpen();
        } else {
          cy.log('Inbound Calls are not working in QA');
        }
      });
    });

    it('Verify that incoming call give popup to accept or reject with ringing sound if Agent is Available', () => {
      cy.url().then((url) => {
        if (url.includes('app.batchdialer.com')) {
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
        } else {
          cy.log('Inbound Calls are not working in QA');
        }
      });
    });

    it('Verify the Dials and Answered Count in Reports Campaign Page', () => {
      cy.url().then((url) => {
        if (url.includes('app.batchdialer.com')) {
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
        } else {
          cy.log('Inbound Calls are not working in QA');
        }
      });
    });

    it('Archive the Created Predictive Campaign', () => {
      Dial.clickOnMenu('Campaigns');
      Dial.clickThreeDotMenuBtn(campaignName);
      Dial.clickOnDropdownItem('Archive');
      Dial.verifySuccessToastMessage('Campaign Archived');
    });
  });
});
