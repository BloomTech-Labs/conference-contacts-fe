/// <reference types="Cypress" />

context('APP SCREENSHOTS', () => {
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

	it('heading', () => {
		cy.get('#demo').contains('App Screenshots');
	});

	it('first picture of carousel', () => {
		cy.get('#root > div ')
			.get('.GestureGallery')
			.get('.Gesture-view')
			.get('.Gesture-view__animated-container')
			.get('.Gesture-view__pane')
			.find('div > img')
			.should('have.attr', 'src')
			.and('contains', '/static/media/home.883156d8.png')
	});

	it('second picture of carousel', () => {
		cy.get('#root > div')
			.get('.GestureGallery')
			.get('.Gesture-view')
			.get('.Gesture-view__animated-container')
			.get('.Gesture-view__pane')
			.eq(1)
			.find('div > img')
			.should('have.attr', 'src')
			.and('contains', '/static/media/scanqr.bbf6c884.png')
	});

	it('third picture of carousel', () => {
		cy.get('#root > div')
			.get('.GestureGallery')
			.get('.Gesture-view')
			.get('.Gesture-view__animated-container')
			.get('.Gesture-view__pane')
			.eq(2)
			.find('div > img')
			.should('have.attr', 'src')
			.and('contains', '/static/media/profile.bcdd342d.png')
	});
});
