describe("Connectivity Indicator Test", () => {
    let loginUrl;
    beforeEach(() => {
      // Load the common URL from the JSON fixture
      cy.fixture('urls.json').then((urls) => {
        loginUrl = urls.loginUrl;
      });
    });
   ` `

    it('Check device connectivity status and toggle button',()=>{
      cy.visit(loginUrl); // Visit the login URL to simulate returning online

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
      cy.get('.sc-gsFSXq > .ant-btn > span').should('have.text', 'Confirmar');
      cy.get('.sc-gsFSXq > .ant-btn > span').click();
      cy.get('#connection-indicator-button > .ant-badge > .sc-fqkvVR > svg').should('be.visible');
      cy.get('#connection-indicator-button > .ant-badge > .sc-fqkvVR > svg').click();
      cy.get('.ant-result-title > span').should('have.text', 'No hay conexión');
      cy.get('.ant-btn-primary > span').should('have.text', 'Reconectar');
      cy.get('.ant-btn-primary > span').should('be.visible');
      cy.get('.ant-notification-notice-message').should('have.text', 'Conectado');
      cy.get('.ant-notification-notice-description').should('have.text', 'Se ha conectado con el servidor');
      cy.get('.ant-notification-notice-message').should('be.visible');
      cy.get('.ant-notification-notice-message').should('have.class', 'ant-notification-notice-message');
      cy.get('#connection-indicator-button > .ant-badge > .sc-fqkvVR > svg').click();
      cy.get('.ant-result-extra > .ant-btn-default > span').should('have.text', 'Volver');
      cy.get('.ant-result-extra > .ant-btn-default').click();
      cy.get('.ant-table-body').click();
    })
  });
  