import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import {LoginPage} from "../../../PageObjects/Login"
import { HomePage } from '../../../PageObjects/HomePage';

function generateRandomDeviceName() {
    const adjectives = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Silver', 'Gold'];
    const nouns = ['Phone', 'Tablet', 'Laptop', 'Smartwatch', 'Camera', 'Game Console', 'Headphones', 'Speaker'];
  
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    const randomDeviceName = `${randomAdjective} ${randomNoun}`;
    return randomDeviceName;
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
//Scenario - Login-Offline with connection to Server
Given(`I am on the login page`, () => {
  cy.visit(loginUrl); // Use the visitLoginUrl method from the LoginPage object
});

Then('Enter Valid Credentials', () => {
  Login_Page.enterValidCredentials('admin@email.com', 'admin_proceed'); // Use the enterValidCredentials method
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
    
const deviceName = generateRandomDeviceName();
    Home_Page.AddDeviceName(deviceName)
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

    cy.visit(loginUrl);
    Login_Page.enterValidCredentials('admin@email.com', 'admin_proceed');
    Login_Page.clickLoginButton(); 

})

Then ('Check the Server is connected',()=>{
    Home_Page.NoConnectionToServer()
})

Then('Turn on Connection',()=>{
    Home_Page.TurnonConnection()
})