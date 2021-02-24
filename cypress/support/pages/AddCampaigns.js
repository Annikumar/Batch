const campaignsMenu = 'a[title="Campaigns"]';
const addCampaign = '//button[contains(text(),"CREATE NEW CAMPAIGN")]';
const inputName = 'input[name="name"]';
const switchBar = "span.switch";
const dialingModeDrpdwn =
  '//label[contains(text(),"Dialing Mode")]/following-sibling::div[contains(@class,"ss-select")]';
const nextArrow = ".collapse.show .btn-primary.circle";
const callerIdDrpdwn =
  '//div[contains(text(),"individual numbers")]/following-sibling::div/div[contains(@class,"ss-select")]';
const agentsDrpdwn =
  '//div[contains(@class,"ss-select-control")]/span[contains(text(),"Agents")]';
const createCampBtn = '//button[contains(text(),"CREATE CAMPAIGN")]';
const statusDrpdwn = '.campaignForm span[title="Status"]';
const dropdownOptions = ".ss-select-group-items";
const pausedDrpdwn = '.campaignForm span[title="Paused"]';

export default class AddCampaign {
  clickCampaignMenu() {
    cy.get(campaignsMenu).click({ force: true });
  }

  clickAddNewCampaign() {
    cy.xpath(addCampaign).click();
  }

  enterName(name) {
    cy.get(inputName).type(name);
  }
  enableAdvancedSwitchBar() {
    cy.get(switchBar).click();
  }

  selectDialingModeOption(dialMode) {
    cy.xpath(dialingModeDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(dialMode)
      .then((option) => {
        option[0].click();
      });
  }
  clickNextCircleArrow() {
    cy.get(nextArrow).click({ force: true });
  }

  selectCallerId(number) {
    cy.xpath(callerIdDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(number)
      .then((option) => {
        option[0].click();
      });
  }

  selectAgentsDrpdwn(agnts) {
    cy.xpath(agentsDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(agnts)
      .then((option) => {
        option[0].click();
      });
  }

  selectCallResultsOption(callRslts) {
    cy.get(
      'div[class="collapse show"] .row-calldisposition .ss-select'
    ).click();
    cy.get(dropdownOptions)
      .contains(callRslts)
      .then((option) => {
        option[0].click();
      });
  }

  clickCreateCampButton() {
    cy.xpath(createCampBtn).click({ force: true });
  }

  verifyAddedCampaign(camp) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + camp + '")]',
      { timeout: 10000 }
    ).should("be.visible");
  }

  clickToSelectPasused() {
    cy.get(statusDrpdwn).click();
  }

  clickToSelectActive() {
    cy.get(pausedDrpdwn).click();
  }

  clickToSelectStatus() {
    cy.get(statusDrpdwn).click();
  }

  changeCampaignStatusByDrpdwn(status) {
    cy.get(dropdownOptions)
      .contains(status)
      .then((option) => {
        option[0].click();
      });
  }

  changesCampaignStatus(campName, status) {
    cy.xpath(
      '//tr[td[span[contains(text(),"' +
        campName +
        '")]]]//td/div[contains(@class,"progress-status") and contains(@class,"' +
        status +
        '")]'
    ).click();
  }

  verifyCampaignNotVisible(camp) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + camp + '")]',
      { timeout: 5000 }
    ).should("not.be.visible");
  }
}
