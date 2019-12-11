/// <reference types="Cypress" />

context('Navigation', () => {
  before(() => {
    cy.login()
      .then(res => res.body)
      .then(body => {
        localStorage.setItem('token', body.access_token);
      });
    cy.visit('http://localhost:3000/');
  });

  it('navigates to contacts page', () => {
    cy.get('.navContainer')
      .contains('Contacts')
      .click();
    cy.url().should('include', '/contacts');
  });

  it('navigates to messages page', () => {
    cy.get('.navContainer')
      .contains('Messages')
      .click();
    cy.url().should('include', '/messages');
  });

  it('navigates to profile page', () => {
    cy.get('.navContainer')
      .contains('Profile')
      .click();
    cy.url().should('include', '/profile');
  });

  it('navigates to settings page', () => {
    cy.get('.navContainer')
      .contains('Settings')
      .click();
    cy.url().should('include', '/settings');
  });
});
