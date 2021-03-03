const reportHeader = ".reports-top-bar"
const reportMenu = "a[title='Reports']"
export default class Report{

    clickReportMenu(){
        cy.get(reportMenu).click({force:true})
    }
    
    reportHeaderElement(element){
        for(let i=0; i<element.length;i++){
        cy.get(reportHeader).should("contain.text",element[i])
        }
    }
};