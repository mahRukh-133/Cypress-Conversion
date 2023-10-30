
describe('1. Login test', () => {

  let loginUrl;
beforeEach(() => {
  // Load the common URL from the JSON fixture
  cy.fixture('urls.json').then((urls) => {
    loginUrl = urls.loginUrl;
  });
});


  beforeEach(() => {
    // Visit the common URL before each test case
    cy.visit(loginUrl);
  });

    it.only('Login offline - User enters for the first time in Device', () => {
  
      // Perform the login action for offline first login
     /*cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin@email.com');
      cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin_proceed');
      cy.get('#login-button').click()
      cy.contains('concreto.').should('be.visible')
      cy.get('#legal-clauses-modal').scrollIntoView()
      cy.scrollTo(0, 500);
      cy.get('div > :nth-child(4)').click()
      cy.get('#ok-button').click()
    */
      // Simulate offline mode by disabling the network
      cy.intercept('POST', 'api/rest/login').as('loginRequest'); // Intercept the login request
      //cy.visit('http://localhost:12345'); // Redirect to a non-existent page to simulate offline mode

      // Attempt to log in again (offline mode)
      cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin@email.com');
      cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin_proceed');
      cy.get('#login-button').click();

    // Perform any assertions related to logging in while offline
  //  cy.get('#some-offline-element').should('be.visible'); // Adjust this to your app's structure

    // Restore online mode (enable the network)
    cy.intercept('POST', '/login').as('loginRequest'); // Intercept the login request again
    cy.visit(loginUrl); // Visit the login URL to simulate returning online

    // Perform the login action for online login
    cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin@email.com');
    cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin_proceed');
    cy.get('#login-button').click();

    // You may need additional assertions to verify successful login

  
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
      cy.contains('concreto.').should('be.visible')
      cy.get('#legal-clauses-modal').scrollIntoView()
      cy.scrollTo(0, 500);
      cy.get('div > :nth-child(4)').click()
      cy.get('#ok-button').click()
      // You may need additional assertions to verify successful login
  
      // Include the logout action here
      // Example: cy.get('#logoutButton').click(); // Replace with actual logout button selector
  
      // Perform the login action for offline after logging out
      cy.visit('/login'); // Navigate back to the login page
  
      // Perform offline login, assuming there is a separate method for this
      loginPage.loginOfflineAlreadyLogged('admin@email.com', 'admin_proceed');
      cy.contains('concreto.').should('be.visible')
      cy.get('#legal-clauses-modal').scrollIntoView()
      cy.scrollTo(0, 500);
      cy.get('div > :nth-child(4)').click()
      cy.get('#ok-button').click()
      // Restore the connection for future tests/scenarios
      // You will need a custom Cypress command to handle this, e.g., cy.setConnectionOn()
      // Example: cy.setConnectionOn();
    });
  });
  