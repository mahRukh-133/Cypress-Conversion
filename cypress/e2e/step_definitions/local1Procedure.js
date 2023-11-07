import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';


  Given('List of procedures in the device',()=>{
    cy.login();
  })

  Then('Then Downloading the procedure from the server to the device, and its referenced documents',()=>{
    cy.get('tr[data-row-key="747DBFDF-C246-46BD-9CA2-90D78DFF6CEF"]').within(() => {
        cy.get('span[data-min-width="100"].sc-gfoqjT.tLinG').should('contain', 'AUTO TEST PROCEDURE. DEMO-ENG-03')
        cy.get('button[type="button"][id^="download-"]').click()
      })
      

  })

  Then('Selection display of a procedure from the list',()=>{
    cy.get('#tab-procedures-button').click()
    cy.contains('td[data-column-id="title"]', 'AUTO TEST PROCEDURE. DEMO-ENG-03').should('exist')

  })

  When('starting the execution of a procedure: check that the delete button is disabled bybeing executed',()=>{
    cy.get('#delete-procedure-button').should('be.disabled')

   
  })

 