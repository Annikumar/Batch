const statusDropdown = '.nav-item .ss-select';
const speedTestPopup = '.modal-dialog div.modal-content';
const speedtestIgnoreButton = '.modal-dialog div.modal-content button';

export function selectAgentStatus(status) {
  cy.get(statusDropdown)
    .invoke('show')
    .click()
    .contains(status)
    .scrollIntoView()
    .click();
}

export function ignoreSpeedTestPopup() {
  cy.get('body').then((body) => {
    if (body.find(speedTestPopup).length) {
      cy.get(speedtestIgnoreButton).click();
    }
  });
}
