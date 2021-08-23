import Campaign from '../support/pages/Campaigns';
import { ignoreSpeedTestPopup, selectAgentStatus } from '../support/Utils';

let fixtureData;
let testData;
let randNum = Math.floor(Math.random() * 100);
const addCamp = new Campaign();

describe('Add Campaign flow', () => {
  before(() => {
    cy.readFile('cypress/fixtures/testData.json').then(
      (data) => (testData = data)
    );
    cy.fixture('constants')
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit('/', { failOnStatusCode: false });
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

  it('Should Login', () => {
    cy.Login(Cypress.env('username'), Cypress.env('password'));
    cy.wait(2000);
    ignoreSpeedTestPopup();
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
    addCamp.verifyStatusBox('Status');
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
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    cy.wait(2000);
    addCamp.enterName(fixtureData.campaignName + randNum.toString());
    addCamp.selectDialingModeOption('Predictive Dialer');
    addCamp.selectCallerId('Individual Numbers', testData.Number);
    addCamp.clickNextCircleArrow();
    addCamp.selectCallResultsOption([
      'Answering Machine',
      'No Answer',
      'Successful Sale',
      'Voicemail',
    ]);
    addCamp.clickNextCircleArrow();
    addCamp.selectAgentsDrpdwn('Individual Agents', testData.AdminName);
    addCamp.clickCreateCampButton();
  });

  it('Should show added Campaign in table', () => {
    addCamp.clickCampaignMenu();
    addCamp.verifyAddedCampaign(fixtureData.campaignName + randNum.toString());
  });

  it('Verify Campaign Status is applied correctly', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickTableRefreshBtn();
    addCamp.changesCampaignStatus(
      fixtureData.campaignName + randNum.toString(),
      'active'
    );
    addCamp.clickToSelectPasused('Status');
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
    cy.wait(2000);
    ignoreSpeedTestPopup();
  });

  it('Edit the Added Campaign', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickEditCampaign(fixtureData.campaignName + randNum.toString());
    addCamp.clickEditBtn();
    addCamp.enableAdvancedSwitchBar();
    addCamp.enterName('-edited');
    addCamp.verifyCallResultValues(5);
    addCamp.deleteCallResults([
      'Answering Machine',
      'No Answer',
      'Successful Sale',
      'Voicemail',
    ]);
    addCamp.selectCallResultsOption([
      'Voicemail',
      'Unknown',
      'No Answer',
      'Successful Sale',
    ]);
    addCamp.clickSaveCampaign();
    addCamp.verifyAddedCampaign(fixtureData.campaignName + randNum.toString());
    addCamp.clickEditCampaign(
      fixtureData.campaignName + randNum.toString() + '-edited'
    );
    addCamp.clickEditBtn();
    addCamp.enableAdvancedSwitchBar();
    addCamp.verifyCallResultValues(5);
  });

  it('Archive Created Campaign', function () {
    addCamp.clickCampaignMenu();
    addCamp.clickEditCampaign(
      fixtureData.campaignName + randNum.toString() + '-edited'
    );
    addCamp.clickArchiveCampaignButton();
    addCamp.handleAlertForDelete();
    addCamp.verifyArchivedCampaign(
      fixtureData.campaignName + randNum.toString() + '-edited',
      'not.exist'
    );
  });

  it('Verify User is able to Unarchive the Archived Campaign', () => {
    addCamp.clickToSelectStatus('Status');
    addCamp.clickStatusArchived();
    addCamp.searchCampaign(
      fixtureData.campaignName + randNum.toString() + '-edited'
    );
    addCamp.clickUnarchiveCampaign(
      fixtureData.campaignName + randNum.toString() + '-edited'
    );
    addCamp.clickToSelectStatus('Archived');
    addCamp.clickStatus();
    addCamp.verifyUnarchievedCampaign(
      fixtureData.campaignName + randNum.toString() + '-edited'
    );
  });

  it('Should Add Preview Dialer New Campaign ', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    cy.wait(2000);
    addCamp.enterName(fixtureData.campaignName + randNum.toString() + '1');
    addCamp.selectDialingModeOption('Preview Dialer');
    addCamp.selectCallerId('Individual Numbers', testData.Number);
    addCamp.clickNextCircleArrow();
    addCamp.selectCallResultsOption(['Busy']);
    addCamp.clickNextCircleArrow();
    addCamp.selectAgentsDrpdwn('Individual Agents', testData.AdminName);
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
    addCamp.clickEditCampaign(
      fixtureData.campaignName + randNum.toString() + '-edited'
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
    addCamp.clickToSelectStatus('Status');
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
  });

  it('Verify elements on New Campaign Page', function () {
    addCamp.clickCampaignMenu();
    cy.wait(3000);
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    addCamp.enterName(fixtureData.campaignName + randNum.toString() + '1');
    addCamp.selectDialingModeOption('Predictive Dialer');
    addCamp.verifyCampaignNameField();
    addCamp.verifyDialModeDropdown();
    addCamp.newCampaignDropdown(['Time Zone']);

    addCamp.verifyCallOptions([
      'Call Recording',
      'Scrub Federal DNC',
      'Answering Machine Detection',
      'Scrub Company DNC',
    ]);
    addCamp.verifyCallOrder([
      'Adaptive',
      'Highest Score Leads first',
      'Lowest Score Leads first',
    ]);

    addCamp.verifyCallerID(['Number Group', 'Individual Numbers']);
    addCamp.selectCallerId('Individual Numbers', testData.Number);
    addCamp.clickNextCircleArrow();
    addCamp.verifyCallTypeAutoAnswer();
    addCamp.verifyCallTypeBeepOnce();
    addCamp.verifyCallTypeRingingSound();
    addCamp.verifyCallingHours();
    addCamp.selectCallResultsOption(['Busy']);
    addCamp.verifyCallResult();
    addCamp.verifyMaxAttempts();
    addCamp.verifyRetryTime();
    addCamp.verifySimulataneousDials();
    addCamp.clickNextCircleArrow();
    addCamp.verifyContactList();
    addCamp.verifyAgentScript();
    addCamp.verifyAgentScriptCreateNewButton();
    addCamp.verifyAssignAgent();
    addCamp.verifyLeadSheetDropdown();
    addCamp.verifyCancelButton();
  });

  it('Verify Elements present in Recycle page', function () {
    addCamp.clickCampaignMenu();
    addCamp.clickEditCampaign(testData.campaign);
    addCamp.clickRecycleOption();
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
    addCamp.clickCampaignName(testData.campaign);
    addCamp.verifyCampaignNameField();
  });

  it('Verify all combination of filter are working properly', () => {
    addCamp.clickCampaignMenu();
    addCamp.searchCampaign(testData.campaign);
    addCamp.clickToSelectStatus('Status');
    addCamp.clickActiveStatus();
    addCamp.verifyAddedCampaign(testData.campaign);
  });

  it('Verify Validation on required field of new campaign page', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    addCamp.clickNextCircleArrow();
    addCamp.verifyErrorMessage('Enter Campaign Name');
    addCamp.verifyCallerIdError();
    addCamp.enterName(fixtureData.campaignName + randNum.toString());
    addCamp.selectCallerId('Individual Numbers', testData.Number);
    addCamp.clickNextCircleArrow();
  });

  it('It should open schedule window when user click on calling hours', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickAddNewCampaign();
    addCamp.enableAdvancedSwitchBar();
    addCamp.enterName(fixtureData.campaignName + randNum.toString());
    addCamp.selectCallerId('Individual Numbers', testData.Number);
    addCamp.clickNextCircleArrow();
    addCamp.clickCallingHours();
    addCamp.verifyScheduleTable();
  });

  it('Verify From and To field get disable whenever user unselect check box', () => {
    addCamp.clickScheduleCheckmark();
    addCamp.verifyScheduleCheckbox('have.attr');
    // addCamp.clickScheduleCancelButton();
  });

  it('Verify From and To field get enable whenever user select check box', () => {
    addCamp.clickScheduleCheckmark();
    addCamp.verifyScheduleCheckbox('not.have.attr');
    addCamp.clickScheduleCancelButton();
  });

  it('Verify Select All, Apply All, Apply, Cancel Button Functionality on schedule window', () => {
    addCamp.clickCallingHours();
    addCamp.clickSelectAllCheckbox();
    addCamp.clickSelectAllCheckbox();
    addCamp.verifySelectAll('have.attr');
    addCamp.clickSelectAllCheckbox();
    addCamp.clickScheduleCheckmark();
    addCamp.clickApplyToAllButton();
    addCamp.verifySelectAll('have.attr');
    addCamp.clickScheduleCheckmark();
    addCamp.clickApplyButton();
    addCamp.VerifyApplyFunctionality();
    addCamp.clickCallingHours();
    addCamp.clickScheduleCancelButton();
    addCamp.verifyScheduleTableNotVisible();
  });

  // it.skip('Verify functionality of create new button on New campaign page', () => {
  //   addCamp.enableAdvancedSwitchBar();
  //   addCamp.clickAgentScriptCreateNewButton();
  //   addCamp.verifyAgentScriptPopUp();
  //   addCamp.clickScheduleCancelButton();
  // });

  it('Verify contact list dropdown should show lists dropdown', () => {
    addCamp.selectCallResultsOption(['Busy']);
    addCamp.clickNextCircleArrow();
    addCamp.clickContactListDropdown();
    addCamp.verifyContactListDropdown();
  });

  it('Verify Campaign Setting Options', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickCampaignSetting();
    addCamp.verifyCampaignSettingOptions([
      'Edit',
      'Recycle',
      'Call Again',
      'Call Again',
      'Archive',
    ]);
  });

  it.skip('Verify functionality of edit Campaign button', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickFirstCampaignMenuButton();
    addCamp.clickEditCampaignNew();
    addCamp.selectDialingModeOption('Predictive Dialer');
    addCamp.clickSaveCampaign();
    addCamp.verifyCampaignChange();
    addCamp.clickFirstCampaignMenuButton();
    addCamp.clickEditCampaignNew();
    addCamp.selectDialingModeOption('Preview Dialer');
    addCamp.clickSaveCampaign();
  });

  it('Create the Recycle Campaign', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickEditCampaign(testData.campaign);
    addCamp.clickRecycleOption();
    addCamp.selectRecycleCallResult('Busy');
    addCamp.enterNewCampaignName('RecycledCampaign');
    addCamp.removeCheckBox();
    addCamp.clickRecycleSaveCampaign();
    addCamp.verifySuccessToast('Recycled campaign created');
    addCamp.verifyAddedRecycleCampaign('RecycledCampaign');
  });

  it('Archieve the Created Recycle Campaign', () => {
    addCamp.clickCampaignMenu();
    addCamp.clickRecycleCampaignMenuBtn('RecycledCampaign');
    addCamp.clickArchiveCampaignButton();
    addCamp.handleAlertForDelete();
    addCamp.verifyArchivedCampaign('RecycledCampaign', 'not.exist');
  });
});
