Cypress.Commands.add('downloadProcedure', (procedureTitle) => {
    cy.contains(procedureTitle)
      .parents('tr')
      .within(() => {
        cy.get('button[id^="download-"]').click();
      });
  
    
  });
  