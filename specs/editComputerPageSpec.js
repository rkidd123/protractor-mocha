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

    it('verified computer deleted  from DB', async () => {
        // add a computer to be edited
        await browser.sleep(1000);
        //await mainPage.addComputerButton.click();                 // added nav to function - TODO - DELETE THIS LINE AFTER TESTING
        await editPage.addComputerAddOrCancel("add", "ace2");
        
        // filter by newly added computer
        await mainPage.searchTextBox.click();
        await mainPage.searchTextBox.sendKeys("ace2");
        await browser.sleep(1000);

        // filter
        await mainPage.filterByNameButtom.click();
        await browser.sleep(1000);

        // select filtered computer by link
        await editPage.ace2Link.click();
        await browser.sleep(1000);

        // delete the computer
        await editPage.deleteThisComputerButton.click();
        await browser.sleep(3000);

        const warningMessage = await mainPage.warningMessageText.getText();
        console.log("The  warningMessage " + warningMessage);
        expect(warningMessage).to.contain("Done! Computer has been deleted");

        await browser.sleep(1000);
    });
});