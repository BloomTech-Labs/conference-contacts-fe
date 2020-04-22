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
	it('does connect feature section paragraph contain correct heading', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10 > .mb-3');
		cy.get('h4').contains('Connect Seamlessly');
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
	it('does connect feature section paragraph contain correct content', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10');
		cy.get('p').contains(
			'Adding contacts had never been easier. Search by name, scan QR code or download the app and "Swaap" with bluetooth.'
		);
	});
	it('does stay in touch feature section paragraph contain correct content', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10 > .mb-3')
			.eq(1)
			.get('p')
			.eq(1)
			.contains(
				'Keep all your business contacts in one place with all their important information and preferred form of contact.'
			);
	});

	it('does stay in touch feature section div contain an image', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20')
			.eq(1)
			.get('img')
			.eq(2)
			.should('have.attr', 'src', 'https://i.ibb.co/qBrvpvL/undraw-online-chat-d7ek-1.png')
			.should('have.attr', 'alt', 'undraw-online-chat-d7ek-1');
	});

	it('does stay in touch feature section div contain an appropriate heading', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10')
			.eq(1)
			.get('h4')
			.eq(1)
			.contains('Stay in touch');
	});
	it('does never forget a meeting feature section paragraph contain correct content', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10 > .mb-3')
			.eq(2)
			.get('p')
			.eq(2)
			.contains(
				'Remember when and where you met someone, keep track of events, and take notes of meetings so that you can look professional in follow ups.'
			);
	});

	it('does never forget a meeting feature section div contain an image', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20')
			.eq(2)
			.get('img')
			.eq(3)
			.should('have.attr', 'src', 'https://i.ibb.co/RhdWXbB/Never-Forget-a-Meeting.png')
			.should('have.attr', 'alt', 'Never-Forget-a-Meeting');
	});

	it('does never forget a meeting feature section div contain an appropriate heading', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10')
			.eq(2)
			.get('h4')
			.eq(2)
			.contains('Never forget a meeting');
	});

	it('does footer contain "Designed by Swaap"', () => {
		cy.get('footer');
		cy.get('h5').contains('Designed by Swaap');
	});
});
