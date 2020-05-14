import basePage from '../pages/basePage';
import mainPage from "../pages/mainPage";
import editPage from "../pages/editPage";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { element } from 'protractor';
chai.use(chaiAsPromised);
const { expect } = chai;
browser.ignoreSynchronization = true;

describe('Non-Angular Computer Inventor App - ', () => {
     beforeEach(async () => {
          await browser.get('http://computer-database.herokuapp.com/computers');
     });

     it('adds computer to database', async () => {
          // ADD ONLY NAME
          await browser.sleep(1000);
          await mainPage.addComputerButton.click();
          await editPage.addComputerAddOrCancel("add", "ACE3");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          expect(addedComputerMessage).to.contain("Done!");

          // ADD NAME AND DATE1
          await browser.sleep(1000);
          await mainPage.addComputerButton.click();
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01");
          await browser.sleep(1000);
          addedComputerMessage = await mainPage.warningMessageText.getText();
          expect(addedComputerMessage).to.contain("Done!");

          // ADD NAME, DATE1 AND DATE2
          await browser.sleep(1000);
          await mainPage.addComputerButton.click();
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01", "2020-02-02");
          await browser.sleep(1000);
          addedComputerMessage = await mainPage.warningMessageText.getText();
          expect(addedComputerMessage).to.contain("Done!");

          // ADD NAME, DATE1, DATE2. COMPANY
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01", "2020-02-02", "RCA");
          await browser.sleep(1000);
          addedComputerMessage = await mainPage.warningMessageText.getText();
          expect(addedComputerMessage).to.contain("Done!");
          // TODO VERIFY COMPUTER IN DATABASE
          // SEARCH 
          // VERIFY COMPUTER FOUND TEXT

          // ENTER DATA AND SELECT CANCEL     
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("cancel", "ACE4", "2020-02-01", "2020-02-02", "RCA");
          // TODO VERIFY ACE4 NOT IN DATABASE
          // SEARCH 
          // VERIFY NO COMPUTER FOUND TEXT

          // TODO VERIFY REQUIRED NAME FIELD
          // CALL FUNCTION WITHOUT NAME
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add");
          await browser.sleep(3000);
          // VERIFY ERROR MESSAGE


          // CLEAN UP ADDED COMPUTERS
          try {
               // TODO GET ELEMENTS.ALL().LENGTH FOR BETTER FOR LOOP
               for (var i = 1; i < 7; i++) {           // TODO GET ELEMENTS.ALL().LENGTH FOR BETTER FOR LOOP
                    await mainPage.pageTitle.click();
                    await browser.sleep(1000);
                    console.log("delete added computers");
                    await editPage.ACE3Link.click();
                    await browser.sleep(1000);
                    await editPage.deleteThisComputerButton.click();
                    console.log("delete added computers");
               }
          } catch (error) {
               console.log("NO MORE NEWLY ADDED COMPUTERS IN DB => " + error);
          }
     });
});