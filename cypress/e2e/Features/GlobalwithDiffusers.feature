Feature: Global Procedure with different users
 Scenario: Verify list with different users accounts
Then Enter Valid Credentials for "admin"
Then Enter Valid Credentials for "shift_manager"
Then Enter Valid Credentials for "supervisor"
Then Enter Valid Credentials for "plant_operator"

Then I Login Online as "admin"
Then I Login Online as "shift_manager"
Then I Login Online as "supervisor"
Then I Login Online as "plant_operator"


