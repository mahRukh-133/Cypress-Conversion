import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../../../PageObjects/HomePage';
const Home_Page = new HomePage

//Scenario - Check in the connectivity button presents the status of connected 
  Given('I login the app',()=>{
    cy.login()
    cy.wait(2000)
})
  
  Then('Check that button is enable when connection is on',()=>{
    Home_Page.CheckConnectivityButtonisenabled()
  })


  //Scenario - Check that connectivity button is disabled when connection is close

  Given('I turn off the connection',()=>{
    Home_Page.TurnOffConnection()

  })

  Then('Check that Connection is not connected',()=>{
    Home_Page.CheckConnectionnotConnected()
  })

  Then('Check Connectivity Button is Disabled',()=>{
    Home_Page.CheckConnectivityButtonDisabled()
  })

  Then('Again On the connectivity and check that button is enable',()=>{
    Home_Page.TurnonConnection()
    Home_Page.CheckConnectivityButtonisenabled
  })
