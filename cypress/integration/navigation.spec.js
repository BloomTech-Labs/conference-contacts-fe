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

	it('loads top left swaap svg', () => {
		cy.get('#root > div > div > .mx-auto > .px-2 > .mx-auto > nav > .container > svg').should(
			'have.attr',
			'width',
			'70'
		);
		cy.get('#root > div > div > .mx-auto > .px-2 > .mx-auto > nav > .container > svg').should(
			'have.attr',
			'height',
			'30'
		);
		cy.get('#root > div > div > .mx-auto > .px-2 > .mx-auto > nav > .container > svg').should(
			'have.attr',
			'fill',
			'none'
		);
		cy.get('#root > div > div > .mx-auto > .px-2 > .mx-auto > nav > .container > svg')
			.find('path')
			.eq(0)
			.should('have.attr', 'fill', 'url(#paint0_linear)');
		cy.get('#root > div > div > .mx-auto > .px-2 > .mx-auto > nav > .container > svg')
			.find('path')
			.eq(1)
			.should('have.attr', 'fill', '#000');
	});

	it('navigates to features section', () => {
		cy.get('#menu')
			.find('nav')
			.find('ul > li')
			.eq(0)
			.find('a')
			.contains('Features')
			.should('have.attr', 'href', '#features');
	});

	it('navigates to demo section', () => {
		cy.get('#menu')
			.find('nav')
			.find('ul > li')
			.eq(1)
			.find('a')
			.contains('Demo')
			.should('have.attr', 'href', '#demo');
	});

	it('navigates to reviews section', () => {
		cy.get('#menu')
			.find('nav')
			.find('ul > li')
			.eq(2)
			.find('a')
			.contains('Reviews')
			.should('have.attr', 'href', '#reviews');
	});

	it('navigates to team section', () => {
		cy.get('#menu')
			.find('nav')
			.find('ul > li')
			.eq(3)
			.find('a')
			.contains('Team')
			.should('have.attr', 'href', '#team');
	});

	it('navigates to login page', () => {
		cy.get('label').click({force: true});
		cy.get('#menu').find('nav').find('ul > li').eq(4).find('button').contains('Login').click();
		// cy.url().should('include', '/contacts');
	});

	it('navigates to sign up page', () => {
		cy.visit('http://localhost:3000/')
		cy.get('label').click({force: true});
		cy.get('#menu').find('nav').find('ul > li').eq(5).find('button').contains('Sign Up').click();
	})
});
