const DashboardMenu = 'a[title="Dashboard"]';
const CallSummery = 'Calls Summary'
const Responsiveness = 'Responsiveness'
const Agents = 'Agents'
const TotalCalls = 'Total Calls'
const CallResults = 'Call Results'
const CallLocations = 'Calls Locations'
const AverageCallDuration = 'Average Call Duration'
const ButtonLoginAs = '//button[text()="Login As"]'
const StatusDropDown = 'div#navbarSupportedContent div.ss-select'
const Dialer = 'img[src*="softphone.svg"]'
const Task = 'a[href="/tasks/"]'
const UserProfile = '.profile_name'
const LoginSearchBox = 'form[class="search"] input'
const SearchedUser = 'automation testing2'
const SelectStatus = '.ss-select-group-items'
const ContinueButton = '//button[text()="Continue"]'



export default class Dashboard{

    clickDashboard(){
        cy.get(DashboardMenu).click( {force:true} );
    }

    verifyDashboardElements(){
        cy.contains(CallSummery).should('be.visible');
        cy.contains(Responsiveness).should('be.visible');
        cy.contains(Agents).should('be.visible');
        cy.contains(TotalCalls).should('be.visible');
        cy.contains(CallResults).should('be.visible');
        cy.contains(CallLocations).should('be.visible');
        cy.contains(AverageCallDuration).should('be.visible');
    }

    verifyDashboardHeaderElement(){
        cy.xpath(ButtonLoginAs).should('be.visible');
        cy.get(StatusDropDown).should('be.visible');
        cy.get(Dialer).should('be.visible');
        cy.get(Task).should('be.visible');
        cy.get(UserProfile).should('be.visible');
    }


    clickLoginAs(){
        cy.xpath(ButtonLoginAs).click();
    }

    searchUser(user){
        cy.get(LoginSearchBox).type(user)
    }

    verifySearchedUser(){
        cy.contains(SearchedUser).should("be.visible")
    }

    clickStatusButton(){
        cy.get(StatusDropDown).click()
    }

    selectAvailable(Status){
        cy.get(SelectStatus)
        .contains(Status)
        .then((option) => {
          option[0].click();
        });
    }

    clickContinue(){
        cy.xpath(ContinueButton).click();
    }

}