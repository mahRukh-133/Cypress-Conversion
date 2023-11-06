import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { ProcedurePage } from '../../../PageObjects/ProcedurePage';
import { HomePage } from '../../../PageObjects/HomePage';
import { downloadProcedure } from '../support/commands';

const Home_Page = new HomePage
const Procedure_Page = new ProcedurePage

const procedureTitle2 = 'AUTO TEST PROCEDURE. DEMO-ENG-03'

  Given('Check that the list of local procedures is empty',()=>{
    cy.login();
    cy.get('div.sc-gmgFlS')
    .should('contain', 'Total de elementos: 0');
  
  })

  Then('Check that the connectivity indicator shows the connected status',()=>{
    Home_Page.CheckConnectivityButtonisenabled()
  })

  Then('Download procedure PRU-AUTO-01',()=>{
    downloadProcedure('AUTO TEST PROCEDURE. DEMO-ENG-01');
  })

  Then('after downloading, the download button is disabled',()=>{
    cy.get('button#download-D27D19B9-E2C2-4706-ACFA-EE11AA1DBDFD').should('be.disabled');

  })

  When('after downloading, the procedure appears in the device list of procedures',()=>{
    cy.get('#tab-procedures-button')
    cy.get('div.sc-gmgFlS')
  .should('contain', 'Total de elementos: 1');
  })

  Then('Delete procedure PRU-AUTO-01',()=>{
    cy.get('#tab-executions-button').click()
    cy.get('[data-row-key="D27D19B9-E2C2-4706-ACFA-EE11AA1DBDFD"] > [data-column-id="id"] > .sc-gfoqjT > #delete-procedure-button').click()
    cy.contains('Aceptar').click();
  })

  Given('Download procedure PRU-AUTO-03',()=>{
    cy.get('#tab-dashboard').click()
    cy.contains(procedureTitle2)
  .parents('tr')
  .within(() => {
    cy.get('button[id^="download-"]').click();
  });

  })

  Then('check after downloading, the download button is disabled',()=>{
    cy.get('button#download-747DBFDF-C246-46BD-9CA2-90D78DFF6CEF')
  .should('be.disabled');

  })

  Then('then after downloading, the procedure appears in the devices list of procedures',()=>{
    cy.get('#tab-procedures-button').click()
    cy.get('div.sc-gmgFlS')
    .should('contain', 'Total de elementos: 1');
  })

  Then('Delete the Procedure PRU-AUTO-03',()=>{
    cy.get('#tab-executions-button').click()
    cy.get('[data-row-key="D27D19B9-E2C2-4706-ACFA-EE11AA1DBDFD"] > [data-column-id="id"] > .sc-gfoqjT > #delete-procedure-button').click()
    cy.contains('Aceptar').click();
  })