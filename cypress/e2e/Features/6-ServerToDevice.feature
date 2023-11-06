Feature: Download Procedure Server To Device
 Scenario: Tests the download functionality of a procedure, with and without referenced procedures
 Given Check that the list of local procedures is empty
 Then  Check that the connectivity indicator shows the connected status
 Then  Download procedure PRU-AUTO-01
 Then  after downloading, the download button is disabled
 When  after downloading, the procedure appears in the devices list of procedures
 Then  Delete procedure PRU-AUTO-01
 Given Download procedure PRU-AUTO-03
 Then  check after downloading, the download button is disabled
 Then  then after downloading, the procedure appears in the devices list of procedures
 Then  Delete the Procedure PRU-AUTO-03