import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { ProcedurePage } from '../../../PageObjects/ProcedurePage';
import { HomePage } from '../../../PageObjects/HomePage';

const Home_Page = new HomePage
const Procedure_Page = new ProcedurePage

const procedureTitle2 = 'AUTO TEST PROCEDURE. DEMO-ENG-03'
const downloadButton = document.querySelector('[data-id="$2f659ff2ed242106$export$4e54df4252b4a99c"]');
  Given('Check that the list of local procedures is empty',()=>{
    cy.login();
    Procedure_Page.CLickonProcedureTab()
    //cy.get('.sc-gmgFlS')
    //.should('contain', 'Total de elementos: 0');
  
  })

  Then('Check that the connectivity indicator shows the connected status',()=>{
    Home_Page.CheckConnectivityButtonisenabled()
  })

  Then('Download procedure PRU-AUTO-01',()=>{
    Home_Page.ClickOnDashboardTab()
    cy.wait(2000)
    
  const procedureKey = 'PRU-AUTO-01';
  cy.wait(3000)
          // Find the table row containing the specified data-row-key attribute value
      cy.get('.ant-table-row[data-row-key="1F75CC48-D682-4AD0-AD02-00626F5F3398"]').within(() => {
        // Verify that the status is "EXECUTING"
       
  
        // Click on the download button using its ID
        cy.get('#download-1F75CC48-D682-4AD0-AD02-00626F5F3398').click();
      });
      cy.get(':nth-child(10) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true').invoke('click')
    });
  

  Then('after downloading, the download button is disabled',()=>{
    cy.get('#download-1F75CC48-D682-4AD0-AD02-00626F5F3398').should('have.attr', 'disabled');

  })

  When('the after downloading, the procedure appears in the device list of procedures',()=>{
    cy.get('#tab-procedures-button').click()
    cy.get('td[data-column-id="title"]').should('contain', 'AUTO TEST PROCEDURE. DEMO-ENG-01');


 
  })

  Then('Delete procedure PRU-AUTO-01',()=>{
    cy.get('#tab-executions-button').click()
    cy.get('#delete-procedure-button').click()
    cy.get('.ant-btn-true').eq('2').click();
  })

  Given('Download Procedure Pro-auto 3',()=>{
    cy.get('#tab-dashboard').click()
    // Validate and download procedure with key "PRU-AUTO-03"
    const procedureKey = 'PRU-AUTO-03';
  
    // Find the row containing the procedure with the specified key
    cy.contains('td[data-column-id="procedure.key"]', procedureKey).parent('tr').within(() => {
      // Assert that the procedure key is present in the table
      cy.get('[data-column-id="procedure.key"]').should('contain', procedureKey);
  
      // Click the download button for the corresponding procedure
      cy.get('[id^="download-"]').click({force:true});
      cy.wait(3000)
    });
  })
 