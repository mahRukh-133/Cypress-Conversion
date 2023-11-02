describe('Server Procedure Listing Tests', () => {

  let loginUrl;
  beforeEach(() => {
    // Load the common URL from the JSON fixture
    cy.fixture('urls.json').then((urls) => {
      loginUrl = urls.loginUrl;
    });
  });
    beforeEach(() => {
      cy.visit(loginUrl);
      cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin@email.com');
      cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type('admin_proceed');
      cy.get('#login-button').click();
      cy.contains('concreto.').should('be.visible')
      cy.get('#legal-clauses-modal').scrollIntoView()
      cy.scrollTo(0, 500);
      cy.get('div > :nth-child(4)').click()
      cy.get('#ok-button').click()
      cy.get('#input').clear('test');
      cy.get('#input').type('test');
      cy.wait(5000)
    });
  
    it.only('should download a procedure with references', () => {
      cy.get('.sc-gsFSXq > .ant-btn').click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#download-747DBFDF-C246-46BD-9CA2-90D78DFF6CEF > .sc-fqkvVR > svg').click();
      cy.get(':nth-child(11) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true > span').click();
      cy.get('#tab-procedures-button > .sc-fqkvVR > svg').click();
      cy.get('#delete-procedure-button').should('be.disabled');
      /* ==== End Cypress Studio ==== */
    });
  
    it('should verify procedure and references in device list', () => {
      
    });
  
    it('should sort procedures alphabetically', () => {
     
    });
  
    it('should filter procedures by category', () => {
      
    });
  
    it('should search for a specific procedure', () => {
      
    });
  
    it('should click on a procedure for details', () => {
      
    });
  
    it('should handle error scenarios', () => {
    
    });
  
    it('should validate procedure data', () => {
    });
  });
  
  