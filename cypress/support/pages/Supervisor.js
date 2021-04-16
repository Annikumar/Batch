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
const loginAsBtn = '.dropdown-usertree';
const openUserPlusBtn = '.role-title + span';
const userList = '.roletitle';
const profileName = '.name';
const backToSupervisor = '.nav-item a[href*="logout"]';
const dashboard = 'a[title="Dashboard"]';
const supervisor = '.supervisor';

export default class Suprevisor {
  clickingOnContactOption() {
    cy.get(contactsMenu).click({ force: true });
  }

  clickLoginAsBtn() {
    cy.get(loginAsBtn).click();
  }

  clickOpenUser() {
    cy.get(openUserPlusBtn).click();
  }

  clickAddNewContactButton() {
    cy.xpath(addNewContact).click();
  }

  loginWithUser(user) {
    // const userName = user.toUpperCase();
    // cy.log(userName);
    cy.get(userList).then((el) => {
      for (let i = 0; i < el.length; i++) {
        cy.log(el[i].textContent.trim());
        if (el[i].textContent.trim() === user) {
          el[i].click();
          break;
        }
      }
    });
  }

  verifySupervisorProfile() {
    cy.get(supervisor, { timeout: 15000 }).should('be.visible');
  }

  clickDashboardMenu() {
    cy.get(dashboard).click({ force: true });
  }

  clickBackToSupervisor() {
    cy.get(backToSupervisor).click();
  }

  clickOnProfile() {
    cy.get(profileName).click();
  }

  selctCreateNewContactOption() {
    cy.xpath(createNewOption).click();
  }

  verifyLogin(user) {
    cy.get(profileName, { timeout: 15000 }).should('have.text', user);
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
