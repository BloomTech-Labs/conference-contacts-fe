/// <reference types="Cypress" />

context('Navigation', () => {
	before(() => {
		/* 
      cy.login()
        .then(res => res.body)
        .then(body => {
          localStorage.setItem('token', body.access_token);
        });
    */
		cy.clearCookies();
		cy.visit('http://localhost:3000/');
	});

	it('navigates to features page', () => {
		cy.get('.fill-current').click();
		cy.get('#menu').contains('Features').click();
		cy.url().should('include', '/#features');
	});

	it('navigates to demo page', () => {
		cy.get('#menu').contains('Demo').click();
		cy.url().should('include', '/#demo');
	});

	it('navigates to reviews page', () => {
		cy.get('#menu').contains('Reviews').click();
		cy.url().should('include', '/#reviews');
	});
	it('navigates to login page', () => {
		cy.get('.fill-current').click();
		cy.get('#menu').contains('Sign Up').click();
		// cy.url().should('include', '/contacts');
	});
});
