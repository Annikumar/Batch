const campaignsMenu = 'a[title="Campaigns"]';
const campaign = (camp) =>
  '//table[contains(@class,"table")]//td[contains(.,"' + camp + '")]/span';
const accessDenied =
  "//div[contains(@class,'card-title') and (text()='Access Denied')]";
const statusDropdown = '.nav-item .ss-select';
const selectCampaignBox = '.modal-content .select__campaign__select';
const continueBtn = "//button[text()='Continue']";
const doneBtn = "//button[text()='Done']";
const recentContact = 'a[title="Recent Contacts"]';
const recentContactPage = '.reportCdrsForm.agent';
const editContact = 'span[title="Edit"]';
const callResultText = '.disposition';
const editCallResultWindow = '.modal-content .call-disposition-title';
const callResults = '.disposition-cell .disposition';
const softphoneCloseBtn = '.stg-softphone-right-close';
const softphone = '.stg-softphone-wrapper';
const contactsMenu = 'a[title="Contacts"]';
const contact = '.contacts__name';
const phoneNumber =
  "//tr[td[@class='contact-field' and contains(text(),'Phone')]]//td[@class='contact-value']";
const callTransferBtn = 'div[title="Transfer"]';
const callBtn = '.stg-softphone-callbutton';
const callResultWindow = '.modal-content .call-disposition-title';
const cancelBtn = '//button[contains(text(),"Cancel")]';
const confirmButton = '//button[contains(text(),"Confirm")]';
const searchBox = '.search-box';
const averageFieldBox = (text) => '//div[div[text()="' + text + '"]]';
const callFieldBox = (text) => `//div[span[text()="${text}"]]`;
const graphBox = (text) =>
  `//span[text()="${text}"]/ancestor::div[contains(@class,"col")]`;

const selectAgent =
  "//label[text()='Assign Agents']/ancestor::div[@class='card-body']//span[text()='Agents']";
const clickAgent = "//div[text()='automation testing']";
const RecentContactInboundOutbound = "span[title='Inbound+Outbound']";
const RecentContactTableHeader = '.table thead';
const timeInStatus = "//div[text()='Time In Status']";
const TISCalender = '.date-picker';
const TISExport = "//button[text()='Export']";
const TISTableHeader = '.report-agents__table thead';
const TISTableData = '.reports-agents__agent-row';

export default class Agent {
  clickCampaignMenu() {
    cy.get(campaignsMenu).click({ force: true });
  }

  selectCampaignName(campaignName) {
    cy.xpath(campaign(campaignName)).click();
  }

  verifyAccessDeniedMsg() {
    cy.xpath(accessDenied, { timeout: 5000 }).should('be.visible');
  }

  selectAgentStatus(status) {
    cy.get(statusDropdown).click().contains(status).click();
  }

  verifySelectCampaignBox() {
    cy.get(selectCampaignBox).should('be.visible');
  }

  selectCampaign(campaign) {
    cy.get('.modal-body .ss-select').click();
    cy.get('.ss-select-option', { timeout: 5000 }).then((el) => {
      for (let i = 0; i < el.length; i++) {
        if (el[i].textContent.trim() === campaign) {
          cy.get(el[i]).click();
          break;
        }
      }
    });
  }

  clickContinueBtn() {
    cy.xpath(doneBtn).click();
  }

  verifyContinueBtn() {
    cy.xpath(continueBtn).should('be.visible');
  }

  clickRecentContact() {
    cy.get(recentContact).click({ force: true });
  }

  verifyRecentContactPage() {
    cy.get(recentContactPage).should('be.visible');
  }

  clickEditRecentContact(firstName, lastName) {
    cy.get(editContact).first().click({ force: true });
  }

  verifyCallResult(result) {
    cy.get(callResultText)
      .first()
      .then((el) => {
        expect(el.text()).to.equal(result);
      });
  }

  verifyCallResultWindow() {
    cy.get(editCallResultWindow).should('be.visible');
  }

  selectCallResult(result) {
    cy.get(callResults).then(($el) => {
      for (let i = 0; i < $el.length; i++) {
        if ($el[i].textContent === result) {
          cy.get($el[i]).click();
          break;
        }
      }
    });
  }

  ChooseCallResult(result) {
    cy.wait(2000);
    cy.get('body').then(($body) => {
      if ($body.find(callResults).length) {
        this.selectCallResult(result);
        this.clickContinueBtn();
      }
    });
  }

  clickCloseSoftphoneBtn() {
    cy.get(softphoneCloseBtn, { timeout: 30000 }).click();
  }

  enterSearch(search) {
    cy.get(searchBox).type(search);
  }

  clickConfirmButton() {
    cy.xpath(confirmButton).click();
  }

  verifySoftphoneOpen() {
    cy.get(softphone, { timeout: 20000 }).should('be.visible');
  }

  clickingOnContactOption() {
    cy.get(contactsMenu).click({ force: true });
  }

  clickContactName() {
    cy.get(contact).first().click({ force: true });
  }

  clickPhoneNumber() {
    cy.xpath(phoneNumber).first().click();
  }

  clickCallTransferBtn() {
    cy.get(callTransferBtn).click();
  }

  clickCallBtn() {
    cy.get(callBtn).click();
  }

  clickEndCallBtn() {
    cy.get(callBtn).click();
  }

  verifyCallResultWindow() {
    cy.get(callResultWindow).should('be.visible');
  }

  verifyCancelBtn() {
    cy.xpath(cancelBtn).should('be.visible');
  }

  clickCancelBtn() {
    cy.xpath(cancelBtn).click();
  }

  verifyAverageCallDurationBox() {
    cy.xpath(averageFieldBox('Average Call Duration')).should('be.visible');
  }

  verifyAverageWaitTimeBox() {
    cy.xpath(averageFieldBox('Average Wait Time')).should('be.visible');
  }

  verifyAverageAbandonTimeBox() {
    cy.xpath(averageFieldBox('Average Abandon Time')).should('be.visible');
  }

  verifyTalkingTimeBox() {
    cy.xpath(callFieldBox('Talking Time')).should('be.visible');
  }

  verifyActiveCampaignsBox() {
    cy.xpath(callFieldBox('Active Campaigns')).should('be.visible');
  }

  verifyTotalCallsBox() {
    cy.xpath(callFieldBox('Total Calls')).should('be.visible');
  }

  verifyRemainingLeadsBox() {
    cy.xpath(callFieldBox('Remaining Leads')).should('be.visible');
  }

  verifyCallsSummaryBox() {
    cy.xpath(graphBox('Calls Summary')).should('be.visible');
  }

  verifyCallResultsBox() {
    cy.xpath(graphBox('Call Results')).should('be.visible');
  }

  verifyTotalCallsGraph() {
    cy.xpath(graphBox('Total Calls')).should('be.visible');
  }

  verifyAverageCallDurationGraph() {
    cy.xpath(graphBox('Average Call Duration')).should('be.visible');
  }

  verifyCallsLocationGraph() {
    cy.xpath(graphBox('Calls Locations')).should('be.visible');
  }

  selectAgent() {
    cy.xpath(selectAgent).click();
  }

  ClickAgent() {
    cy.xpath(clickAgent).click();
  }

  verifyCampaign(cmpname) {
    cy.xpath(campaign(cmpname)).should('be.visible');
  }

  verifyAverageCallDuration() {
    cy.xpath(averageCallDuration).should('be.visible');
  }

  verifyAverageWaitTime() {
    cy.xpath(averageWaitTime).should('be.visible');
  }

  verifyRecentContactDropdown(cont) {
    for (let i = 0; i < cont.length; i++) {
      cy.get(recentContactPage).should('contain.text', cont[i]);
    }
  }

  verifyTableHeaderElements(ele) {
    for (let i = 0; i < ele.length; i++) {
      cy.get(RecentContactTableHeader).should('contain.text', ele[i]);
    }
  }

  clickTimeInStatusButton() {
    cy.xpath(timeInStatus).click();
  }

  verifyTableInStatusCalender() {
    cy.get(TISCalender).should('be.visible');
  }

  verifyTableInStatusExport() {
    cy.xpath(TISExport).should('be.visible');
  }

  verifyTableInStatusTableHeader(head) {
    for (let i = 0; i < head.length; i++)
      cy.get(TISTableHeader).should('contain.text', head[i]);
  }

  verifyTableInStatusTableData() {
    cy.get(TISTableData).should('be.visible');
  }
}
