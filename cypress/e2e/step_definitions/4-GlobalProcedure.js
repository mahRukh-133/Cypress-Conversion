// Import necessary dependencies and test data
import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { ProcedurePage } from '../../../PageObjects/ProcedurePage';

const Procedure_Page = new ProcedurePage
const procedureTitle1 = 'AUTO TEST PROCEDURE. DEMO-ENG-01';
const procedureTitle2 = 'AUTO TEST PROCEDURE. DEMO-ENG-03'
  Given('Login the app then Verify list of Procedure',()=>{
    cy.login();
    Procedure_Page.VerfyTitle()
    cy.get('.sc-gmgFlS').invoke('text').then((text) => {
    // Parse the text to extract the numerical value (e.g., "100").
    const numericalValue = parseInt(text.match(/\d+/)[0]);

    // Check if the value is less than 1.
        if (numericalValue < 1) {
        // Display a message if the value is less than 1.
        cy.log('Procedure list is not visible');
  }
});  
})
  

Then('Verify the List of Procedure',()=>{
  
  //Verify and Validate Procedure list in server
  Procedure_Page.VerifyProcedureList()


})

Then('Select a Procedure and Download it',()=>{
  cy.contains('AUTO TEST PROCEDURE. DEMO-ENG-01')
  .parents('tr')
  .within(() => {
    cy.get('button[id^="download-"]').click();
  });
  //cy.contains('Cancelar').click();
  cy.get(':nth-child(8) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true > span').invoke('click')
 
})

Then('Verify that after download button is disabled',()=>{

  cy.get('button#download-D27D19B9-E2C2-4706-ACFA-EE11AA1DBDFD').should('be.disabled');

})

Then('Download second procedure',()=>{
  cy.contains(procedureTitle2)
  .parents('tr')
  .within(() => {
   // cy.get('button[id^="download-"]').click();
  });

})


Then('Check that after executing of Procedure delete button is disable',()=>{

  cy.get('#tab-procedures-button').click()
  cy.get('#delete-procedure-button').should('be.disabled');

})


Then('Delete the all procedures',()=>{
  cy.get('#tab-executions-button').click()
  cy.get('[data-row-key="D27D19B9-E2C2-4706-ACFA-EE11AA1DBDFD"] > [data-column-id="id"] > .sc-gfoqjT > #delete-procedure-button').click()
  cy.contains('Aceptar').click();
  //cy.get('[data-row-key="747DBFDF-C246-46BD-9CA2-90D78DFF6CEF"] > [data-column-id="id"] > .sc-gfoqjT > #delete-procedure-button').click()
  //cy.contains('Aceptar').click();
})
