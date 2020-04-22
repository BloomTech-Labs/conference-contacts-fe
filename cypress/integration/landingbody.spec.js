/// <reference types="Cypress" />

context('Body', () => {
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

	it('does body contain "leave the business..." heading', () => {
		cy.get('.container');
		cy.get('h2').contains('Leave the business cards at home');
	});
	it('does hero contain an image', () => {
		cy.get('.container');
		cy.get('img').should('have.attr', 'src', 'https://i.ibb.co/TgYq6kk/Hero-Image.png');
		cy.get('img').should('have.attr', 'alt', 'Hero-Image');
	});
	it('does connect feature section div contain an image', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .ml-8');
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .ml-8 > img').should(
			'have.attr',
			'src',
			'https://i.ibb.co/ckBNHs6/Connect-Seamlessly.png'
		);
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .ml-8 > img').should(
			'have.attr',
			'alt',
			'Connect-Seamlessly'
		);
	});

	it('does footer contain "Designed by Swaap"', () => {
		cy.get('footer');
		cy.get('h5').contains('Designed by Swaap');
	});

	it('navigates to login page', () => {
		cy.get('#menu').contains('Sign Up').click();
		// cy.url().should('include', '/contacts');
	});
});
