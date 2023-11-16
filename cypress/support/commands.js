import { LoginPage } from "../../PageObjects/Login";
import { HomePage } from '../../PageObjects/HomePage';
const Login_Page = new LoginPage
const Home_Page = new HomePage

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

Cypress.Commands.add('login', () => {

  cy.fixture('credentials.json').then((credentials) => {
    const { email, password } = credentials.admin;

      cy.visit('/');
      Login_Page.enterValidCredentials(email, password); // Use the enterValidCredentials method
      Login_Page.clickLoginButton(); 
      Login_Page.scrollModalIntoView()
      Login_Page.clickElementInModal()
      Login_Page.clickAcepter()
      const uniqueDeviceName = generateUniqueDeviceName();
      Home_Page.AddDeviceName(uniqueDeviceName)
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