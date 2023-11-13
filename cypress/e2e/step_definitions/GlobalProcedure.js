// Import necessary dependencies and test data
import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { ProcedurePage } from '../../../PageObjects/ProcedurePage';

const Procedure_Page = new ProcedurePage

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
  cy.get('#tab-dashboard').click()
  // Validate and download procedure with key "PRU-AUTO-03"
  const procedureKey = 'PRU-AUTO-03';

  // Find the row containing the procedure with the specified key
  cy.contains('td[data-column-id="procedure.key"]', procedureKey).parent('tr').within(() => {
    // Assert that the procedure key is present in the table
    cy.get('[data-column-id="procedure.key"]').should('contain', procedureKey);

    // Click the download button for the corresponding procedure
    cy.get('[id^="download-"]').click();
  });
  //cy.contains('Cancelar').click();
  cy.get(':nth-child(9) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true').invoke('click')
 
})

Then('Verify that after download button is disabled',()=>{

// Assuming you have previously located the button element
const downloadButton = cy.get('#download-747DBFDF-C246-46BD-9CA2-90D78DFF6CEF');

// Verify that the button is disabled
downloadButton.should('have.attr', 'disabled');

})

Then('Download second procedure',()=>{
  const procedureKey = 'PRU-AUTO-01';

   // Find the row containing the procedure with the specified key and EXECUTING status
   cy.contains('td[data-column-id="procedure.key"]', procedureKey)
   .parent('tr')
   .within(() => {
     // Check if the status is EXECUTING
     const statusText = cy.get('[data-column-id="status"] #status-text').invoke('text');
     if (statusText === 'EJECUTANDO') {
       // Assert that the procedure key is present in the table
       cy.get('[data-column-id="procedure.key"]').should('contain', procedureKey);

       // Click the download button for the corresponding procedure
       cy.get('[id^="download-"]').click();
     } else {
       // Log a message if the procedure is not in EXECUTING stage
       cy.log(`Procedure with key "${procedureKey}" is not in EXECUTING stage.`);
     }
   });

})


Then('Check that after executing of Procedure delete button is disable',()=>{

  cy.get('#tab-procedures-button').click()
  cy.get('#delete-procedure-button').should('be.disabled');

})


Then('Delete the all procedures',()=>{
  cy.get('#tab-executions-button').click()
  cy.get('#delete-procedure-button').click();
  cy.contains('Aceptar').click();

  cy.wait(3000)
 // cy.get('#delete-procedure-button').click();
 // cy.contains('Aceptar').click();

})

Then('the sorting is alphabetically',()=>{
cy.get('#tab-procedures-button').click()
 // Click on the Clave column header
 cy.get(':nth-child(3) > .ant-table-column-sorters').click({force:true})
 cy.get(':nth-child(3) > .ant-table-column-sorters').click({force:true})

 // Wait for a moment to ensure the sorting is applied
 cy.wait(3000); // Adjust the wait duration as needed

 // Get the titles in the sorted order
 cy.get('td[data-column-id="title"]')
   .then($titles => {
     return $titles.map((index, html) => Cypress.$(html).text()).get();
   })
   .should('deep.eq', ['AUTO TEST PROCEDURE. DEMO-ENG-01', 'AUTO TEST PROCEDURE. DEMO-ENG-03']);
});




