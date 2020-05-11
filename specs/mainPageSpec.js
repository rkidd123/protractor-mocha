import basePage from '../pages/basePage';
import mainPage from "../pages/mainPage";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const { expect } = chai;
browser.ignoreSynchronization = true;

describe('Non-Angular Login', () => {
    beforeEach(async () => {
         await browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('verifies page title', async () => {
      
        console.log("First IT BLOCK");
        await browser.sleep(3000);
        const pageTitle = await mainPage.pageTitle.getText();
        console.log("The page text = " + pageTitle);
        expect(pageTitle).to.contain("Play sample application — Computer database");
       
    });

    it('selects first computer', async () => {
        //select computerNameLink to sort
        await mainPage.computerNameLink.click();
        await browser.sleep(3000);
        await mainPage.aceComputerLink.click();
        await browser.sleep(3000);
       
    });

    it.skip('should goto friend pages on successful login', async () => {
        await loginPage.loginAs(userData.testUser);

        expect(await friendPage.loaded()).to.be.true;
    });
});