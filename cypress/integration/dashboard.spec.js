import Dashboard from "../support/pages/Dashboard";

const Dash = new Dashboard();

describe("Dashboard Elements",function(){


    it("Elements in Dashboard", function(){
        Dash.clickDashboard();
        Dash.verifyDashboardElements();
    });

    it("Elements in Dashboard Header", function(){
        Dash.verifyDashboardHeaderElement();
    });

    it("Login As Button Functionality", function(){
        Dash.clickLoginAs();
        Dash.searchUser("automation testing2");
        Dash.verifySearchedUser();
    });

    it("Change Admin Status", function(){
        Dash.clickStatusButton();
        Dash.selectAvailable("Available");
        Dash.clickContinue();
    });

});
