/// <reference types="Cypress" />

context('TESTIMONIALS', () => {
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

	context('Ryan Cristoffel (#1)', () => {
		it('appropriate subheading', () => {
			cy.get('#reviews > .container > h2').contains("Don't take our word for it");
		});
		it('appropriate paragraphs', () => {
			cy.get('#reviews > .container > div > .mb-4')
				.eq(0)
				.find('.py-2 > p')
				.eq(0)
				.contains('"Swaap is a truly high-quality, well designed new app."');

			cy.get('#reviews > .container > div > .mb-4').eq(0).find('.py-2 > p').eq(1).contains('Ryan Christoffel');
		});
	});

	context('Chance Miller (#1)', () => {
		it('appropriate subheading', () => {
			cy.get('#reviews > .container > h2').contains("Don't take our word for it");
		});
		it('appropriate paragraphs', () => {
			cy.get('#reviews > .container > div > .mb-4')
				.eq(1)
				.find('.py-2 > p')
				.eq(0)
				.contains('"Makes it easy to sync and connect to another person at a conference."');

			cy.get('#reviews > .container > div > .mb-4').eq(1).find('.py-2 > p').eq(1).contains('Chance Miller');
		});
	});

	context('James Doe (#3)', () => {
		it('appropriate subheading', () => {
			cy.get('#reviews > .container > h2').contains("Don't take our word for it");
		});
		it('appropriate paragraphs', () => {
			cy.get('#reviews > .container > div > .mb-4')
				.eq(2)
				.find('.py-2 > p')
				.eq(0)
				.contains('"A Swaap app is quick and easy to use and understand."');

			cy.get('#reviews > .container > div > .mb-4').eq(2).find('.py-2 > p').eq(1).contains('James Doe');
		});
	});
});
