/// <reference types="Cypress" />

describe('login', () => {
  it('should successfully log into our app', () => {
    cy.login()
      .then(resp => resp.body)
      .then(body => {
        console.log(body);
        localStorage.setItem('token', body.access_token);
        cy.visit, '/';
      });
  });
});

describe('My First Test', function() {
  before(() => {
    cy.login()
      .then(res => res.body)
      .then(body => {
        localStorage.setItem('token', body.access_token);
      });
  });
  it('Gets, types and asserts', function() {
    cy.visit('http://localhost:3000/profile');

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/profile');

    // Get an input, type into it and verify that the value has been updated
    cy.contains('Tech');
    cy.contains('Software Engineer');
    cy.contains('NONBINARY');
  });
});
