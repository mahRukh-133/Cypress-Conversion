Feature: Global Procedure
 Scenario: Verify list of procedure 
    Given  Login the app then Verify list of Procedure
    Then  Verify the List of Procedure
    Then  Select a Procedure and Download it
    Then  Verify that after download button is disabled
    Then  Download second procedure
    Then Check that after executing of Procedure delete button is disable
    Then Delete the all procedures
Then the sorting is alphabetically