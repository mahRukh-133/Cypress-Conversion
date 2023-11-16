import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from "../../../PageObjects/Login";
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
const Login_Page = new LoginPage();
const Home_Page = new HomePage();


Then('Enter Valid Credentials for {string}', (userType) => {
  cy.fixture('credentials.json').then((credentials) => {
    const { email, password } = credentials[userType];

    cy.log(`Logging in as ${userType} with email: ${email}, password: ${password}`);
    cy.visit('/');
    Login_Page.enterValidCredentials(email, password);
  });
});



Then ('I Login Online as {string}', (userType) => {
  cy.fixture('credentials.json').then((credentials) => {
    const { email, password } = credentials[userType];

    cy.visit('/');
    Login_Page.enterValidCredentials(email, password);
    Login_Page.clickLoginButton();
    Login_Page.scrollModalIntoView()
    Login_Page.clickElementInModal()
    Login_Page.clickAcepter()
    const uniqueDeviceName = generateUniqueDeviceName();
    Home_Page.AddDeviceName(uniqueDeviceName)
    Home_Page.ClickonConfirmer()
    
  });
});
