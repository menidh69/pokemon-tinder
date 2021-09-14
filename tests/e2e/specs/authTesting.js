/// <reference types="Cypress" />
const baseUrl = 'http://localhost:8080';

describe('Login', () => {
  it('logins succesfully', () => {
    cy.visit('/login');
    cy.get('#emailInput').type('meni@meni.com');
    cy.get('#nameInput').type('meni');
    cy.get('#loginButton').click();
    cy.url(baseUrl);
  });
});
