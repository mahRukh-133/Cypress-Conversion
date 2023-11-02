describe('1- Login Scenario', () => {


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
