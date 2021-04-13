import Campaign from './Campaigns';
import Dashboard from './Dashboard';
import PhoneNum from './PhoneNum';
import User from './User';

const dropdownOptions = '.ss-select-group-items .ss-select-option';
const agentsDrpdwn =
  '//div[contains(@class,"ss-select-control")]/span[contains(text(),"Agents")]';
const radioBtn = (mode) =>
  "//label[input[@type='radio']][contains(.,'" +
  mode +
  "')]//span[@class='checkmark']";

const dashboard = new Dashboard();
const campaign = new Campaign();
const phone = new PhoneNum();
const user = new User();

export default class Setup {
  clickCampaignMenu() {
    campaign.clickCampaignMenu();
  }

  BuyNewPhoneNumber(agent) {
    this.clickCampaignMenu();
    cy.wait(2000);
    cy.get('body').then(($body) => {
      if ($body.find('.alert-warning').length) {
        cy.get('.alert-warning').should('be.visible');
        phone.clickPhoneNumberMenu();
        phone.clickBuyDidButton();
        phone.selectStateModeOption('Colorado');
        phone.clickSearchButton();
        phone.verifysearchStartedToast();
        phone.selectPhoneNumber();
        phone.assignAgentUser(agent);
        phone.getFirstPhoneNumber();
        phone.clickOrderNowButton();
        phone.closingDialog();
      }
    });
  }

  getFirstPhoneNumber() {
    cy.get('.number', { timeout: 30000 })
      .first({ timeout: 30000 })
      .then((el) => {
        cy.readFile('cypress/fixtures/testData.json', (err, data) => {
          if (err) {
            return console.error(err);
          }
        }).then((data) => {
          data.BuyNumber = el.text().trim();
          cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data));
        });
      });
  }

  getPhoneNumber() {
    cy.get('a[title="Phone System"]').click({ force: true });
    cy.wait(2000);
    cy.get('body').then(($body) => {
      if ($body.find('.dispositions.table tbody tr td').length > 1) {
        cy.xpath(
          '(//td[span[contains(@class,"reputation")]]/preceding-sibling::td[1])[1]'
        ).then((el) => {
          const number = el.text().trim();
          cy.readFile('cypress/fixtures/testData.json', (err, data) => {
            if (err) {
              return console.error(err);
            }
          }).then((data) => {
            data.Number = number;
            cy.writeFile(
              'cypress/fixtures/testData.json',
              JSON.stringify(data)
            );
          });
        });
      }
    });
  }

  createCampaign(name, callResults, phone, agentName) {
    cy.wait(2000);
    this.clickCampaignMenu();
    cy.wait(2000);
    this.clickCampaignMenu();
    campaign.clickAddNewCampaign();
    campaign.enableAdvancedSwitchBar();
    cy.wait(2000);
    campaign.enterName(name);
    campaign.selectDialingModeOption('Predictive Dialer');
    campaign.selectCallerId('Individual Numbers', phone);
    campaign.clickNextCircleArrow();
    campaign.selectCallResultsOption(callResults);
    campaign.clickNextCircleArrow();
    this.selectAgentsDrpdwn('Individual Agents', agentName);
    campaign.clickCreateCampButton();
  }

  selectAgentsDrpdwn(agentMode, name) {
    cy.xpath(radioBtn(agentMode)).click();
    cy.xpath(agentsDrpdwn).click();
    cy.get(dropdownOptions).then((agent) => {
      for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < agent.length; j++) {
          if (agent[j].textContent.trim() === name[i]) {
            agent[j].click();
            break;
          }
        }
      }
    });
  }

  getAgentName() {
    user.clickingOnUserOption();
    cy.xpath('//tr[td[text()="Administrator"]]//td[1]').then((el) => {
      const agentName = el[0].textContent.trim();
      cy.readFile('cypress/fixtures/testData.json', (err, data) => {
        if (err) {
          return console.error(err);
        }
      }).then((data) => {
        data.AgentName = agentName;
        cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data));
      });
    });
  }

  addNewAgent(firstName, lastName, email, password, phone) {
    cy.get('.table-responsive tbody tr td:nth-child(1)').then((el) => {});
    cy.wait(3000);
    user.clickingOnUserOption();
    cy.wait(3000);
    user.clickAddNewUserButton();
    user.enterFirstName(firstName);
    user.enterLastName(lastName);
    user.selectROle('Agent');
    user.enterEmail(email);
    user.enterPassword(password);
    user.enterPhoneNumber(phone);
    user.clickSaveButton();
    user.verifySuccessToast();
  }

  addNewSupervisor(firstName, lastName, email, password, phone) {
    user.clickingOnUserOption();
    cy.wait(3000);
    user.clickAddNewUserButton();
    user.enterFirstName(firstName);
    user.enterLastName(lastName);
    user.selectROle('Supervisor');
    user.enterEmail(email);
    user.enterPassword(password);
    user.enterPhoneNumber(phone);
    user.clickSaveButton();
    user.verifySuccessToast();
  }
}
