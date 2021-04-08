const statusDropdown = '.nav-item .ss-select';

export function selectAgentStatus(status) {
  cy.get(statusDropdown)
    .click({ force: true })
    .contains(status)
    .click({ force: true });
}
