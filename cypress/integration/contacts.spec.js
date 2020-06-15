/// <reference types="Cypress" />

context('Testing contacts', () => {
	
	beforeEach(() => {
		
		cy.viewport(1920, 1080) 
		cy.clearCookies('token', 'qrcode');
		cy.clearLocalStorage();
		cy.window().then((win) => {
			win.sessionStorage.clear()
		})
	});

	it('logs in successfully, then goes to contact adding note and events', () => {
		cy.visit('/')
		cy.contains('Login').click()
		cy.get('form').within(() => {
			cy.get('input[name="email"]').type('e2e-testing@swaap.co')
			cy.get('input[name="password"]').type('S#(]Kg(|sG83')
			cy.get('.auth0-lock-submit').click()

		})
		cy.contains('Notifications');
		cy.contains('Swaap QR Code');
		cy.get('.py-8 > :nth-child(1) > .mt-8 > [href="/contacts"] > .flex > .uppercase').click({force:true})
        cy.location('pathname').should('include', 'contacts');
		cy.contains('Logout').click({force: true});
	});
	
});