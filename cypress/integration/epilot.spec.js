/// <reference types="cypress" />

describe('Epilot', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
    it('Check default input value', () => {
      cy.visit('http://localhost:3000?user=kalenyk')

      cy.get('input')
      .should('have.value', 'kalenyk')
    });

    it('Clear input', () => {
      cy.get('.MuiInput-root button')
      .click()

      cy.get('input')
      .should('have.value', '')

    });

    it('Pagination', () => {
      cy.get('input')
      .type('zpao')

      cy.get('button[type=submit]')
      .click()

      cy.get('.MuiPagination-ul li:nth-child(4) button').click()

      cy.location().should(loc => {
        expect(loc.search).to.eq('?username=zpao&page=3')
      })
    });

    it('User is not exist', () => {
        cy.get('input')
      .type('qwertyukwefwjnjfwefewf')

        cy.get('button[type=submit]')
      .click()

        cy.get('.not-found')
    })


    it('Items per page default parameters', () => {
      //can get error due to API rate limit
      cy.visit('http://localhost:3000?user=zpao&reposPerPage=100')

      cy.get('tbody').find('tr').should('have.length', 100)
  })
  })