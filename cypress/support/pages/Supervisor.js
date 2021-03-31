const contactsMenu = 'a[title="Contacts"]';
const addNewContact = '//button[contains(text(),"NEW CONTACT")]';
const createNewOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Create New")]';
const uploadFileOption =
  '//div[contains(@class,"show")]/a[contains(text(),"Upload File")]';
const viewBtn = 'img[src*="view"]';
const editForm = '.userSedit';
const uploadForm = '.import_step';
const UserProfile = '.profile_name';
const profileButton = 'div[href*="profile"]';
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

  clickViewBtn() {
    cy.get(viewBtn).first().click({ force: true });
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

  clickprofileButton() {
    cy.get(profileButton).click();
  }

  verifyProfilePage() {
    cy.get(profilePage).should('be.visible');
  }
}
