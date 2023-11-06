export class ProcedurePage {
VerfyTitle(){
    cy.get('[data-translation-id="myWorkForToday"]').invoke('text').should('eq', 'Mi trabajo para hoy');    // Use the "invoke" command to extract the text content.
}

VerifyProcedureList(){
    cy.get('.ant-table-tbody tr').should('exist');
  cy.get('.ant-table-tbody tr').its('length').should('be.gt', 0).then((rowCount) => {
    // Output the number of rows to the Cypress log.
    cy.log(`Number of rows in the table: ${rowCount}`);
  });
}

DownloadProcedure1(){
    cy.contains('Confirmar').click();
}














}