const reportHeader = '.reports-top-bar';
const reportMenu = "a[title='Reports']";
const reportLive = '.report-live-buttons-left';
const tableHeader = '.table thead';
const ReportContactsDropdowns = '.search_bar';
const ReportContactButton = "//div[text()='Recent Contacts']";
const campaignDropdown = '.reportCampaignsForm';
const reportCampaignsButton = "//div[text()='Campaigns']";
const agentsDropdown = '.reportAgentsForm';
const AgentButton = "//div[text()='Agents']";
const NumberButton = "//div[text()='Numbers']";
const numberDropdown = '.reportNumbersForm';
const searchBox = '.search-box-wrapper';
const table = '.table';

export default class Report {
  clickReportMenu() {
    cy.get(reportMenu).click({ force: true });
  }

  reportHeaderElement(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(reportHeader).should('contain.text', element[i]);
    }
  }

  verifyReportLiveElements(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(reportLive).should('contain.text', element[i]);
    }
  }

  verifyReportTableHeaderElements(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(tableHeader).should('contain.text', element[i]);
    }
  }

  verifyRecentContactsDropdown(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(ReportContactsDropdowns).should('contain.text', element[i]);
    }
  }

  clickRecentContactButton() {
    cy.xpath(ReportContactButton).click();
  }

  VerifyDropdownsReportCampaign(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(campaignDropdown).should('contain.text', element[i]);
    }
  }

  clickReportCampaignsButton() {
    cy.xpath(reportCampaignsButton).click();
  }

  verifyAgentsDropdowns(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(agentsDropdown).should('contain.text', element[i]);
    }
  }

  clickAgentButton() {
    cy.xpath(AgentButton).click();
  }

  clickNumberButton() {
    cy.xpath(NumberButton).click();
  }

  verifyReportNumbersDropdowns(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(numberDropdown).should('contain.text', element[i]);
    }
  }

  verifyNumbersSearchBox() {
    cy.get(searchBox).should('be.visible');
  }

  searchNumber(num) {
    cy.get(searchBox).type(num);
  }

  verifySearchedNumber(user) {
    cy.get(table).should('contain.text', user);
  }
}
