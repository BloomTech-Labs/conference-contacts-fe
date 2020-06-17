/// <reference types="Cypress" />

context('TEAM MEMBER PROFILES SECTION', () => {
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
		cy.get('#root > div > div > .text-center').find('h2').contains('Team');
	});

	context('team member:  Jonathan Picazo 0', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Jonathan')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', 'profile.jpg');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('h4')
				.contains('Jonathan Picazo');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('p')
				.contains('Team Leader');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
                .and('contains', 'linkedin');
            
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Bobby Hall 1', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(1)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Bobby')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(1)
				.find('.col-12')
				.find('h4')
				.contains('Bobby Hall');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(1)
				.find('.col-12')
				.find('p')
				.contains('Team Leader');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(1)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(1)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(1)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Tyler Quinn 2', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(2)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Tyler')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(2)
				.find('.col-12')
				.find('h4')
				.contains('Tyler Quinn');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(2)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(2)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(2)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(2)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Zachary Peasley 3', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(3)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Zachary')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(3)
				.find('.col-12')
				.find('h4')
				.contains('Zachary Peasley');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(3)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(3)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(3)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(3)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Jarvise Billups-Brown 4', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(4)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Jarvise')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(4)
				.find('.col-12')
				.find('h4')
				.contains('Jarvise Billups-Brown');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(4)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(4)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(4)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(4)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Corey Gumbs 5', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(5)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Corey')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', 'v-4');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(5)
				.find('.col-12')
				.find('h4')
				.contains('Corey Gumbs');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(5)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(5)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(5)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(5)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Erica Ingram 6', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(6)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Erica')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', 'v-4');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(6)
				.find('.col-12')
				.find('h4')
				.contains('Erica Ingram');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(6)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(6)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(6)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(6)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Roberto Banbanaste 7', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(7)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Roberto')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', 'v-4');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(7)
				.find('.col-12')
				.find('h4')
				.contains('Roberto Banbanaste');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(7)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(7)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(7)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(7)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Sierra Curtis 8', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(8)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Sierra')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', 'v-4');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(8)
				.find('.col-12')
				.find('h4')
				.contains('Sierra Curtis');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(8)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(8)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(8)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(8)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Tristan Depew 9', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(9)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Tristan')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', 'v-4');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(9)
				.find('.col-12')
				.find('h4')
				.contains('Tristan Depew');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(9)
				.find('.col-12')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(9)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(9)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(9)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Michael Bailar 10', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(10)
				.find('.col-lg-3')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Michael')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(10)
				.find('.col-lg-3')
				.find('h4')
				.contains('Michael Bailar');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(10)
				.find('.col-lg-3')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(10)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Christine Fletcher 11', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(11)
				.find('.col-lg-3')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Christine')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(11)
				.find('.col-lg-3')
				.find('h4')
				.contains('Christine Fletcher');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(11)
				.find('.col-lg-3')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(11)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Christian Rios 12', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(12)
				.find('.col-lg-3')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Christian')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(12)
				.find('.col-lg-3')
				.find('h4')
				.contains('Christian Rios');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(12)
				.find('.col-lg-3')
				.find('p')
				.contains('Software Engineer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(12)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Marlon Raskin 13', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(13)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Marlon')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(13)
				.find('.col-12')
				.find('h4')
				.contains('Marlon Raskin');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(13)
				.find('.col-12')
				.find('p')
				.contains('IOS Developer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(13)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(13)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(13)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Michael Redig 14', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(14)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Michael')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(14)
				.find('.col-12')
				.find('h4')
				.contains('Michael Redig');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(14)
				.find('.col-12')
				.find('p')
				.contains('IOS Developer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(14)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(14)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(14)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Chad Rutherford 15', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(15)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Chad')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', 'beta');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(15)
				.find('.col-12')
				.find('h4')
				.contains('Chad Rutherford');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(15)
				.find('.col-12')
				.find('p')
				.contains('IOS Developer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(15)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(15)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(15)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Jesse Ruiz 16', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(16)
				.find('.col-lg-3')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Jesse')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(16)
				.find('.col-lg-3')
				.find('h4')
				.contains('Jesse Ruiz');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(16)
				.find('.col-lg-3')
				.find('p')
				.contains('IOS Developer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(16)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(16)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Kerianne Levesque 17', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(17)
				.find('.col-lg-3')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Keri')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(17)
				.find('.col-lg-3')
				.find('h4')
				.contains('Kerianne Levesque');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(17)
				.find('.col-lg-3')
				.find('p')
				.contains('IOS Developer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(16)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Tyler Nishida 18', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(18)
				.find('.col-12')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Tylers')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(18)
				.find('.col-12')
				.find('h4')
				.contains('Tyler Nishida');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(18)
				.find('.col-12')
				.find('p')
				.contains('UX Designer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(18)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(18)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(18)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Emily Arias 19', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(19)
				.find('.col-lg-3')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Emily')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(19)
				.find('.col-lg-3')
				.find('h4')
				.contains('Emily Arias');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(19)
				.find('.col-lg-3')
				.find('p')
				.contains('UX Designer');
		});
		it('appropriate hover links', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(19)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(0)
				.should('have.attr', 'href')
				.and('contains', 'github');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(19)
				.find('.col-lg-3')
				.find('.middle')
				.find('a')
				.eq(1)
				.should('have.attr', 'href')
				.and('contains', 'linkedin');

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
	context('team member:  Frantz-Eder Audige 20', () => {
		it('appropriate picture', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(20)
				.find('.col-lg-3')
				.find('.hovereffect > img')
				.should('have.attr', 'alt', 'Frantz')
				.should('have.attr', 'src')
				.and('contains', 'https://i.ibb.co/')
				.and('contains', '512');
		});
		it('appropriate name', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(20)
				.find('.col-lg-3')
				.find('h4')
				.contains('Frantz-Eder Audige');
		});
		it('appropriate title', () => {
			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(20)
				.find('.col-lg-3')
				.find('p')
				.contains('UX Designer');
		});
		it('appropriate hover links', () => {

			cy.get('#root > div > div > .text-center')
				.find('.flex-wrap')
				.find('.px-2')
				.eq(0)
				.find('.col-12')
				.find('.middle')
				.find('a')
				.eq(1)
				.find('svg > path')
				.should('have.attr', 'fill', '#2B6CB0');
		});
	});
});
