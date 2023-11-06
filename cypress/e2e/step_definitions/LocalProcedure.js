import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { ProcedurePage } from '../../../PageObjects/ProcedurePage';

const Procedure_Page = new ProcedurePage
const procedureTitle1 = 'AUTO TEST PROCEDURE. DEMO-ENG-01';
const procedureTitle2 = 'AUTO TEST PROCEDURE. DEMO-ENG-03'
  Given('List of procedures in the device',()=>{
    cy.login();
    cy.get('.sc-fiCwlc.hHehlD').invoke('text').then((text) => {
        const totalCount = parseInt(text);
        cy.log(`Total Count: ${totalCount}`);
      });
      

  })

  Then('Downloading the procedure from the server to the device, and its referenced documents',()=>{
    cy.contains('AUTO TEST PROCEDURE. DEMO-ENG-01')
  .parents('tr')
  .within(() => {
    cy.get('button[id^="download-"]').click();
  });
  //cy.contains('Cancelar').click();
  cy.get(':nth-child(8) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .sc-gsFSXq > .ant-btn-true > span').invoke('click')
 
  })

 

  Then('Selection and display of a procedure from the list',()=>{
    cy.get('#tab-executions-button').click()

    cy.contains('PRU-AUTO-01').click();

    cy.contains('PRU-AUTO-01 Rev.1').should('be.visible');

  })

  When('After starting the execution of a procedure check that the delete button is disabled by being executed',()=>{
    cy.get('#tab-executions-button').click()
    cy.get('#delete-procedure-button')
    .should('have.attr', 'disabled');
  
  })