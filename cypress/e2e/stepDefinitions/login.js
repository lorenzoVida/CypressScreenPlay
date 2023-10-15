// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//const login = require("../../pageObject/primeroPage.js");
const home = require("../../soporte/ui/homePage.js");
Given("cliente global ingresa al sistema de inventario xray", ()=>
 {
  //login.ingresarUsuario();
  cy.visit('https://www.google.com/');
  cy.buscando("macbook");
});