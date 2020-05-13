import basePage from '../pages/basePage';
import mainPage from "../pages/mainPage";
import editPage from "../pages/editPage";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const { expect } = chai;
browser.ignoreSynchronization = true;

describe('Non-Angular Computer Inventor App - ', () => {
     beforeEach(async () => {
          await browser.get('http://computer-database.herokuapp.com/computers');
     });

     it('adds computer to database', async () => {
          //select the add computer button
          await browser.sleep(1000);
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.computerNameTextBox.clear();
          await editPage.computerNameTextBox.sendKeys("ace2");
          await browser.sleep(1000);
          await editPage.introducedTextBox.clear();
          await editPage.introducedTextBox.sendKeys("2020-05-11");
          await browser.sleep(1000);
          await editPage.discontinuedTextBox.clear();
          await editPage.discontinuedTextBox.sendKeys("2020-05-11");
          await browser.sleep(1000);
          await editPage.selectCompany("RCA");
          await browser.sleep(1000);

          // cancel
          await editPage.cancelButton.click();
          await browser.sleep(3000);

          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputer();
         
          await browser.sleep(1000);
          const addedComputerMessage = await mainPage.warningMessageText.getText();
          expect(addedComputerMessage).to.contain("Done! Computer ace2 has been created");

     });
});