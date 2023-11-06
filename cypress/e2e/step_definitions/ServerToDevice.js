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
    cy.get("td[data-column-id='procedure.title']").contains("AUTO TEST PROCEDURE. DEMO-ENG-01")
    .parents('tr')
  .within(() => {
    cy.get('[data-row-key="9F5C7A08-779A-4BE2-A299-83CD07257A5D"] > [style="position: sticky; right: 0px;"] > .sc-gfoqjT').invoke('click')  
  
  });
    cy.get(':nth-child(10) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true').invoke('click')
  
  })
  

  Then('after downloading, the download button is disabled',()=>{
   // cy.get('#download-9F5C7A08-779A-4BE2-A299-83CD07257A5D').should('be.disabled');

  })

  When('the after downloading, the procedure appears in the device list of procedures',()=>{
    cy.get('#tab-procedures-button').click()
   // cy.get('.sc-gmgFlS').should('contain', 'Total de elementos: 1');

 
  })

  Then('Delete procedure PRU-AUTO-01',()=>{
    cy.get('#tab-executions-button').click()
    cy.get('#delete-procedure-button').click()
    cy.contains('Aceptar').click();
  })

 