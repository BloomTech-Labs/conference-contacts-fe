/// <reference types="Cypress" />

context('BIG FEATURES', () => {
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

	context('CONNECT SEAMLESSLY', () => {
		it('correct heading', () => {
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
				'Adding contacts has never been easier. Search by name, scan QR code or download the app and "Swaap" with bluetooth.'
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
});
context('SMALL FEATURES', () => {
	it('appropriate heading', () => {
		cy.get('#features').contains('Features');
	});
	context('MAKE FRIENDS', () => {
		it('appropriate icon', () => {
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

		it('appropriate paragraph', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12')
				.get('p')
				.eq(3)
				.contains('Scan a qr code with someone and get there information');
		});
	});
	context('ANY SIZE', () => {
		it('appropriate icon', () => {
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
		it('appropriate paragraph', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12')
				.get('p')
				.eq(4)
				.contains('We support every device orientation and size for multitasking.');
		});
	});
	context('IMPORT', () => {
		it('appropriate icon', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12 > h4')
				.contains('Import')
				.get('svg')
				.eq(4)
				.should('have.attr', 'width', '36')
				.should('have.attr', 'height', '30')
				.should('have.attr', 'fill', 'none');
		});
		it('appropriate paragraph', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.p-5 > div > .mb-6 > .col-12')
				.get('p')
				.eq(5)
				.contains('Import any picture you want on the app.');
		});
	});
	context('FAST AND SIMPLE', () => {
		it('appropriate icon', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.justify-between')
				.eq(1)
				.get('.flex-wrap > .mb-6 > .col-12 > h4')
				.contains('Fast and Simple')
				.get('img')
				.eq(4)
				.should('have.attr', 'alt', 'runer-silhouette-running-fast')
				.should('have.attr', 'border', '0');
		});
		it('appropriate paragraph', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.justify-between')
				.eq(1)
				.get('.flex-wrap > .mb-6 > .col-12')
				.get('p')
				.eq(6)
				.contains(
					'I only takes 5 minutes to set up account by going to swaap.co and login with an email of your choice'
				);
		});
	});
	// context('EDITING', () => {
	// 	it('appropriate icon', () => {
	// 		cy.get('#root > div > div > .container')
	// 			.eq(1)
	// 			.get('.justify-between')
	// 			.eq(2)
	// 			.get('.flex-wrap > .mb-6 > .col-12 > h4')
	// 			.eq(4)
	// 			.contains('Editing')
	// 			.get('svg')
	// 			.eq(5)
	// 			.should('have.attr', 'width', '35')
	// 			.should('have.attr', 'height', '35')
	// 			.should('have.attr', 'fill', 'none');
	// 	});
	// 	it('appropriate paragraph', () => {
	// 		cy.get('#root > div > div > .container')
	// 			.eq(1)
	// 			.get('.justify-between')
	// 			.eq(1)
	// 			.get('.flex-wrap > .mb-6 > .col-12')
	// 			.get('p')
	// 			.eq(7)
	// 			.contains('Simply two finger drag down to bulk edit lists or items.');
	// 	});
	// });
	// context('DARK MODE', () => {
	// 	it('appropriate icon', () => {
	// 		cy.get('#root > div > div > .container')
	// 			.eq(1)
	// 			.get('.justify-between')
	// 			.eq(1)
	// 			.get('.flex-wrap > .mb-6 > .col-12 > h4')
	// 			.eq(5)
	// 			.contains('DarkMode')
	// 			.get('svg')
	// 			.eq(6)
	// 			.should('have.attr', 'width', '36')
	// 			.should('have.attr', 'height', '36')
	// 			.should('have.attr', 'fill', 'none');
	// 	});
	// 	it('appropriate paragraph', () => {
	// 		cy.get('#root > div > div > .container')
	// 			.eq(1)
	// 			.get('.justify-between')
	// 			.eq(1)
	// 			.get('.flex-wrap > .mb-6 > .col-12')
	// 			.get('p')
	// 			.eq(8)
	// 			.contains('Turn out the lights with our gorgeous dark mode support.');
	// 	});
	// });
	// context('CONFERENCE UPDATES', () => {
	// 	it('appropriate icon', () => {
	// 		cy.get('#root > div > div > .container')
	// 			.eq(1)
	// 			.get('.justify-between')
	// 			.eq(1)
	// 			.get('.flex-wrap > .mb-6 > .col-12 > h4')
	// 			.eq(6)
	// 			.contains('Conference Updates')
	// 			.get('svg')
	// 			.eq(7)
	// 			.should('have.attr', 'width', '35')
	// 			.should('have.attr', 'height', '48')
	// 			.should('have.attr', 'fill', 'none');
	// 	});
	// 	it('appropriate paragraph', () => {
	// 		cy.get('#root > div > div > .container')
	// 			.eq(1)
	// 			.get('.justify-between')
	// 			.eq(1)
	// 			.get('.flex-wrap > .mb-6 > .col-12')
	// 			.get('p')
	// 			.eq(9)
	// 			.contains('See up-to-date news on what is going on at any participation conferences.');
	// 	});
	// });
	context('QR SCANS', () => {
		it('appropriate icon', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.justify-between')
				.eq(1)
				.get('.flex-wrap > .mb-6')
				.eq(1)
				.get('.col-12 > h4')
				.contains('QR Scans')
				.get('svg')
				.eq(5)
				.should('have.attr', 'width', '24')
				.should('have.attr', 'height', '48')
				.should('have.attr', 'fill', 'none')
				.should('have.attr', 'viewBox', '0 0 48 48');
		});
		it('appropriate paragraph', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.justify-between')
				.eq(1)
				.get('.flex-wrap > .mb-6')
				.eq(1)
				.get('.col-12 > p')
				.eq(4)
				.contains('Scan QR codes from any users to receive contacts and references');
		});
	});
	context('CUSTOMIZABILITY', () => {
		it('appropriate icon', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.justify-between')
				.eq(1)
				.get('.flex-wrap > .mb-6')
				.eq(2)
				.get('.col-12 > h4')
				.contains('Customizability')
				.get('svg')
				.eq(6)
				.should('have.attr', 'width', '24')
				.should('have.attr', 'height', '48')
				.should('have.attr', 'fill', 'none')
				.should('have.attr', 'viewBox', '0 0 35 35');
		});
		it('appropriate paragraph', () => {
			cy.get('#root > div > div > .container')
				.eq(1)
				.get('.justify-between')
				.eq(1)
				.get('.flex-wrap > .mb-6')
				.eq(1)
				.get('.col-12 > p')
				.eq(5)
				.contains(
					'We build pretty complex tools and this allows us to take designs and turn them information functional quickly and easily'
				);
		});
	});
});
