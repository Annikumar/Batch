import Dashboard from '../support/pages/Dashboard';

const Dash = new Dashboard();
let fixtureData;

describe('Dashboard Elements', function () {
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

  it('verify elements in Dashboard', function () {
    Dash.clickDashboard();
    Dash.verifyDashboardElements();
  });

  it('verify elements in Dashboard Header', function () {
    Dash.verifyDashboardHeaderElement();
  });

  it('Login As Button Functionality', function () {
    Dash.clickLoginAs();
    Dash.searchUser('automation testing2');
    Dash.verifySearchedUser();
  });

  it('Change Admin Status', function () {
    Dash.clickStatusButton();
    Dash.selectAvailable('Available');
    Dash.clickContinue();
  });

  it('Verify functionality of Dialer button',function(){
    Dash.clickDialer();
    Dash.verifyDialPad();
  });

  it.skip('Verify user is able to make call using dialer button',() =>{
    Dash.dialNumber()
    Dash.clickCallButton()
    Dash.verifyCallStarted();
    Dash.clickCallButton();
    Dash.clickAnsweringMachine();
    Dash.clickContinue();
  })

  it("Verify Task Button Functionality",() =>{
    Dash.clickTaskButton();
    Dash.verifyTask();
  });

  it("Verify on click user profile show options",() =>{
    Dash.clickUserProfile();
    Dash.verifyUserProfileOptions();
    Dash.clickUserProfile();
  })

  it("Verify User setting option should show these options",() =>{
    Dash.clickUserProfile();
    Dash.clickSettingsButton();
    Dash.verifyUserSettingOptions(["Profile","Billing","Address Book","Voicemail","Integrations","Lead Score","Agent Scripts","Audio Library"]);
  });

  it("Verify User Setting Profile Elements",() =>{
    Dash.verifyUserSettingsProfileFields(["firstname","lastname","email","address","city","zip","phone","phone2"]);
    Dash.verifyProfileState();
    Dash.verifyProfileTimeZone();
    Dash.verifyProfilePasswordChangeButton();
    Dash.verifyProfileAgentFeaturesEnable();
    Dash.verifyProfileAgentFeaturesDisable();
  })

});
