Feature: 3- Connectivity Indicator Test

  Scenario: Check in the connectivity button presents the status of connected 
    Given I login the app
    Then  Check that button is enable when connection is on
    Given I turn off the connection
    Then  Check that Connection is not connected
    Then  Check Connectivity Button is Disabled
    Then  Again On the connectivity and check that button is enable