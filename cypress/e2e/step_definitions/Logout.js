import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import {LoginPage} from "../../../PageObjects/Login"
import { HomePage } from '../../../PageObjects/HomePage';


function generateUniqueDeviceName() {
  // Generate a unique timestamp to ensure uniqueness
  const timestamp = new Date().getTime();

  // Get the current seconds
  const seconds = new Date().getSeconds();

  // Generate a random number to further ensure uniqueness
  const randomNumber = Math.floor(Math.random() * 1000); // Adjust the range as needed

  // Combine timestamp, seconds, random number, and a prefix to create the device name
  const deviceName = `device_${timestamp}_${seconds}_${randomNumber}`;

  return deviceName;
}


let loginUrl;
const Login_Page = new LoginPage
const Home_Page = new HomePage
beforeEach(() => {
    // Load the common URL from the JSON fixture
    cy.fixture('urls.json').then((urls) => {
      loginUrl = urls.loginUrl;
    });
  });
// Scenario test the Logout functionality
Given(`I login the app and enter device name`, () => {
    cy.visit(loginUrl);
    Login_Page.enterValidCredentials('admin@email.com', 'admin_proceed');
    Login_Page.clickLoginButton(); 
    Login_Page.scrollModalIntoView()
    Login_Page.clickElementInModal()
    Login_Page.clickAcepter()
    const deviceName =generateUniqueDeviceName();
    Home_Page.AddDeviceName(deviceName)
    Home_Page.ClickonConfirmer()
});

Then ('I log-out the app',()=>{
    Home_Page.ClickonProfile()
    Home_Page.ClickonLogout()
    Home_Page.ClcikonAccepter()
})

