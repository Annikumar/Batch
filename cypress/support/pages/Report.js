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
const dialerNumber = '.table-responsive tbody tr td:nth-child(4)';
const exportbtn = "//button[text()='Export']";
const agentHeatMap = "//div[text()='Agents Heat Map']";
const heatMapDropdown = "span[title='All Groups']";
const heatMapRadioButtons = (radio) => "//label[text() = '" + radio + "']";
const heatMapWeekButton = "input[value='week']";
const heatMapMonthRadioButton = "input[value='month']";
const heatMapDatePicker = '.datepicker__col';
const heatMapStatus = '.reports-heat__statuses';
const FloorMap = "//div[text()='Floormap']";
const FloorViewDropdown = "//label[text()='Floor View']/parent::div//button";
const addNewFloor = "//button[contains(text(),' Add New Floor')]";
const floorName = '.form-control';
const saveBtn = "//button[contains(text(), 'Save')]";
const floor = "//button[contains(text(), 'Test')]";
const deleteFloor = "//button[contains(text(), ' Delete Floor')]";
const editFloor = "//button[contains(text(), 'Edit Floor')]";
const addWall = '.floor-map--edit-btn .dropdown';
const verticalWall = "//a[text()='Vertical']";
const horizontalWall = "//a[text()='Horizontal']";
const agentGroup = "//div[text()='AT']";
const dropagent = '.floor-map--canvas';
const successPopUp = '.mytoast-bottom';

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
    let number = '';
    for (let i = 0; i < num.length; i++) {
      if (num[i] != '(' && num[i] != ')' && num[i] != ' ' && num[i] != '-') {
        number += num[i];
      }
    }
    cy.log(number);
    cy.get(searchBox).type(number);
  }

  verifySearchedNumber(number) {
    cy.get(table).should('contain.text', number);
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

  clickExportBtn() {
    cy.xpath(exportbtn).click();
  }

  getDialedContactNumbers() {
    cy.get(dialerNumber).then((el) => {
      cy.log(el);
      for (let i = 0; i < el.length; i++) {
        cy.log(el[i].innerText);
      }
    });
  }

  clickAgentHeatMap() {
    cy.xpath(agentHeatMap).click();
  }

  verifyAgentHeatMapDropdown() {
    cy.get(heatMapDropdown).should('be.visible');
  }

  verifyHeatMapRadioButtons(button) {
    for (let i = 0; i < button.length; i++) {
      cy.xpath(heatMapRadioButtons(button[i])).should('be.visible');
    }
  }

  verifyHeatMapDatePicker() {
    cy.get(heatMapDatePicker).should('be.visible');
  }

  verifyHeatMapStatus(ele) {
    for (let i = 0; i < ele.length; i++) {
      cy.get(heatMapStatus).should('contain.text', ele[i]);
    }
  }

  clickFloorMap() {
    cy.xpath(FloorMap).click();
  }

  verifyFloorMapViewDropdown() {
    cy.xpath(FloorViewDropdown).should('be.visible');
  }

  verifyAddNewFloorButton() {
    cy.xpath(addNewFloor).should('be.visible');
  }

  clickAddNewFloor() {
    cy.xpath(addNewFloor).click();
  }

  EnterFloorName(name) {
    cy.get(floorName).clear();
    cy.get(floorName).type(name);
  }

  clickSaveButton() {
    cy.xpath(saveBtn).click();
  }

  verifyFloor() {
    cy.xpath(floor).should('be.visible');
  }

  clickDeleteFloor() {
    cy.xpath(deleteFloor).click();
  }

  clickEditFloor() {
    cy.xpath(editFloor).click();
  }

  clickAddWall() {
    cy.get(addWall).click();
  }

  clickVerticalWall() {
    cy.xpath(verticalWall).click();
  }

  clickHorizontalWall() {
    cy.xpath(horizontalWall).click();
  }

  drapAndDropAgent() {
    cy.xpath(agentGroup).trigger('mousedown', { which: 1 });

    cy.get(dropagent).trigger('mousemove').trigger('mouseup', { force: true });
  }

  verifyDeleteFloor(text) {
    cy.get(successPopUp).should('contain.text', text);
  }
}
