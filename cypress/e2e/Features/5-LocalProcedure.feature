Feature: 1 - Local Procedure

  Scenario: Check out the full functionality offered by the local procedure listing 
    Given List of procedures in the device
    Then  Downloading the procedure from the server to the device, and its referenced documents
    Then  Selection and display of a procedure from the list
    When  After starting the execution of a procedure: check that the delete button is disabled by
being executed