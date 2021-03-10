const userMenu = 'a[title="Users"]';
const addNewUser = '//button[contains(text(),"ADD NEW USER")]';
const firstName = 'input[name="firstname"]';
const lastName = 'input[name="lastname"]';
const roleDropdown =
  '//label[contains(.,"Role")]/following-sibling::div[contains(@class,"ss-select")]';
const inputEmail = 'input[name="email"]';
const inputPassword = 'input[name="password"]';
const inputPhone = 'input[name="phone"]';
const saveButton = '//button[contains(text(),"SAVE")]';
const addedToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Saved")]';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"User deleted")]';
const dropdownOptions = '.ss-select-group-items';
const searchBox = '.search_bg';
const rolesDropdown = "span[title='All Roles']";
const groupsDropdown = "span[title='All Groups']";
const AdminstratorRole = "//span[div[text()='Adminstrators']]";
const Adminstrator = "//td[text()='Adminstrator']";
const Agent = "//td[text()='Agent']";
const AgentStatuses = "//span[text()='Agent Statuses']";
const AssignToGroup = "//div[label[text()='Assign to a Group ']]/div";
const CancelButton = "//button[text()=' CANCEL']";
const SecondPhone = 'input[name=phone2]';
const userTableHeading = '.users thead';
const userEditButton = "img[src*='icon-edit']";
const userDeleteButton = "img[src*='icon-delete']";
const addAgentStatus =
  "//div[contains(@class,'card-title')][.='Agent Statuses']//img[contains(@src,'add')]";
const agentStatusName = "tbody input[type='text']";
const agentStatusSaveBtn = 'button svg[data-icon="save"]';
const agentStatusRemoveBtn = (status) =>
  "//tr[td[input[@value='" + status + "']]]//img[contains(@src,'remove')]";
const agentGroupName = '.modal-body input';
const agentGroupRemoveBtn = (group) =>
  "//tr[td[text()='" + group + "']]//img[contains(@src,'remove')]";
const addAgentGroup =
  "//div[contains(@class,'card-title')][.='Agent Groups']//img[contains(@src,'add')]";

export default class User {
  clickingOnUserOption() {
    cy.get(userMenu).click();
  }

  clickAddNewUserButton() {
    cy.xpath(addNewUser).click();
  }

  enterFirstName(fstName) {
    cy.get(firstName).type(fstName);
  }
  enterLastName(lstName) {
    cy.get(lastName).type(lstName);
  }
  selectROle(role) {
    cy.xpath(roleDropdown).click();
    // cy.xpath(
    //   '//div[@class="ss-select-dropdown"]//div[contains(text(),"' + role + '")]'
    // ).click();
    cy.get(dropdownOptions)
      .contains(role)
      .then((option) => {
        option[0].click();
      });
  }
  enterEmail(email) {
    cy.get(inputEmail).type(email);
  }
  enterPassword(pswd) {
    cy.get(inputPassword).type(pswd);
  }
  enterPhoneNumber(num) {
    cy.get(inputPhone).type(num);
  }
  clickSaveButton() {
    cy.xpath(saveButton).click();
  }
  verifySuccessToast() {
    cy.xpath(addedToast, { timeout: 5000 }).should('be.visible');
  }

  verifyAddedUser(fstaName, lstName) {
    cy.xpath(
      '//table[contains(@class,"users")]//td[contains(.,"' +
        fstaName +
        '") and contains(.,"' +
        lstName +
        '")]',
      { timeout: 15000 }
    )
      .scrollIntoView()
      .should('be.visible');
  }

  deleteAddedContact(fstaName, lstName) {
    cy.xpath(
      '//table[contains(@class,"users")]//tr[td[contains(.,"' +
        fstaName +
        '") and contains(.,"' +
        lstName +
        '")]]//img[contains(@src,"delete")]'
    ).click();
  }

  handleAlertForDelete() {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Delete?');
    });
    cy.on('window:confirm', () => true);
  }

  verifyDeletedToast() {
    cy.xpath(deleteToast).should('be.visible');
  }

  verifySearchBox() {
    cy.get(searchBox).should('be.visible');
  }

  searchUser(user) {
    cy.get(searchBox).type(user);
  }

  verifyRoleDropdown() {
    cy.get(rolesDropdown).should('be.visible');
  }

  verifyGroupsDropdown() {
    cy.get(groupsDropdown).should('be.visible');
  }

  clickRoleDropdown() {
    cy.get(rolesDropdown).click();
  }

  clickAdminstratorRole(role) {
    cy.get(dropdownOptions)
      .contains(role)
      .then((option) => {
        option[0].click();
      });

    cy.xpath(Adminstrator).should('be.visible');
    cy.xpath(Agent).should('not.exist');
  }

  verifySearchedUser() {
    cy.xpath('//table[contains(@class,"users")]//td[text()="qa supervisor"]', {
      timeout: 15000,
    }).should('be.visible');
  }

  verifyAgentStatusesHeading() {
    cy.xpath(AgentStatuses).should('be.visible');
  }

  verifyAgentStatusesType(statuses) {
    for (let i = 0; i < statuses.length; i++) {
      cy.xpath("//td[text()='" + statuses[i] + "']").should('be.visible');
    }
  }

  verifyFirstName() {
    cy.get(firstName).should('be.visible');
  }

  verifyLastName() {
    cy.get(lastName).should('be.visible');
  }

  verifyRoleDropdownNewUser() {
    cy.xpath(roleDropdown).should('be.visible');
  }

  verifyEmailField() {
    cy.get(inputEmail).should('be.visible');
  }

  verifyPasswordField() {
    cy.get(inputPassword).should('be.visible');
  }

  verifyPhoneNumber() {
    cy.get(inputPhone).should('be.visible');
  }

  verifyAssignToGroup() {
    cy.xpath(AssignToGroup).should('be.visible');
  }

  verifyCancelButton() {
    cy.xpath(CancelButton).should('be.visible');
  }

  clickCancelButton() {
    cy.xpath(CancelButton).click();
  }

  verifySaveButton() {
    cy.xpath(saveButton).should('be.visible');
  }

  verifySecondPhoneField() {
    cy.get(SecondPhone).should('be.visible');
  }

  verifyAddNewUserButton() {
    cy.xpath(addNewUser).should('be.visible');
  }

  verifyUserTableHeadings(heading) {
    for (let i = 0; i < heading.length; i++) {
      cy.get(userTableHeading).should('contain.text', heading[i]);
    }
  }

  verifyUserEditButton() {
    cy.get(userEditButton).should('be.visible');
  }

  verifyUserDeleteButton() {
    cy.get(userDeleteButton).should('be.visible');
  }

  clickAddAgentStatus() {
    cy.xpath(addAgentStatus, { timeout: 5000 }).click();
  }

  enterAgentStatusName(name) {
    cy.get(agentStatusName).type(name);
  }

  clickOnAgentStatusSaveBtn() {
    cy.get(agentStatusSaveBtn).click();
  }

  verifyAddedAgentStatus(name) {
    cy.get(agentStatusName).should('have.value', name);
  }

  removeAddedAgentStatus(name) {
    cy.xpath(agentStatusRemoveBtn(name), { timeout: 5000 }).click({
      force: true,
    });
  }

  verifyRemovedAgentStatus() {
    cy.get(agentStatusName).should('not.exist');
  }

  enterAgentGroupName(name) {
    cy.get(agentGroupName).type(name);
  }

  clickOnAgentGroupSaveBtn() {
    cy.get(agentStatusSaveBtn).click();
  }

  verifyAddedAgentGroup(group) {
    cy.xpath(agentGroupRemoveBtn(group)).should('be.visible');
  }

  removeAddedAgentGroup(group) {
    cy.xpath(agentGroupRemoveBtn(group)).click();
  }

  verifyRemovedAgentGroup(group) {
    cy.xpath(agentGroupRemoveBtn(group)).should('not.exist');
  }

  clickAddAgentGroup() {
    cy.xpath(addAgentGroup).click();
  }
}
