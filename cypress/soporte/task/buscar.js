const homePage = require("../../soporte/ui/homePage");
Cypress.Commands.add("buscarte2",()=>{
    cy.get(homePage.btnBuscar).type("macbook");
});