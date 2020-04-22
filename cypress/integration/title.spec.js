/// <reference types="Cypress" />

context('BODY', () => {
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

	it('appropriate heading', () => {
		cy.get('.container');
		cy.get('h2').contains('Leave the business cards at home');
	});
	it('appropriate subheading', () => {
		cy.get('.container');
		cy.get('h3').contains(
			'Business cards get thrown in the trash. Swaap makes trading business information effortless'
		);
	});
	it('hero image with correct src/alt attributes', () => {
		cy.get('.container');
		cy.get('img').should('have.attr', 'src', 'https://i.ibb.co/TgYq6kk/Hero-Image.png');
		cy.get('img').should('have.attr', 'alt', 'Hero-Image');
	});
});
