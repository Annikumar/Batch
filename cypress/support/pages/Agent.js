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
const phoneNumber = '.phone__a-wrapper';
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
const day = '.day .title';
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
const clickContact = "[viewBox='0 0 45 45']";
const searchBoxOnContact = "[placeholder='Search...']";
const roundBtns = '.checkmark';
const selectSelfMadeOnly =
  "//*[@id='root']/section/div/div[1]/form/div[2]/div[1]/div/label/span";
const selectAppointmentMadeOnly =
  "//*[@id='root']/section/div/div[1]/form/div[2]/div[2]/div/label/span";
const allBtn =
  "//*[@id='root']/section/div/div[1]/form/div[1]/div[2]/label[1]/span";
const dialedBtn =
  "//*[@id='root']/section/div/div[1]/form/div[1]/div[2]/label[2]/span";
const undialedBtn =
  "//*[@id='root']/section/div/div[1]/form/div[1]/div[2]/label[3]/span";
const contactTable = '.table thead';
const refreshBtn = "[title='Refresh']";
const allListBtn =
  "//*[@id='root']/section/div/div[1]/form/div[1]/div[4]/div/div";
const equityBox = '.equity_box';
const statusBtn = "[title='Status']";
const agentBtn = "[title='Agent']";
const campaignTableHeader = '.table thead';
const viewContactHeader = '.contact-view-address-bar';
const contactNameImg = "[src='/img/contact-details.svg']";
const scoreImg = '.score-small-value';
const callsInfo = "[alt='Calls']";
const voiceMailInfo = "[alt='Voicemail']";
const leadInfoBtn = ".btn-primary[type='button']";
const propertyDetailsBtn =
  "//*[@id='root']/section/div/div/div/div[2]/div[1]/div/div/div[1]/button[2]";
const activitiesBtn =
  "//*[@id='root']/section/div/div/div/div[2]/div[1]/div/div/div[1]/button[3]";
const campaignsBtn =
  "//*[@id='root']/section/div/div/div/div[2]/div[1]/div/div/div[1]/button[4]";
const editFormOnViewContact = '.contact-field';
// const saveBtn = '.contact__save-btn';
const contactCalengerViewBtn = '.contact-view__calendar-btn';
const gooleMapsBtn = "[alt='Google Maps']";
const zillowBtn = "[alt='Zillow']";
const scriptBody = '.card-body';
const scriptMinimizeBtn = '.script__hide-btn';
const agentProfileDropDown = '.profile_drop';
const agentProfile = "[href='/profile/']";
const agentProfilepage = '.profile-content';
const agentFirstName = "[name='firstname']";
const agentLastName = "[name='lastname']";
const agentEmail = "[name='email']";
const agentAddress = "[name='address']";
const agentCity = "[name='city']";
const agentStateDropDown =
  "//*[@id='root']/section/div/div/div[1]/div[3]/div[3]/div/div";
const agentZipCodeInputBox = "[name='zip']";
const agentMobileNumber = "[name='phone']";
const agentLandLineNumber = "[name='phone2']";
const agentTimeZone = "[title='(UTC-05:00) Eastern Time']";
const agentProfilePicChangeBtn =
  "//*[@id='root']/section/div/div/div[1]/div[5]/div/div/button";
const agentPasswordChangeBtn =
  "//*[@id='root']/section/div/div/div[1]/div[6]/div[1]/button";
const changeCampaignBtn =
  "//*[@id='navbarSupportedContent']/ul/li[6]/div/div/a[1]";
const changeCampaignBody = '.modal-content';
const confirmBtnOnChangeCamp = "//button[contains(text(),'Confirm')]";
const calenderBtn = ".nav-link[href='/tasks/']";
const dateChangeBar = "//*[@id='root']/section/div/div/div[1]/div[1]/span[2]";
const verifyCalaenderDays = '.titles';
const DashboardBtn = "//*[@id='root']/div[1]/div[2]/ul/li[1]/a/span";
const calenderOnDashBoard =
  "//div[@class='fakeinput inverted fakeinput__overflow']";
const calenderSideBar = '.links';
const calenderFromDateToDate = "[placeholder='MM/DD/YYYY']";
const daysOfCalender = '.DayPicker-WeekdaysRow';
const monthChangeBnts = '.svg-stroke';
const monthYearStatusBar = '.daypicker__month-select';
const agentDetailsPlusBtn = "[data-icon='plus']";
const agentCallDetails = '.reports-agents__summary';
const campaignBtnOnViewContact =
  "//*[@id='root']/section/div/div/div/div[2]/div[1]/div/div/div[1]/button[4]";
const viewContactCampaignTableHeader = '.table thead';
const notesBtnOnViewContact =
  "//*[@id='root']/section/div/div/div/div[2]/div[1]/div/div/div[1]/button[5]";
// const addNewNoteBtn = "//button[text()='Add New Note']";
const addNewNotePage = '.modal-content';
const addNoteCloseBtn = "//button[contains(text(),' Close')]";
const activitiesPage = '.userSedit';

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
    cy.get(recentContact).first().click({ force: true });
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
    cy.get(phoneNumber).first().click();
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
  clickOnContactButton() {
    cy.get(clickContact).click();
  }
  verifySearchBox() {
    cy.get(searchBoxOnContact).should('be.visible');
  }
  checkRoundAndCheckBtns() {
    cy.get(roundBtns).click({ multiple: true }).should('be.visible');
  }
  clickOnSelfMadeButton() {
    cy.xpath(selectSelfMadeOnly).click();
  }
  clickOnAppointmentMadeOnlyBtn() {
    cy.xpath(selectAppointmentMadeOnly).click();
  }
  selectAllRoundBtn() {
    cy.xpath(allBtn).click();
  }
  veirifyConatactTableHeader(contactHeader) {
    for (let i = 0; i < contactHeader.length; i++)
      cy.get(contactTable).should('contain.text', contactHeader[i]);
  }
  verifyRefreshBtn() {
    cy.get(refreshBtn).should('be.visible');
  }
  verifyListButton() {
    cy.xpath(allListBtn).should('be.visible');
  }
  verifyEquityBox(eqBox) {
    for (let i = 0; i < eqBox.length; i++)
      cy.get(equityBox).should('contain.text', eqBox[i]);
  }
  verifySearchBoxOnCampaign() {
    cy.get(searchBox).should('be.visible');
  }
  veriffyStatusBtn() {
    cy.get(statusBtn).should('be.visible');
  }
  verifyAgentBtn() {
    cy.get(agentBtn).should('be.visible');
  }
  verfyCampaignTableHeader(CampHeader) {
    for (let i = 0; i < CampHeader.length; i++)
      cy.get(campaignTableHeader).should('contain.text', CampHeader[i]);
  }
  vierifyTheHeaderOfViewContact(headViewCon) {
    for (let i = 0; i < headViewCon.length; i++) {
      cy.get(viewContactHeader).should('contain.text', headViewCon[i]);
    }
    cy.get(contactNameImg).should('be.visible');
    cy.get(scoreImg).should('be.visible');
  }
  verifyContactViewBtn() {
    cy.get(contactCalengerViewBtn).should('be.visible');
  }
  verifyZillowBtn() {
    cy.get(zillowBtn).should('be.visible');
  }
  verifyGoogleMapsBtn() {
    cy.get(gooleMapsBtn).should('be.visible');
  }
  verifyLeadInfoBtn() {
    cy.get(leadInfoBtn).should('be.visible');
  }
  verifyCallsInfoInHeder() {
    cy.get(callsInfo).should('be.visible');
  }
  verifyVoiceMailInfo() {
    cy.get(voiceMailInfo).should('be.visible');
  }
  verifyPropertyDetailsBtn() {
    cy.xpath(propertyDetailsBtn).should('be.visible');
  }
  verifyActivitiesBtn() {
    cy.xpath(activitiesBtn).should('be.visible');
  }
  verifyCampaignBtn() {
    cy.xpath(campaignsBtn).should('be.visible');
  }
  verifyNotesBtn() {
    cy.xpath(notesBtn).should('be.visible');
  }
  verifyEdiitFormOnViewContact(editForm) {
    for (let i = 0; i < editForm.length; i++) {
      cy.get(editFormOnViewContact).should('contain.text', editForm[i]);
    }
  }
  verifySaveBtn() {
    cy.get(saveBtn).should('be.visible');
  }
  verifyScriptBody() {
    cy.get(scriptBody).should('be.visible');
  }
  VerifyscriptMinimizeBtn() {
    cy.get(scriptMinimizeBtn).should('be.visible');
  }
  clickOnAgentProfileDropDown() {
    cy.get(agentProfileDropDown).click();
  }
  clickOnagentProfile() {
    cy.get(agentProfile).click();
  }
  verifyElementsOfAgentProfile(profileElement) {
    for (let i = 0; i < profileElement.length; i++) {
      cy.get(agentProfilepage).should('contain.text', profileElement[i]);
    }
  }
  verifyAgentFirstNameInputBox() {
    cy.get(agentFirstName).should('be.visible');
  }
  verifyAgentLastNameInputBox() {
    cy.get(agentLastName).should('be.visible');
  }
  verifyAgentEmailInputBox() {
    cy.get(agentEmail).should('be.visible');
  }
  verifyAgentAddressInputBox() {
    cy.get(agentAddress).should('be.visible');
  }
  verifyAgentCityInputBox() {
    cy.get(agentCity).should('be.visible');
  }
  verifyAgentStateDropDown() {
    cy.xpath(agentStateDropDown).should('be.visible');
  }
  verifyAgentZipCodeInputBox() {
    cy.get(agentZipCodeInputBox).should('be.visible');
  }
  verifyAgentMobileNumberInputBox() {
    cy.get(agentMobileNumber).should('be.visible');
  }
  verifyAgentLandLineNumberInputBox() {
    cy.get(agentLandLineNumber).should('be.visible');
  }
  verifyAgentTimeZoneDropDown() {
    cy.get(agentTimeZone).should('be.visible');
  }
  verifyAgentProfilePicChangeBtn() {
    cy.xpath(agentProfilePicChangeBtn).should('be.visible');
  }
  verifyAgentPasswordChangeBtn() {
    cy.xpath(agentPasswordChangeBtn).should('be.visible');
  }
  clickOnChangeCampaignBtn() {
    cy.get('.dropdown-item').contains('Change Campaign').click();
  }
  verifyTesxtOnChangeCampaignPage(campText) {
    cy.get(changeCampaignBody).should('contain.text', campText);
  }
  verifyConfirmBtnOnChangeCamp() {
    cy.xpath(confirmBtnOnChangeCamp).should('be.visible').click();
  }
  openCalender() {
    cy.get(calenderBtn).click();
  }
  verifyDateChangeBar() {
    cy.xpath(dateChangeBar).should('be.visible');
  }
  verifyDaysOfcalender(days) {
    for (let i = 0; i < days.length; i++) {
      cy.get(verifyCalaenderDays).should('contain.text', days[i]);
    }
  }
  clickOnDashboardBtn() {
    cy.xpath(DashboardBtn).click();
  }
  openCalenderOnDashBoard() {
    cy.xpath(calenderOnDashBoard).should('be.visible').click();
  }
  verifyCalenderSideBar(sideBar) {
    for (let i = 0; i < sideBar.length; i++) {
      cy.get(calenderSideBar).should('be.visible', sideBar[i]);
    }
  }
  verifyCalenderFromDateToDate() {
    cy.get(calenderFromDateToDate).should('be.visible');
  }
  verifyDaysOfCalender(days) {
    for (let i = 0; i < days.length; i++) {
      cy.get(daysOfCalender).should('contain.text', days[i]);
    }
  }
  verifyMonthChangeBnts() {
    cy.get(monthChangeBnts).should('be.visible').should('have.length', 2);
  }
  verifyMonthYearStatusBar() {
    cy.get(monthYearStatusBar).should('be.visible');
  }
  clickOnAgentDetailsPlusBtn(agent_Details) {
    cy.get(agentDetailsPlusBtn).click();
    for (let i = 0; i < agent_Details.length; i++) {
      cy.get(agentCallDetails).should('contain.text', agent_Details[i]);
    }
  }
  clickOnCampaignBtnOnViewContact() {
    cy.xpath(campaignBtnOnViewContact).click();
  }
  verifyViewContactCampaignTableHeader(headerElements) {
    for (let i = 0; i < headerElements.length; i++) {
      cy.get(viewContactCampaignTableHeader).should(
        'contain.text',
        headerElements[i]
      );
    }
  }
  clickOnNotesBtnOnViewContact() {
    cy.xpath(notesBtnOnViewContact).click();
  }
  clickOnAddNewNoteBtn() {
    cy.xpath(addNewNoteBtn).click();
  }
  verifyAddNewNotePage() {
    cy.get(addNewNotePage)
      .should('be.visible')
      .should('contain.text', 'New Note');
  }
  clickOnAddNoteCloseBtn() {
    cy.xpath(addNoteCloseBtn).click({ force: true });
  }
  clickOnactivitiesBtn() {
    cy.xpath(activitiesBtn).click();
  }
  verifyActivitiesPage(activityText) {
    cy.get(activitiesPage).should('contain.text', activityText);
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

  selectDateToFollowUpCall() {
    const today = new Date();
    const date = today.getDate();
    const Month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const monthYear = `${Month} ${year}`;
    cy.get('.modal-content').should('be.visible');
    cy.log(monthYear);
    cy.log(date);
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
        if ($day[i].textContent.trim() === date.toString()) {
          cy.wait(1000);
          cy.log($day[i].textContent.trim());
          cy.log(date);
          $day[i].click();
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
