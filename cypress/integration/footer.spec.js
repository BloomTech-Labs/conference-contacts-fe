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
		cy.get('footer');
		cy.get('h5').contains('Designed by Swaap');
	});
});
