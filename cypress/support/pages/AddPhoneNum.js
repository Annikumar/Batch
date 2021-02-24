import promisify from "cypress-promise";

const phoneNumMenu = 'a[title="Phone System"]';
const buyDidbtn = '//button[contains(text(),"BUY DID")]';
const stateDrpdwn =
  '//div[@class="modal-body"]//div[contains(@class,"ss-select")]//span[contains(text(),"Select state")]';
const searchBtn = '.modal-body button svg[data-icon="search"]';
const firstNum = '//div[@class="modal-body"]//div[@class="numbers"]/div[1]';
const firstNumberChkBx =
  '//div[@class="modal-body"]//div[@class="numbers"]/div[1]//input';
const orderNow = '.btn svg[data-icon="shopping-cart"]';
// const orderNow = '//button[contains(text(),"Order Now")]';
const dropdownOptions = ".ss-select-group-items";
const searchToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Search started")]';
const closeBtn = '//button[contains(text(),"Close")]';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Number deleted")]';
const assignToDrpdwn = '//div[span[contains(text(),"User extension")]]';

export default class AddPhoneNum {
  clickPhoneNumberMenu() {
    cy.get(phoneNumMenu).click({ force: true });
  }

  clickBuyDidButton() {
    cy.xpath(buyDidbtn).click();
  }

  selectStateModeOption(state) {
    cy.xpath(stateDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(state)
      .then((option) => {
        option[0].click();
      });
  }
  clickSearchButton() {
    cy.get(searchBtn).click({ force: true });
  }

  selectPhoneNumber(number) {
    cy.xpath(firstNumberChkBx, { timeout: 14000 }).click();
  }

  async clickOrderNowButton() {
    await promisify(cy.get(orderNow).click({ force: true }));
  }

  async closingDialog() {
    await promisify(cy.xpath(closeBtn).click());
  }

  async getFirstPhoneNumber() {
    const totalAmt = await promisify(cy.xpath(firstNum));
    return totalAmt.text().trim();
  }

  verifysearchStartedToast() {
    cy.xpath(searchToast, { timeout: 5000 }).should("be.visible");
  }

  verifyAddedPhoneNum(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + num + '")]',
      { timeout: 10000 }
    ).should("be.visible");
  }
  verifyAddedPhoneNumNotVisible(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + num + '")]',
      { timeout: 5000 }
    ).should("not.be.visible");
  }

  deleteAddedPhoneNumber(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//tr[td[contains(.,"' +
        num +
        '")]]//span[img[contains(@src,"delete.svg")]]',
      { timeout: 5000 }
    ).click();
  }
  handleAlertForDelete() {
    cy.on("	window:alert", (str) => {
      expect(str).to.equal("Delete Number?");
    });
    cy.on("window:confirm", () => true);
  }
  verifyDeletedToast() {
    cy.xpath(deleteToast).should("be.visible");
  }

  assignAgentUser(usrName) {
    cy.xpath(assignToDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(usrName)
      .then((option) => {
        option[0].click();
      });
  }
}
