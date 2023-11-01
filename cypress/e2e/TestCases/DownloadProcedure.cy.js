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
      cy.get('#tab-procedures-button > .sc-fqkvVR > svg > g > [d="M8.25,18.386 C8.457,18.386 8.625,18.554 8.625,18.761 C8.625,18.968 8.457,19.136 8.25,19.136 C8.043,19.136 7.875,18.968 7.875,18.761 C7.875,18.554 8.043,18.386 8.25,18.386"]').should('be.visible');
      cy.get('#tab-procedures-button > .sc-fqkvVR > svg').click();
      cy.get('#download-global-procedures-button > .sc-fqkvVR > svg').click();
      cy.get('#download-6281DC28-053E-EC11-A883-000D3A253563 > .sc-fqkvVR > svg').click();
      cy.get('.ant-notification-notice-description > :nth-child(1) > :nth-child(1) > span').should('have.text', 'Descargado procedimiento:');
      cy.get('#global-procedures-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > :nth-child(2) > .ant-table-column-sorters').click();
      cy.get('#global-procedures-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > .ant-table-column-sort > .ant-table-column-sorters').click();
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
  
  