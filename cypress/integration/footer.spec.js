/// <reference types="Cypress" />

context('FOOTER', () => {
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
	it('contain "Designed by Swaap"', () => {
		cy.get('footer').find('h5').contains('Copyright ©2020 Designed by Swaap');
	});
	it('checking background color', () => {
		cy.get('footer').should('have.css', 'background-color').and('eq', 'rgb(155, 105, 228)');
	});
});
