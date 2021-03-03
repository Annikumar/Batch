import Report from '../support/pages/Report';

const report = new Report();

it.only('Should Login', () => {
    cy.Login(fixtureData.username, fixtureData.password);
  });

  it("verify report header element",function(){
      report.reportHeaderElement(["Live","Recent Contacts","Campaigns","Agents","Numbers"]);
  })