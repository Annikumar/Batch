const campaignsMenu = 'a[title="Campaigns"]';
const campaign = (camp) =>
  '//table[contains(@class,"table")]//td[contains(.,"' + camp + '")]/span';
const accessDenied =
  "//div[contains(@class,'card-title') and (text()='Access Denied')]";
const statusDropdown = '.nav-item .ss-select';
const selectCampaignBox =
  "//div[@class='modal-content'][contains(.,'Select Campaign')]";
const continueBtn = "//button[text()='Continue']";
const recentContact = 'a[title="Recent Contacts"]';
const recentContactPage = '.reportCdrsForm.agent';
const editContact = (firstName, lastName) =>
  "//tr[td[contains(text(),'" +
  firstName +
  "') and contains(.,'" +
  lastName +
  "')]]//span[@title='Edit']";
const callResultText = '.disposition';
const editCallResultWindow = '.modal-content .call-disposition-title';
const callResults = '.disposition-cell .disposition';
const softphoneCloseBtn = '.stg-softphone-right-close';
const softphone = '.stg-softphone-wrapper';
const contactsMenu = 'a[title="Contacts"]';
const contact = (firstName, lastName) =>
  "//tr[td[contains(.,'" +
  firstName +
  "') and contains(.,'" +
  lastName +
  "')]]//img[contains(@src,'view')]";
const phoneNumber =
  "//tr[td[@class='contact-field' and contains(text(),'Phone')]]//td[@class='contact-value']";
const callTransferBtn = 'div[title="Transfer"]';
const callBtn = '.stg-softphone-callbutton';
const callResultWindow = '.modal-content .call-disposition-title';
const cancelBtn = '//button[contains(text(),"Cancel")]';

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
    cy.xpath(selectCampaignBox).should('be.visible');
  }

  selectCampaign(campaign) {
    cy.contains(campaign).click();
  }

  clickContinueBtn() {
    cy.xpath(continueBtn).click();
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
    cy.xpath(editContact(firstName, lastName)).first().click({ force: true });
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

  clickCloseSoftphoneBtn() {
    cy.get(softphoneCloseBtn).click();
  }

  verifySoftphoneOpen() {
    cy.get(softphone, { timeout: 20000 }).should('be.visible');
  }

  clickingOnContactOption() {
    cy.get(contactsMenu).click({ force: true });
  }

  clickContactName(firstName, lastName) {
    cy.xpath(contact(firstName, lastName)).click({ force: true });
  }

  clickPhoneNumber() {
    cy.xpath(phoneNumber).click();
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
}
