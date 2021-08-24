const statusDropdown = '.nav-item.auth__agent-presence .ss-select';
const statusNames = `.ss-select-group-items .ss-select-option .agent__presence-name`;
const selectCampaignHeading = '.select__campaign-title';
const selectCampaignDropdown = '.modal-content .select__campaign__select';
const campaignNames = '.ss-select-option span + span';
const confirmButton = '.modal-content button';
const campaignMenu = 'a[title="Campaigns"]';
const advanceSwitch = '.campaign-wizard .switch';
const campaignNameField = 'input[name="name"]';
const radioButtons = (radioButtonName) =>
  `//label[@class="radio_cstm"][contains(.,"${radioButtonName}")]//span[@class="checkmark"]`;
const nextButton = '.collapse.show button.circle';
const numbersDropdown = `//label[text()="Caller ID"]/ancestor::div[contains(@class,"row")]//div[contains(@class,"ss-select-control")]`;
const options = '.ss-select-option';
const callingHours = `//label[text()="Calling Hours"]/following-sibling::div/div`;
const countIncreasingFields = `//label[text()="Simultaneous Dials Per Agent"]/following-sibling::div//div[@class="input-group-append"]//span[text()="+"]`;
const callResultsDropdown = '.row-calldisposition .ss-select-control';
const agentsDropdown =
  '//div[contains(@class,"ss-select-control")]/span[contains(text(),"Agents")]';
const successToastMessage = `.Toastify__toast-body`;
const threeDotMenuBtn = (CampName) =>
  `//tr[td[.="${CampName}"]]//div[contains(@class,"dropdown")]`;
const dropdownItems = '.show .dropdown-item';
const warningTitle = '.warning__modal .modal-content .warning__modal-title';
const warningGotItBtn = '.warning__modal .modal-content button';
const simultaneousDialsPerAgent = `//label[text()="Simultaneous Dials Per Agent"]/parent::div//div[contains(@class,"number-editor")]//input[@type="text"]`;

export default class Dialer {
  selectStatus(statusName) {
    cy.get(statusDropdown).click();
    cy.get(statusNames).then((names) => {
      for (let i = 0; i < names.length; i++) {
        if (names[i].textContent.trim() === statusName) {
          cy.get(names[i]).click();
          break;
        }
      }
    });
  }

  verifySelectCampaignBoxHeading() {
    cy.get(selectCampaignHeading).should('have.text', 'Start Calling');
  }

  clickSelectCampaignDropdown() {
    cy.get(selectCampaignDropdown).click();
  }

  selectCampaign(campaignName) {
    cy.get(campaignNames).then((Names) => {
      for (let i = 0; i < Names.length; i++) {
        if (Names[i].textContent.trim() === campaignName) {
          cy.get(Names[i]).click();
          break;
        }
      }
    });
  }

  clickConfirmButton() {
    cy.get(confirmButton).click();
  }

  clickCampaignMenu() {
    cy.get(campaignMenu).click({ force: true });
  }

  clickOnButton(buttonName) {
    cy.get('button').then((Btn) => {
      for (let i = 0; i < Btn.length; i++) {
        if (Btn[i].textContent.trim() === buttonName) {
          cy.get(Btn[i]).click();
          break;
        }
      }
    });
  }

  clickAdvanceSwitch() {
    cy.get(advanceSwitch).click();
  }

  enterCampaignName(name) {
    cy.get(campaignNameField).type(name);
  }

  clickOnRadioButton(radioButtonName) {
    cy.xpath(radioButtons(radioButtonName)).click();
  }

  clickNextButton() {
    cy.get(nextButton).click();
  }

  clickNumbersDropdown() {
    cy.xpath(numbersDropdown).click();
  }

  selectPhoneNumber(num) {
    cy.get(options).then((number) => {
      for (let i = 0; i < number.length; i++) {
        if (number[i].textContent.trim() === num) {
          cy.get(number[i]).click();
          break;
        }
      }
    });
  }

  clickCallingHours() {
    cy.xpath(callingHours).click();
  }

  clickCallResultsDropdown() {
    cy.get(callResultsDropdown).click();
  }

  selectCallResults(callResults) {
    for (let i = 0; i < callResults.length; i++) {
      cy.get(options).then((results) => {
        for (let j = 0; j < results.length; j++) {
          if (results[j].textContent.trim() === callResults[i]) {
            results[j].click();
          }
        }
      });
    }
  }

  selectAgentToAssign(agentName) {
    cy.xpath(agentsDropdown).click();
    cy.get(options).then((AgentNames) => {
      for (let i = 0; i < AgentNames.length; i++) {
        if (AgentNames[i].textContent.trim() === agentName) {
          cy.get(AgentNames[i]).click();
        }
      }
    });
    // cy.xpath(agentsDropdown).click();
  }

  verifySuccessToastMessage(message) {
    cy.get(successToastMessage)
      .should('be.visible')
      .should('contain.text', message);
  }

  clickThreeDotMenuBtn(campName) {
    cy.xpath(threeDotMenuBtn(campName)).click();
  }

  clickOnDropdownItem(itemName) {
    cy.get(dropdownItems).then((items) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.trim() === itemName) {
          cy.get(items[i]).click();
          break;
        }
      }
    });
  }

  verifyWarningTitle() {
    cy.get(warningTitle).should('be.visible').should('have.text', 'Warning');
  }

  clickWarningGotItBtn() {
    cy.get(warningGotItBtn).click();
  }

  enterSimultaneousDialsPerAgent(number) {
    cy.xpath(simultaneousDialsPerAgent).clear().type(number);
  }
}
