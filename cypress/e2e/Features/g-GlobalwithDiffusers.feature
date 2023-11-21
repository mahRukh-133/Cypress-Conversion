Feature: Login and Logout Functionality

  Scenario Outline: Login, perform actions, and logout as <UserType>
    Given Im on login page
    When I log in as "<UserType>"
    Then I log out

    Examples:
      | UserType       |
      | admin          |
      | shift_manager  |
      | supervisor     |
      | plant_operator |

