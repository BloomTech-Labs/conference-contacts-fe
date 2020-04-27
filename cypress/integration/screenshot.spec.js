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
		cy.get('#root > div')
			.get('.GestureGallery')
			.get('.Gesture-view')
			.get('.Gesture-view__pane')
			.eq(0)
			.get('div > img')
			.eq(4)
			.should('have.attr', 'src')
			.and('contains', 'https://i.ibb.co/')
			.and('contains', 'image.png');
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
			.and('contains', 'https://i.ibb.co/')
			.and('contains', 'image-1.png');
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
			.and('contains', 'https://i.ibb.co/')
			.and('contains', 'image-6.png');
	});
});
