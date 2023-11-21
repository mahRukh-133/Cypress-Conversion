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

const Login_Page = new LoginPage();
const Home_Page = new HomePage();

Given('Im on login page', () => {
  // Add code to visit the login page if needed
  cy.visit('/');
});

When('I log in as {string}', (userType) => {
  cy.fixture('credentials.json').then((credentials) => {
    const { email, password } = credentials[userType];

    cy.log(`Logging in as ${userType} with email: ${email}, password: ${password}`);
    Login_Page.enterValidCredentials(email, password);
    Login_Page.clickLoginButton();
    Login_Page.scrollModalIntoView();
    Login_Page.clickElementInModal();
    Login_Page.clickAcepter();
    cy.wait(2000);
    const uniqueDeviceName = generateUniqueDeviceName();
    Home_Page.AddDeviceName(uniqueDeviceName);
    Home_Page.ClickonConfirmer();
    Home_Page.ClickonProfile();
    Home_Page.ClickonLogout();
    Home_Page.clickonlogoutyes()
  });
});

Then('I log out', () => {
  // Add code for logging out if needed
});
