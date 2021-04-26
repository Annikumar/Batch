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
  "//tr[td[@class='contact-field' and contains(.,'Phone')]]//td[contains(@class,'contact-value')]//span";
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
const activeCampaignCount =
  '//span[text()="Active Campaigns"]/preceding-sibling::span[not(@class="icon")]';
const dashboard = 'a[title="Dashboard"]';
const totalCallsCount =
  '//span[text()="Total Calls"]/preceding-sibling::span[not(@class="icon")]';
const followUpCall = '.contact-view__calendar-btn';
const contactName = (firstName, lastname) =>
  '//span[text()="' + firstName + '" and text()="' + lastname + '"]';
const month = '.month-selector .title';
const nextButton = '.fa-chevron-right';
const day = '.day';
const saveBtn = 'button svg[data-icon="save"]';
const savedScheduledCall = '.day .item';
const closeBtn = '//button[contains(text(),"Close")]';
const notesBtn = '//button[text()="Notes"]';
const addNewNoteBtn = '//button[text()="Add New Note"]';
const noteTextField = 'div.ProseMirror';
const deleteNoteBtn = (note) =>
  '//div[contains(@class,"comment-item-body") and span[p[text()="' +
  note +
  '"]]]/parent::div/preceding-sibling::div//span//*[name()="svg"][@data-icon="trash"]';

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
          $el[i].click();
          break;
        }
      }
    });
  }

  ChooseCallResult(result) {
    cy.wait(3000);
    cy.get('body').then(($body) => {
      if ($body.find(callResults).length) {
        this.selectCallResult(result);
        this.clickContinueBtn();
      }
    });
  }

  clickCloseSoftphoneBtn() {
    cy.get(softphoneCloseBtn, { timeout: 30000 }).click({ force: true });
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

  verifyActiveCampaignCount() {
    cy.xpath(activeCampaignCount).then((el) => {
      expect(parseInt(el.text().trim())).to.equal(1);
    });
  }

  clickDashboardMenu() {
    cy.get(dashboard).click({ force: true });
  }

  getTotalCallsCount() {
    cy.xpath(totalCallsCount).then((count) => {
      cy.readFile('cypress/fixtures/testData.json').then((data) => {
        data.TotalCallsCount = count.text().trim();
        cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data));
      });
    });
  }

  verifyTotalCallsCount(count) {
    cy.xpath(totalCallsCount).then((el) => {
      expect(parseInt(el.text().trim())).greaterThan(parseInt(count));
    });
  }

  clickOnContactName(contact) {
    const [firstName, lastName] = contact.split(' ');
    cy.xpath(contactName(firstName, lastName)).click();
  }

  clickFollowUpCall() {
    cy.get(followUpCall).click();
  }

  selectDateToFollowUpCall(date) {
    cy.get('.modal-content').should('be.visible');
    const [Date, monthYear] = date.split(',');
    cy.log(monthYear);
    cy.log(Date);
    for (let i = 0; i < 36; i++) {
      cy.get(month).then(($month) => {
        for (let i = 0; i < $month.length; i++) {
          if ($month[i].textContent.trim() != monthYear) {
            cy.get(nextButton).click();
            break;
          }
        }
      });
    }
    cy.get(day).then(($day) => {
      for (let i = 0; i < $day.length; i++) {
        if ($day[i].textContent.trim() === Date) {
          cy.wait(2000);
          cy.get($day[i]).click();
          break;
        }
      }
    });
  }

  clickSaveButton() {
    cy.get(saveBtn).click();
  }

  verifyScheduledFollowUpCall(contact) {
    cy.get(savedScheduledCall).should(
      'contain.text',
      `Call Back to ${contact}`
    );
  }

  clickCloseButton() {
    cy.xpath(closeBtn).click();
  }

  clickNotesBtn() {
    cy.xpath(notesBtn).click();
  }

  clickAddNewNoteBtn() {
    cy.xpath(addNewNoteBtn).click();
  }

  enterNote(note) {
    cy.get(noteTextField).type(note);
  }

  clickDeletNoteBtn(note) {
    cy.xpath(deleteNoteBtn(note)).click();
  }

  verifyAddedNote(note, condition) {
    cy.xpath(deleteNoteBtn(note)).should(condition);
  }
}
