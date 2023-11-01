describe('1- Login Scenario', () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzcnZwcm9jZWVkMDJwdy53ZXN0ZXVyb3BlLmNsb3VkYXBwLmF6dXJlLmNvbSIsImF1ZCI6InNydnByb2NlZWQwMnB3Lndlc3RldXJvcGUuY2xvdWRhcHAuYXp1cmUuY29tIiwic3ViIjoiRDA0RjQzM0UtRjM2Qi0xNDEwLThENjAtMDA4MjNFMDQ4QzY0IiwiZXhwIjoxNjk4ODY0MTU2ODI1LCJpYXQiOjE2OTg4NjA1NTY4MjUsImllayI6IjMzYjIxMDBjLWUzM2QtNDk0Mi1iZTYyLTU2YzU1YjY1ZTI3OCJ9.yX7YBE1t2lMsogwV28FNesx0FePcXKqTQ3EiKInKbYg"
  before(() => {
  if (token) {
    // Set the token in the authorization header for API requests
    cy.intercept({ headers: { Authorization: `Bearer ${token}` } }).as('authenticatedRequest');
  }
})
  it('Login', () => {

    cy.visit('https://srvproceed02pw.westeurope.cloudapp.azure.com/', { retryOnNetworkFailure: true })
    cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin@email.com');
    cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin_proceed');
    cy.get('#login-button').click();
    cy.contains('concreto.').should('be.visible')
    cy.get('#legal-clauses-modal').scrollIntoView()
    cy.scrollTo(0, 500);
    cy.get('div > :nth-child(4)').click()
    cy.get('#ok-button').click()
    cy.get('#input').type('test');
    cy.wait(5000)
    cy.get('.sc-gsFSXq > .ant-btn').click()
    cy.intercept('POST', '/api/rest/login').as('loginRequest');
      cy.wait('@loginRequest').then((interception) => {
        // Extract and store the token
        const token = interception.response.body.token;
        cy.setCookie('auth_token', token);
  })
})

it('Login- without server',()=>{
  cy.visit('https://srvproceed02pw.westeurope.cloudapp.azure.com/', { retryOnNetworkFailure: true })
  cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin@email.com');
  cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin_proceed');
  cy.get('#login-button').click();
  cy.contains('concreto.').should('be.visible')
  cy.get('#legal-clauses-modal').scrollIntoView()
  cy.scrollTo(0, 500);
  cy.get('div > :nth-child(4)').click()
  cy.get('#ok-button').click()
})
})