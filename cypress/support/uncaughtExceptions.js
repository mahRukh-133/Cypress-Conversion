Cypress.on('uncaught:exception', (err, runnable) => {
    // This prevents Cypress from failing the test on uncaught exceptions
    // You can choose to log the error or handle it as needed
    return false;
  });
  