const contactsMenu = 'a[title="Contacts"]';
const addNewContact = '//button[contains(text(),"NEW CONTACT")]';
const createNewOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Create New")]';
const uploadFileOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Upload File")]';
const viewBtn = 'img[src*="view"]';
const editForm = '.userSedit';
const uploadForm = '.import_step';
const UserProfile = '.profile_name';
const profileButton = 'div[href*="profile"]';
const profilePage = '.profile-page';
const loginAsBtn = '.dropdown-usertree';
const openUserPlusBtn = '.role-title + span';
const userList = '.roletitle';
const profileName = '.name';
const backToSupervisor = '.nav-item a[href*="logout"]';
const dashboard = 'a[title="Dashboard"]';
const supervisor = '.supervisor';
const reportsMenu = 'a[title="Reports"]';
const reportsHeader = (header) => '.subitem a[title="' + header + '"]';
const accessDenied = '.card-title';
const reportLiveBox = '.report-live-buttons .label';
const inboundOutboundDropdown =
  '.ss-select-value-label[title="Inbound+Outbound"]';
const allDurationsDropdown = '.ss-select-value-label[title="All Durations"]';
const callResultsDropdown =
  '//div[contains(@class,"ss-select-control")][contains(text(),"Call Results")]';
const allAgentsDropdown =
  '//div[contains(@class,"ss-select-control")][span[text()="All Agents"]]';
const allCampaignsDropdown =
  '//div[contains(@class,"ss-select-control")][span[text()="All Campaigns"]]';
const datePicker = '.date-picker';
const exportBtn = '.reportCdrs__button';
const tableHeader = '.table thead';
const ReportContactsDropdowns = '.search_bar';
const departmentsDropdown =
  '//span[text()="Departments"]/parent::div[contains(@class,"ss-select-control")]';
const agentsName = '.reports-agents__agent-name';
const agentsDetailsPlusBtn = '.reports-agents__agent-row .fa-plus';
const agentsDetailsName = '.reports-agents__grid .reports-agents__grid-item';
const allStatusDropdown =
  '//div[contains(@class,"ss-select-control")][span[text()="All Statuses"]]';
const searchField = '.search-box';
const allGroupsDropdown =
  '//div[contains(@class,"ss-select-control")]//span[text()="All Groups"]';
const heatRangePicker = '.reports-heat__range-picker';
const rangeSelectRadioBtn = (range) =>
  `//label[@class="radio_cstm"][text()="${range}"]//span[@class="checkmark"]`;
const dashboardElementsBox = (elementName) =>
  `//div[text()="${elementName}"]/ancestor::div[contains(@class,"col")]`;
const dashboardGraphElements = (elementName) =>
  `//span[text()="${elementName}"]/ancestor::div[contains(@class,"col")]`;
const addNewFloor = "//button[contains(text(),' Add New Floor')]";

export default class Suprevisor {
  clickingOnContactOption() {
    cy.get(contactsMenu).click({ force: true });
  }

  clickLoginAsBtn() {
    cy.get(loginAsBtn).click();
  }

  clickOpenUser() {
    cy.get(openUserPlusBtn).click();
  }

  clickAddNewContactButton() {
    cy.xpath(addNewContact).click();
  }

  loginWithUser(user) {
    // const userName = user.toUpperCase();
    // cy.log(userName);
    cy.get(userList).then((el) => {
      for (let i = 0; i < el.length; i++) {
        cy.log(el[i].textContent.trim());
        if (el[i].textContent.trim() === user) {
          el[i].click();
          break;
        }
      }
    });
  }

  verifyRecentContactsDropdown(element) {
    for (let i = 0; i < element.length; i++) {
      cy.get(ReportContactsDropdowns).should('contain.text', element[i]);
    }
  }

  verifySupervisorProfile() {
    cy.get(supervisor, { timeout: 15000 }).should('be.visible');
  }

  clickDashboardMenu() {
    cy.get(dashboard).click({ force: true });
  }

  clickBackToSupervisor() {
    cy.get(backToSupervisor).click();
  }

  clickOnProfile() {
    cy.get(profileName).click();
  }

  selctCreateNewContactOption() {
    cy.xpath(createNewOption).click();
  }

  verifyLogin(user) {
    cy.get(profileName, { timeout: 15000 }).should('have.text', user);
  }

  selectUploadFileOption() {
    cy.xpath(uploadFileOption).click();
  }

  clickViewBtn() {
    cy.get(viewBtn).first().click({ force: true });
  }

  verifyViewForm() {
    cy.get(editForm).should('be.visible');
  }

  verifyEditForm() {
    cy.get(editForm).should('be.visible');
  }

  verifyUploadForm() {
    cy.get(uploadForm).should('be.visible');
  }

  clickUserProfile() {
    cy.get(UserProfile).click();
  }

  clickprofileButton() {
    cy.get(profileButton).click();
  }

  verifyProfilePage() {
    cy.get(profilePage).should('be.visible');
  }

  clickReportsMenu() {
    cy.get(reportsMenu).click({ force: true });
  }

  verifyReportsHeaderElements(header) {
    for (let i = 0; i < header.length; i++) {
      cy.get(reportsHeader(header[i])).should('exist');
    }
  }

  clickReportsHeader(header) {
    cy.get(reportsHeader(header)).click({ force: true });
  }

  verifyFloorMapAccessDenied() {
    cy.get(accessDenied).should('have.text', 'Access Denied');
  }

  verifyReportLiveElements(elements) {
    for (let i = 0; i < elements.length; i++) {
      cy.get(reportLiveBox).should('contain', elements[i]);
    }
  }

  verifyRecentContactsExportButton() {
    cy.get(exportBtn).should('be.visible');
  }

  verifyExportButton(name) {
    cy.get(`.report${name}Form__button`).should('be.visible');
  }

  verifyDatePicker() {
    cy.get(datePicker).should('be.visible');
  }

  verifyInboundOutboundDropdown() {
    cy.get(inboundOutboundDropdown).should('be.visible');
  }

  verifyAllAgentsDropdown() {
    cy.xpath(allAgentsDropdown).should('be.visible');
  }

  verifyAllCampaignsDropdown() {
    cy.xpath(allCampaignsDropdown).should('be.visible');
  }

  verifyCallResultsDropdown() {
    cy.xpath(callResultsDropdown).should('be.visible');
  }

  verifyAllDurationsDropdown() {
    cy.get(allDurationsDropdown).should('be.visible');
  }

  verifyRecentContactsTableHeadings(heading) {
    for (let i = 0; i < heading.length; i++) {
      cy.get(tableHeader).should('contain.text', heading[i]);
    }
  }

  verifyDepartmentsDropdown() {
    cy.xpath(departmentsDropdown).should('be.visible');
  }

  verifyAgentsTableHeadings(heading) {
    for (let i = 0; i < heading.length; i++) {
      cy.get(tableHeader).should('contain.text', heading[i]);
    }
  }

  verifyReportsAgentName(name) {
    cy.get(agentsName).should('contain.text', name);
  }

  clickAgentsDetailsPlusBtn() {
    cy.get(agentsDetailsPlusBtn).first().click({ force: true });
  }

  verifyAgentsDetails(data) {
    for (let i = 0; i < data.length; i++) {
      cy.get(agentsDetailsName).should('contain.text', data[i]);
    }
  }

  verifyAllStatusDropdown() {
    cy.xpath(allStatusDropdown).should('be.visible');
  }

  verifyCampaignsTableHeading(heading) {
    for (let i = 0; i < heading.length; i++) {
      cy.get(tableHeader).should('contain.text', heading[i]);
    }
  }

  verifySearchBox() {
    cy.get(searchField).should('be.visible');
  }

  verifyNumberSectionTableHeadings(heading) {
    for (let i = 0; i < heading.length; i++) {
      cy.get(tableHeader).should('contain.text', heading[i]);
    }
  }

  verifyAllGroupsDropdown() {
    cy.xpath(allGroupsDropdown).should('be.visible');
  }

  verifyReportHeatRangePicker() {
    cy.get(heatRangePicker).should('be.visible');
  }

  verifyRangeSelectRadioBtns(range) {
    for (let i = 0; i < range.length; i++) {
      cy.xpath(rangeSelectRadioBtn(range[i])).should('be.visible');
    }
  }

  verifyDashboardElementsBox(elementsName) {
    for (let i = 0; i < elementsName.length; i++) {
      cy.xpath(dashboardElementsBox(elementsName[i])).should('be.visible');
    }
  }

  verifyDashboardGraphElementsBox(elementsName) {
    for (let i = 0; i < elementsName.length; i++) {
      cy.xpath(dashboardGraphElements(elementsName[i])).should('be.visible');
    }
  }

  verifyAddNewFloorButton() {
    cy.xpath(addNewFloor).should('be.visible');
  }
}
