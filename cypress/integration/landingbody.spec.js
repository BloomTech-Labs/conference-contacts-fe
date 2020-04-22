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
	it('hero image with correct src/alt attributes', () => {
		cy.get('.container');
		cy.get('img').should('have.attr', 'src', 'https://i.ibb.co/TgYq6kk/Hero-Image.png');
		cy.get('img').should('have.attr', 'alt', 'Hero-Image');
	});
});

context('CONNECT SEAMLESSLY', () => {
	it('paragraph with correct heading', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10 > .mb-3');
		cy.get('h4').contains('Connect Seamlessly');
	});

	it('image with correct src/alt attributes', () => {
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
	it('paragraph with correct content', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10');
		cy.get('p').contains(
			'Adding contacts had never been easier. Search by name, scan QR code or download the app and "Swaap" with bluetooth.'
		);
	});
});

context('STAY IN TOUCH', () => {
	it('paragraph with correct content', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10 > .mb-3')
			.eq(1)
			.get('p')
			.eq(1)
			.contains(
				'Keep all your business contacts in one place with all their important information and preferred form of contact.'
			);
	});

	it('image with correct src/alt attributes', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20')
			.eq(1)
			.get('img')
			.eq(2)
			.should('have.attr', 'src', 'https://i.ibb.co/qBrvpvL/undraw-online-chat-d7ek-1.png')
			.should('have.attr', 'alt', 'undraw-online-chat-d7ek-1');
	});

	it('appropriate heading', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10')
			.eq(1)
			.get('h4')
			.eq(1)
			.contains('Stay in touch');
	});
});

context('NEVER FORGET A MEETING', () => {
	it('paragraph with correct content', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10 > .mb-3')
			.eq(2)
			.get('p')
			.eq(2)
			.contains(
				'Remember when and where you met someone, keep track of events, and take notes of meetings so that you can look professional in follow ups.'
			);
	});

	it('image with correct src/alt attributes', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20')
			.eq(2)
			.get('img')
			.eq(3)
			.should('have.attr', 'src', 'https://i.ibb.co/RhdWXbB/Never-Forget-a-Meeting.png')
			.should('have.attr', 'alt', 'Never-Forget-a-Meeting');
	});

	it('appropriate heading', () => {
		cy.get('#root > div > div > .container > .padding-title > .mb-20 > .pl-10')
			.eq(2)
			.get('h4')
			.eq(2)
			.contains('Never forget a meeting');
	});
});
context('FEATURES', () => {
	it('appropriate heading', () => {
		cy.get('#features').contains('Features');
	});
	context('MAKE FRIENDS', () => {
		it('appropriate icon (make friends)', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12 > h4')
				.contains('Make friends')
				.get('svg')
				.eq(2)
				.should('have.attr', 'width', '24')
				.should('have.attr', 'height', '36')
				.should('have.attr', 'fill', 'none');
		});

		it('appropriate paragraph (make friends)', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12')
				.get('p')
				.eq(3)
				.contains('Scan a qr code with someone and get there information');
		});
	});
	context('ANY SIZE', () => {
		it('appropriate icon 1 (any size)', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12 > h4')
				.contains('Any size')
				.get('svg')
				.eq(3)
				.should('have.attr', 'width', '24')
				.should('have.attr', 'height', '30')
				.should('have.attr', 'fill', 'none');
		});
		it('appropriate paragraph (any size)', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12')
				.get('p')
				.eq(4)
				.contains('We support every device orientation and size for multitasking.');
		});
	});
});

context('FOOTER', () => {
	it('contain "Designed by Swaap"', () => {
		cy.get('footer');
		cy.get('h5').contains('Designed by Swaap');
	});
});
