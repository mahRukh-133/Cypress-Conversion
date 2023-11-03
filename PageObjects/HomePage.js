export class HomePage {
    checkServerConnectionStatus() {
      cy.contains('.ant-notification-notice-description', 'Se ha conectado con el servidor').should('be.visible');
    }
  
  
  AddDeviceName(Device){
    cy.get('#input').click().type(Device);

  }

  ClickonConfirmer(){
    cy.get('.sc-gsFSXq > .ant-btn').click()
  }

ClickonProfile(){
    cy.get('#profile-button').click()

}

ClickonLogout(){
    cy.get('.ant-popover-inner-content > :nth-child(4)').click()
}

ClcikonAccepter(){
    cy.get(':nth-child(8) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true').click()

}

NoConnectionToServer(){
cy.get('span[data-translation-id="noConnectionTitle"]').should('be.visible');
}

TurnonConnection(){
    cy.get('span[data-translation-id="reconnect"]').click();

}



































}