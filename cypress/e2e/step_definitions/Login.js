import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import {LoginPage} from "../../../PageObjects/Login"
import { HomePage } from '../../../PageObjects/HomePage';

function generateUniqueDeviceName() {
  // Generate a unique timestamp to ensure uniqueness
  const timestamp = new Date().getTime();

  // Combine timestamp with a prefix to create the device name
  const deviceName = `device_${timestamp}`;

  return deviceName;
}



let loginUrl;
const Login_Page = new LoginPage
const Home_Page = new HomePage

/*beforeEach(() => {
  // Load the common URL from the JSON fixture
  cy.fixture('urls.json').then((urls) => {
    loginUrl = urls.loginUrl;
  });
});*/
//Scenario - Login-Offline with connection to Server
Given(`I am on the login page`, () => {

  cy.visit('/'); // Use the visitLoginUrl method from the LoginPage object
});

Then('Enter Valid Credentials', () => {
  cy.fixture('credentials.json').then((credentials) => {
    const { email, password } = credentials.admin;

    // Use the credentials in your login logic
    cy.log(`Logging in with email: ${email}, password: ${password}`);
    
    Login_Page.enterValidCredentials(email, password); // Use the enterValidCredentials method


    // Add assertions or further actions after logging in
  });
});


When('I clicked on Login Button when I added credentials', () => {
  Login_Page.clickLoginButton(); // Use the clickLoginButton method
});

Then ('I saw First Time Login Screen', ()=>{
    Login_Page.scrollModalIntoView()
    Login_Page.clickElementInModal()
    Login_Page.clickAcepter()
})

Then ('Enter device Name',()=>{
    
  const uniqueDeviceName = generateUniqueDeviceName();
    Home_Page.AddDeviceName(uniqueDeviceName)
    Home_Page.ClickonConfirmer()
})
When('Check that is connected to server',()=>{
  Home_Page.checkServerConnectionStatus();
})


//Scenario 2 - Login online

Given('I logout the app',()=>{
    Home_Page.ClickonProfile()
    Home_Page.ClickonLogout()
    Home_Page.ClcikonAccepter()
})


Then ('I Login Online',()=>{
  cy.fixture('credentials.json').then((credentials) => {
    const { email, password } = credentials.admin;

    cy.visit('/');
    Login_Page.enterValidCredentials(email, password);
    Login_Page.clickLoginButton(); 

})})

Then ('Check the Server is connected',()=>{
    Home_Page.NoConnectionToServer()
})

Then('Turn on Connection',()=>{
    Home_Page.TurnonConnection()
})