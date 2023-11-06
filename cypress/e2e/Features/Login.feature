Feature: 1 - Login Test

  Scenario: Login off-line - User enter for first time in Device 
    Given I am on the login page
    Then  Enter Valid Credentials
    When  I clicked on Login Button when I added credentials
    Then  I saw First Time Login Screen
    Then Enter device Name
    Then  Check that is connected to server
    Given  I logout the app
    Then   I Login Online
    Then  Check the Server is connected
    Then Turn on Connection