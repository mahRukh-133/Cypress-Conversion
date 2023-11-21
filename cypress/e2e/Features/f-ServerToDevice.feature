Feature: Download Procedure Server To Device
 Scenario: Tests the download functionality of a procedure, with and without referenced procedures
 Given Check that the list of local procedures is empty
 Then  Check that the connectivity indicator shows the connected status
 Then  Download procedure PRU-AUTO-01
 Then  after downloading, the download button is disabled
 When  the after downloading, the procedure appears in the device list of procedures
 Then  Delete procedure PRU-AUTO-01
Given  Download Procedure Pro-auto 3