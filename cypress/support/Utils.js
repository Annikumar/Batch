const statusDropdown = '.nav-item .ss-select';

export function selectAgentStatus(status) {
  cy.get(statusDropdown)
    .invoke('show')
    .click()
    .contains(status)
    .scrollIntoView()
    .click();
}
