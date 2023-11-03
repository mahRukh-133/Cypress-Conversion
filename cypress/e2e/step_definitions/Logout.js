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
// Scenario test the Logout functionality
Given(`I login the app and enter device name`, () => {
    cy.visit(loginUrl);
    Login_Page.enterValidCredentials('admin@email.com', 'admin_proceed');
    Login_Page.clickLoginButton(); 
    Login_Page.scrollModalIntoView()
    Login_Page.clickElementInModal()
    Login_Page.clickAcepter()
    const deviceName = generateRandomDeviceName();
    Home_Page.AddDeviceName(deviceName)
    Home_Page.ClickonConfirmer()
});

Then ('I log-out the app',()=>{
    Home_Page.ClickonProfile()
    Home_Page.ClickonLogout()
    Home_Page.ClcikonAccepter()
})

