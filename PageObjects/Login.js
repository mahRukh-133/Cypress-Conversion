

export class LoginPage {
    
    enterValidCredentials(username, password) {
      cy.get('#basic_username').click().type(username);
      cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click().type(password);
    }
  
    scrollModalIntoView() {
      cy.get('#legal-clauses-modal').scrollIntoView();
    }
  
    clickElementInModal() {
      cy.get('div > :nth-child(4)').click();
    }
    clickAcepter(){
      cy.get('#ok-button').click()
    }
    clickLoginButton() {
      cy.get('#login-button').click();
    }
  

}
  