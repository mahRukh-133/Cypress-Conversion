// Import the necessary Cypress commands and utility functions

// Assuming loginPage, homePage, and I.getString are utility functions defined elsewhere

describe('1. Login test', () => {
    it.only('Login offline - User enters for the first time in Device', () => {
      cy.visit('https://srvproceed02pw.westeurope.cloudapp.azure.com/'); // Assuming '/login' is the login page URL
  
      // Perform the login action for offline first login
      cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin@email.com');
      cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin_proceed');
      cy.get('#login-button').click()
      cy.contains('concreto.').should('be.visible')
      cy.get('#legal-clauses-modal').scrollIntoView()
      cy.scrollTo(0, 500);
      cy.get('div > :nth-child(4)').click()
      cy.get('#ok-button').click()
      

      // Assertion for the expected result
     // cy.contains(loginPage.getString('loginOnlineFirst')).should('be.visible');

      // Restore the connection for future tests/scenarios
      // You will need a custom Cypress command to handle this, e.g., cy.setConnectionOn()
      // This custom command should make sure the connection is restored.
      // Example: cy.setConnectionOn();
    });
  
    it('Login online', () => {
      cy.visit('https://srvproceed02pw.westeurope.cloudapp.azure.com/'); // Assuming '/login' is the login page URL
  
      // Perform the login action for online login
      cy.get('#email').type('admin@email.com');
      cy.get('#password').type('admin_proceed');
      cy.get('#loginButton').click(); // Replace with the actual login button selector
  
      // You may need additional assertions to verify successful login
  
      // You can also include a logout action here if needed
    });
  
    it('Login offline', () => {
      cy.visit('https://srvproceed02pw.westeurope.cloudapp.azure.com/'); // Assuming '/login' is the login page URL
  
      // Perform the login action for online login
      cy.get('#email').type('admin@email.com');
      cy.get('#password').type('admin_proceed');
      cy.get('#loginButton').click(); // Replace with the actual login button selector
  
      // You may need additional assertions to verify successful login
  
      // Include the logout action here
      // Example: cy.get('#logoutButton').click(); // Replace with actual logout button selector
  
      // Perform the login action for offline after logging out
      cy.visit('/login'); // Navigate back to the login page
  
      // Perform offline login, assuming there is a separate method for this
      loginPage.loginOfflineAlreadyLogged('admin@email.com', 'admin_proceed');
  
      // Restore the connection for future tests/scenarios
      // You will need a custom Cypress command to handle this, e.g., cy.setConnectionOn()
      // Example: cy.setConnectionOn();
    });
  });
  