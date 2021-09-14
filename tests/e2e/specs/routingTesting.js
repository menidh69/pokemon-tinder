const baseUrl = 'http://localhost:8080';

describe('Routing', () => {
  it('Redirects to the login url if not auth', () => {
    cy.visit('/');
    cy.contains('h2', 'Login');
  });
  it('visits about page', () => {
    cy.visit('/');
    cy.get('.about').click();
    cy.url(`${baseUrl}/about`);
  });
});
