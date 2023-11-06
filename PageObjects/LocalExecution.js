export class LocalExecutionsPage {
    constructor() {
      this.globalTable = '#global-executions-table';
      this.deleteButton = '#delete-procedure-button';
      this.downloadExecutionButton = '#download-global-executions-button';
    }
  
    visitPage() {
      cy.visit('/'); // Replace with the URL of your application
      cy.intercept('DELETE', '/api/local-executions/*').as('deleteExecutions');
      cy.intercept('DELETE', '/api/local-procedures/*').as('deleteProcedures');
      return this;
    }
  
    deleteAll() {
      let deleteLocator = locate('.ant-table-tbody')
        .inside(this.globalTable)
        .find(this.deleteButton);
  
      cy.grabNumberOfVisibleElements(deleteLocator).then((nb) => {
        while (nb > 0) {
          cy.click(deleteLocator);
          let okStr = cy.getString('okText');
          cy.click(okStr);
          deleteLocator = locate('.ant-table-tbody')
            .inside(this.globalTable)
            .find(this.deleteButton);
          nb = cy.grabNumberOfVisibleElements(deleteLocator);
        }
      });
    }
  
    deleteExecution(executionId) {
      let locatorDeteleButton = locate(this.deleteButton).inside(
        `tr[data-row-key="${executionId}"]`
      );
  
      cy.click(locatorDeteleButton.toXPath());
      let okStr = cy.getString('okText');
      cy.click(okStr);
    }
  
    downloadExecution(exectutionId) {
      cy.click(this.downloadExecutionButton);
      cy.click(`#download-${exectutionId}`);
  
      // Add your logic for verifying download and notifications
    }
  
    // Add other methods here based on your requirements
  }
  
  