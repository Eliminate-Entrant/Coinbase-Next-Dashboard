
describe('Homepage', () => {
    it('Visits the homepage', () => {
      // Visit the homepage
      cy.visit('http://localhost:3000/');
  
      // Assert that the page title is correct
      cy.title().should('eq', 'Coinbase Dashboard');
  
      // Assert that the welcome message is displayed
      cy.contains('h1', 'Coinbase Dashboard').should('be.visible');
  
      // Assert that the total trading pairs section is displayed
      cy.contains('Total Trading Pairs').should('be.visible');
  
      // Assert that the trading pairs section is displayed
      cy.contains('Trading Pairs').should('be.visible');
    
    // Assert that the table is displayed
      cy.get('table').should('be.visible');
      
        // Assert that the table has 12 rows
      cy.get('tbody').find('tr').should('have.length', 12);
    });
  });
  