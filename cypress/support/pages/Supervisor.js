const contactsMenu = 'a[title="Contacts"]';
const addNewContact = '//button[contains(text(),"NEW CONTACT")]';
const createNewOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Create New")]';
const uploadFileOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Upload File")]';
const viewBtn = (firstName, lastName) =>
  "//span[contains(text(),'" +
  firstName +
  "') and contains(.,'" +
  lastName +
  "')]/ancestor::tr//img[contains(@src,'view')]";
const editForm = '.userSedit';
const uploadForm = '.import_step';
const UserProfile = '.profile_name';
const SettingsButton = "//span[text()='Settings']";
const profilePage = '.profile-page';

export default class Suprevisor {
  clickingOnContactOption() {
    cy.get(contactsMenu).click({ force: true });
  }

  clickAddNewContactButton() {
    cy.xpath(addNewContact).click();
  }

  selctCreateNewContactOption() {
    cy.xpath(createNewOption).click();
  }

  selectUploadFileOption() {
    cy.xpath(uploadFileOption).click();
  }

  clickViewBtn(firstName, lastName) {
    cy.xpath(viewBtn(firstName, lastName)).click();
  }

  verifyViewForm() {
    cy.get(editForm).should('be.visible');
  }

  verifyEditForm() {
    cy.get(editForm).should('be.visible');
  }

  verifyUploadForm() {
    cy.get(uploadForm).should('be.visible');
  }

  clickUserProfile() {
    cy.get(UserProfile).click();
  }

  clickSettingsButton() {
    cy.xpath(SettingsButton).click();
  }

  verifyProfilePage() {
    cy.get(profilePage).should('be.visible');
  }
}
