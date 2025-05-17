

/// <reference types="cypress" />


describe('realizar login em site seguro', () => {
  beforeEach(() => {
  
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('realizar login com sucesso', () => {
    
    cy.get('#username').type('tomsmith');  
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.contains('You logged into a secure area!').should('be.visible');
  })

  it('Login com falha', () => {

    cy.get('#username').type('kaiky123');  
    cy.get('#password').type('medeiros');
    cy.get('[type="submit"]').click();
    cy.contains('Your username is invalid!').should('be.visible');

  })

  it('Login invasor', () => {

    cy.get('#username').type('invasor');  
    cy.get('#password').type('sistemainvadido');
    cy.get('[type="submit"]').click();
    cy.contains('Your username is invalid!').should('be.visible');
 
  })

})
