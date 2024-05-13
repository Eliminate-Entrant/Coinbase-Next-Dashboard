
describe('Historic Price', () => {
    it('Visits the Symbol Price', () => {

      cy.visit('http://localhost:3000/historic_price');
  
      // Assert that the welcome message is displayed
      cy.contains('h1', 'Choose Symbol to view prices').should('be.visible');
  
      // Assert that the total trading pairs section is displayed
      cy.contains('Select Symbol').should('be.visible');
  
      // Assert that the trading pairs section is displayed
      cy.contains('Select Granularity').should('be.visible');

      // Assert that all buttons are rendered
      cy.get('button').should('have.length',3);

    });
  });
  
  