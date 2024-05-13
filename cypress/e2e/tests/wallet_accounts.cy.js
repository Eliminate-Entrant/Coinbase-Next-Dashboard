
describe('Page Test', () => {
    it('Checks the Account Wallets page', () => {

      cy.visit('http://localhost:3000/wallets');
  
        // Assert that page Heading is Correct
      cy.get('h1').should('have.text', 'Account Wallets');
  
        // Assert that the loading message is displayed
      cy.contains('Loading...').should('be.visible');
  
        // Assert that the api is called
      cy.intercept('/api/account_wallets').as('getAccountWallets');
  
        // Wait for the api to return
      cy.wait('@getAccountWallets').then(() => {
        cy.get('.grid').should('have.length.greaterThan', 0);
      });
    });
  });
  