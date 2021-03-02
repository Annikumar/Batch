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
});
