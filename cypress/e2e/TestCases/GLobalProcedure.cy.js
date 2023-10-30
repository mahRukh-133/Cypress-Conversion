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
      cy.get('.sc-gsFSXq > .ant-btn').click();
      cy.get('#tab-procedures-button > .sc-fqkvVR > svg').should('be.visible');
      cy.get('#tab-procedures-button > .sc-fqkvVR > svg').click();
      cy.get('#download-global-procedures-button > .sc-fqkvVR > svg').should('be.visible');
      cy.get('.sc-gdyeKB > span').should('have.text', 'Descargar procedimientos');
      cy.get('#download-global-procedures-button > .sc-fqkvVR > svg').click();
      cy.get('[data-row-key="DB6085CE-C5BF-EC11-A987-000D3A253563"] > [data-column-id="unit"] > .sc-gfoqjT > .sc-bmzYkS').should('be.visible');
      cy.get('#download-DB6085CE-C5BF-EC11-A987-000D3A253563 > .sc-fqkvVR > svg').should('be.visible');
      cy.get('#download-DB6085CE-C5BF-EC11-A987-000D3A253563 > .sc-fqkvVR > svg').click();
      cy.get('.ant-notification-notice-warning > .ant-notification-notice-content > .ant-notification-notice-with-icon > .ant-notification-notice-description > span').should('have.text', 'El/los procedimientos con clave: DEMO-ENG-03,DEMO-ENG-03 no se han podido descargar');
      cy.get('.ant-notification-notice-success > .ant-notification-notice-content > .ant-notification-notice-with-icon > .ant-notification-notice-message').should('have.text', 'Descarga completada');
      cy.get('.ant-drawer-close > .anticon > svg').click();
      cy.get('#delete-procedure-button > span').should('have.text', 'Eliminar');
      cy.get('#delete-procedure-button > span').click();
    //  cy.get(':nth-child(10) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true').should('have.text', 'Aceptar');
     // cy.get(':nth-child(10) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true').should('be.enabled');
      cy.get('.sc-gsFSXq > .ant-btn-default').should('be.enabled');
      cy.get('.sc-gsFSXq > .ant-btn-default').click();
    })})