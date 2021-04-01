const statusDropdown = '.nav-item .ss-select';

export function selectAgentStatus(status) {
  cy.get(statusDropdown).click().contains(status).click();
}
