/// <reference types="Cypress" />

context('Login', () => {
	before(() => {
		cy.viewport(1920, 1080) 
		cy.clearCookies('token', 'qrcode');
		cy.clearLocalStorage();
		cy.window().then((win) => {
  				win.sessionStorage.clear()
		});
	});

	it('logs in successfully, then navigates to profile', () => {
		cy.visit('http://localhost:3000/');
		cy.contains('Login').click()
		cy.get('form').within(() => {
			cy.get('input[name="email"]').type('e2e-testing@swaap.co')
			cy.get('input[name="password"]').type('S#(]Kg(|sG83')
			cy.get('.auth0-lock-submit').click()
		})
		cy.contains('Notifications');
		cy.contains('Swaap QR Code');
		cy.get('.py-8 > :nth-child(1) > .mt-8 > [href="/profile"] > .flex > .uppercase').click();
		cy.location('pathname').should('include', 'profile');
		cy.title().should('include', 'Swaap')
		cy.get('[data-cy=edit-profile] > path').click({force:true});
		cy.location('pathname').should('include', 'profile/edit');
		cy.get('#jobtitle').type('testing job title')
		cy.get('#industry').type('testing tech')
		cy.get('#location').type('testing location')
		
		cy.get('#tagline').type('testing tagline')
		cy.get('#bio').type('testing bio')
		cy.get('.text-blue-700').click()
		
	});
	
});
