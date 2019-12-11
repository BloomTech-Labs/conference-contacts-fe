/// <reference types="Cypress" />

context('Profile form input updates', () => {
  before(() => {
    cy.login()
      .then(res => res.body)
      .then(body => {
        localStorage.setItem('token', body.access_token);
      });
    cy.visit('http://localhost:3000/');
  });

  it('updates form inputs', () => {
    cy.get('.navContainer')
      .contains('Settings')
      .click();
    cy.url().should('include', '/settings');

    cy.get('form').within($form => {
      // cy.get() will only search for elements within form,
      // not within the entire document
      cy.get('[type="text"]').clear();
      cy.get('[type="textarea"]').clear();
      cy.get('input[name="name"]').type('John Wick');
      cy.get('input[name="industry"]').type('Finance');
      cy.get('input[name="jobtitle"]').type('Marketing Associate');
      cy.get('select[name="gender"]').select('Male');
      cy.get('textarea[name="bio"]').type('Testing is phenomenal!');
      cy.get('input[name="email"]').type('jonboi@gmail.com');
      cy.get('[data-id="emailBtn"]').click();
      cy.get('[test-id="deleteEmail"]')
        .first()
        .click();
      cy.root().submit();
    });
  });
});
