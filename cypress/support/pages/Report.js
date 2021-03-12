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
const campaignStatusDropdown =
  "//span[text()='All Statuses']/ancestor::div[contains(@class,'inverted')]";
const campaignCalander = '.dropdown-menu';
const campCalanderDropdown = '.date-picker';
const campCalanderTimeline = '.links';
const calenderMonthDropdown = '.DayPicker-Caption';
const calenderDays = '.DayPicker-Weekdays';
const calenderDate = '.DayPicker-Body';
const tableBody = '.table tbody ';

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

  clickCampaignStatusDropdown() {
    cy.xpath(campaignStatusDropdown).click();
  }

  verifyStatusDropdownElements(element) {
    for (let i = 0; i < element.length; i++) {
      cy.xpath(campaignStatusDropdown).should('contain.text', element[i]);
    }
  }

  clickCampaignCalanderDropdown() {
    cy.get(campCalanderDropdown).click();
  }

  verifyCalender() {
    cy.get(campaignCalander).should('be.visible');
  }

  verifyCalenderTimeline(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(campCalanderTimeline).should('contain.text', element[i]);
    }
  }

  verifyCalenderMonthDropdown() {
    cy.get(calenderMonthDropdown).should('be.visible');
  }
  verifyCalenderDays() {
    cy.get(calenderDays).should('be.visible');
  }

  verifyCalenderDates() {
    cy.get(calenderDate).should('be.visible');
  }

  clickActiveStatus() {
    cy.get(campaignDropdown).contains('Active').click();
  }

  verifyStatusVisible(status) {
    cy.get(tableBody).should('contain.text', status);
  }

  verifyStatusNotVisible(status) {
    cy.get(tableBody).contains(status).should('not.exist');
  }
}
