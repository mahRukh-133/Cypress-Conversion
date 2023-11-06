import { LoginPage } from "../../PageObjects/Login";
import { HomePage } from '../../PageObjects/HomePage';
const Login_Page = new LoginPage
const Home_Page = new HomePage

function generateRandomDeviceName() {
    const adjectives = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Silver', 'Gold'];
    const nouns = ['Phone', 'Tablet', 'Laptop', 'Smartwatch', 'Camera', 'Game Console', 'Headphones', 'Speaker'];
  
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    const randomDeviceName = `${randomAdjective} ${randomNoun}`;
    return randomDeviceName;
  }
Cypress.Commands.add('login', () => {
    cy.fixture('urls.json').then((urls) => {
      const loginUrl = urls.loginUrl;
      cy.visit(loginUrl);
      Login_Page.enterValidCredentials('admin@email.com', 'admin_proceed'); // Use the enterValidCredentials method
      Login_Page.clickLoginButton(); 
      Login_Page.scrollModalIntoView()
      Login_Page.clickElementInModal()
      Login_Page.clickAcepter()
      const deviceName = generateRandomDeviceName();
      Home_Page.AddDeviceName(deviceName)
      Home_Page.ClickonConfirmer()
    });
  });
  Cypress.Commands.add('downloadProcedure', (procedureTitle) => {
    cy.contains(procedureTitle)
      .parents('tr')
      .within(() => {
        cy.get('button[id^="download-"]').click();
      });
  
    cy.get('.ant-modal-footer .ant-btn-true span').invoke('click');
  });