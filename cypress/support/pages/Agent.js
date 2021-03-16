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

  clickRecentContact() {
    cy.get(recentContact).click({ force: true });
  }

  verifyRecentContactPage() {
    cy.get(recentContactPage).should('be.visible');
  }

  clickEditRecentContact(firstName, lastName) {
    this.clickCloseSoftphoneBtn();
    cy.xpath(editContact(firstName, lastName)).click({ force: true });
  }

  verifyCallResult(result) {
    cy.get(callResultText).then((el) => {
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
    cy.get('body').then(($body) => {
      if ($body.find(softphoneCloseBtn).length) {
        cy.get(softphoneCloseBtn).click();
      }
    });
  }
}
