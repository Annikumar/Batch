import Campaign from '../support/pages/Campaigns';

let fixtureData;
let randNum = Math.floor(Math.random() * 100);
const addCamp = new Campaign();

describe('Add Campaign flow', () => {
  before(() => {
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
    cy.Logout();
  });

  it('Should Login', () => {
    cy.Login(fixtureData.username, fixtureData.password);
  });

  it('Campaign header element should visible', function () {
    addCamp.clickCampaignMenu();
    addCamp.verifyCampaignHeaderElement([
      'Active Campaigns',
      'Paused Campaigns',
      'Completed Campaigns',
      'Archived Campaigns',
    ]);
  });

  it('Search box and Dropdowns on Campaign page', function () {
    addCamp.verifySearchBox();
    addCamp.verifyStatusBox();
    addCamp.verifyAgentBox();
    addCamp.verifyContactsCountSlider();
    addCamp.verifyAddCompaignButton();
  });

  it('Verify campaign headings', function () {
    addCamp.verifyCampaignHeaderHedings([
      'Name',
      'Mode',
      'Status',
      'Total Leads',
      'New Leads Left',
      'Redials Left',
      'Deals',
      'Answered',
      'Voicemail',
      'Abandon',
      'Agents',
      'DNC',
      'DNR',
      'Created',
    ]);
  });

  it('Should Add Predictive Dialer New Campaign ', () => {
    addCamp.clickCampaignMenu();
    cy.wait(3000);
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    addCamp.enterName(fixtureData.campaignName + randNum.toString());
    addCamp.selectDialingModeOption('Predictive Dialer');
    addCamp.clickNextCircleArrow();
    addCamp.selectCallerId('2821');
    addCamp.selectCallResultsOption('Answering Machine');
    addCamp.clickNextCircleArrow();
    addCamp.selectAgentsDrpdwn('Sandeep Kumar');
    addCamp.clickCreateCampButton();
  });

  it('Should show added Campaign in table', () => {
    addCamp.clickCampaignMenu();
    addCamp.verifyAddedCampaign(fixtureData.campaignName + randNum.toString());
  });

  it('Verify Campaign Status is applied correctly', () => {
    addCamp.clickCampaignMenu();
    addCamp.changesCampaignStatus(
      fixtureData.campaignName + randNum.toString(),
      'active'
    );
    addCamp.clickToSelectPasused();
    addCamp.changeCampaignStatusByDrpdwn('Paused');
    addCamp.verifyAddedCampaign(fixtureData.campaignName + randNum.toString());
    addCamp.changesCampaignStatus(
      fixtureData.campaignName + randNum.toString(),
      'paused'
    );
    addCamp.clickToSelectActive();
    addCamp.changeCampaignStatusByDrpdwn('Active');
    addCamp.verifyAddedCampaign(fixtureData.campaignName + randNum.toString());
    cy.reload();
  });

  it('Archive Created Campaign', function () {
    addCamp.clickCampaignMenu();
    addCamp.clickEditCampaign(fixtureData.campaignName + randNum.toString());
    addCamp.clickArchiveCampaignButton();
    cy.wait(5000);
    addCamp.handleAlertForDelete();
    addCamp.verifyArchivedCampaign(
      fixtureData.campaignName + randNum.toString(),
      'not.exist'
    );
  });

  it('Should Add Preview Dialer New Campaign ', () => {
    addCamp.clickCampaignMenu();
    cy.wait(3000);
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    addCamp.enterName(fixtureData.campaignName + randNum.toString() + '1');
    addCamp.selectDialingModeOption('Preview Dialer');
    addCamp.clickNextCircleArrow();
    addCamp.selectCallerId('2821');
    addCamp.selectCallResultsOption('Busy');
    addCamp.clickNextCircleArrow();
    addCamp.selectAgentsDrpdwn('Sandeep Kumar');
    addCamp.clickCreateCampButton();
  });

  it('Should show added Preview Dialer Campaign in table', () => {
    addCamp.clickCampaignMenu();
    addCamp.verifyAddedCampaign(
      fixtureData.campaignName + randNum.toString() + '1'
    );
  });

  it('Archive Created Preview Dialer Campaign', function () {
    addCamp.clickCampaignMenu();
    addCamp.clickEditCampaign(
      fixtureData.campaignName + randNum.toString() + '1'
    );
    addCamp.clickArchiveCampaignButton();
    addCamp.handleAlertForDelete();
    addCamp.verifyArchivedCampaign(
      fixtureData.campaignName + randNum.toString() + '1',
      'not.exist'
    );
  });

  it('Verify status dropdown is showing Archived Campaign', function () {
    // addCamp.clickRecycleMenu();
    // addCamp.clickCampaignMenu();
    addCamp.clickToSelectStatus();
    addCamp.clickStatusArchived();
    addCamp.verifyArchivedCampaign(
      fixtureData.campaignName + randNum.toString() + '1',
      'be.visible'
    );
  });

  it('Verify search button functionality', function () {
    addCamp.searchCampaign(fixtureData.campaignName + randNum.toString() + '1');
    addCamp.verifyArchivedCampaign(
      fixtureData.campaignName + randNum.toString() + '1',
      'be.visible'
    );
    addCamp.verifyArchivedCampaign(
      fixtureData.campaignName + randNum.toString(),
      'not.exist'
    );
  });

  it('Verify elements on New Campaign Page', function () {
    addCamp.clickCampaignMenu();
    cy.wait(3000);
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    addCamp.enterName(fixtureData.campaignName + randNum.toString() + '1');
    addCamp.selectDialingModeOption('Preview Dialer');
    addCamp.verifyCampaignNameField();
    addCamp.verifyDialModeDropdown();
    addCamp.newCampaignDropdown([
      'Time Zone',
      'Max Lines Per Agent',
      'Abandonment Timeout',
      'Max Ring Time Duration',
    ]);
    // addCamp.newCampaignDropdown("Max Lines Per Agent");
    addCamp.verifyCallTypeAutoAnswer();
    addCamp.verifyCallTypeBeepOnce();
    addCamp.verifyCallTypeRingingSound();
    // addCamp.newCampaignDropdown("Abandonment Timeout");
    // addCamp.newCampaignDropdown("Max Ring Time Duration");
    addCamp.verifyAnswerMachineEnableButton();
    addCamp.verifyAnswerMachineDisableButton();
    addCamp.verifyCallRecordingEnable();
    addCamp.verifyCallRecordingDisable();
    addCamp.clickNextCircleArrow();
    addCamp.verifyCallerIDGroup();
    addCamp.verifyCallerIDNumber();
    addCamp.verifyCallingHours();
    addCamp.selectCallResultsOption('Busy');
    addCamp.verifyCallResult();
    addCamp.verifyMaxAttempts();
    addCamp.verifyRetryTime();
    addCamp.verifyAgentScript();
    addCamp.verifyAgentScriptCreateNewButton();
    addCamp.clickNextCircleArrow();
    addCamp.verifyContactList();
    addCamp.verifyCallOrder([
      'Adaptive',
      'Highest Score Leads first',
      'Lowest Score Leads first',
    ]);
    addCamp.verifyAssignAgent();
    addCamp.verifyFedralDNCYes();
    addCamp.verifyFedralDNCNo();
    addCamp.verifyCompanyDNCYes();
    addCamp.verifyCompanyDNCNo();
    addCamp.verifyCancelButton();
  });

  it('Verify Elements present in Recycle page', function () {
    addCamp.clickRecycleMenu();
    addCamp.verifyRecStartDate();
    addCamp.verifyRecEndDate();
    addCamp.verifyRecCallResult();
    addCamp.verifyRecUseList();
    addCamp.verifyRecCampaignName();
    addCamp.verifyRecSkipLeads();
    addCamp.verifyRecSkipContact();
    addCamp.verifyRecSaveCampaignButton();
    addCamp.verifyCancelButton();
  });

  it.skip('It show show Alert when No Phone Number is Purchases', () => {
    addCamp.clickCampaignMenu();
    addCamp.verifyAlert();
  });

  it('On click on campaign name it should open edit campaign page', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickCampaignName('FirstCampaign');
    addCamp.verifyCampaignNameField();
  });

  it('Verify all combination of filter are working properly', () => {
    addCamp.clickCampaignMenu();
    addCamp.searchCampaign('FirstCampaign');
    addCamp.clickToSelectStatus();
    addCamp.clickActiveStatus();
    addCamp.verifyAddedCampaign('FirstCampaign');
  });

  it('Verify Validation on required field of new campaign page', () => {
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    addCamp.clickNextCircleArrow();
    addCamp.verifyErrorMessage('Enter Campaign Name');
  });
});
