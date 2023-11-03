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
  cy.contains('button', 'Aceptar').click();
}

NoConnectionToServer(){
cy.get('span[data-translation-id="noConnectionTitle"]').should('be.visible');
}

TurnonConnection(){
    cy.get('span[data-translation-id="reconnect"]').click();

}

CheckConnectivityButtonisenabled(){
  cy.get('button#connection-indicator-button')
  .should('not.have.attr', 'disabled');

}

TurnOffConnection(){
  cy.get('button#connection-indicator-button').click()
}

CheckConnectionnotConnected(){
  cy.get('.ant-result-title > span')
  .should('have.text', 'No hay conexión');

}

CheckConnectivityButtonDisabled(){
  cy.get('button#connection-indicator-button')
  .should('have.attr', 'data-status', 'DISABLED')
}


































}