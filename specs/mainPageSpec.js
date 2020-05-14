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

    it('verifies page title', async () => {
        await browser.sleep(1000);
        const pageTitle = await mainPage.pageTitle.getText();
        console.log("\nThe page text = " + pageTitle);
        expect(pageTitle).to.contain("Play sample application — Computer database");

    });

    it('extracts numeric for number of computers', async () => {
        await browser.sleep(1000);
        // TODO CANDIDATE FOR FUNCTION 
        const numberOfComputersFound = await mainPage.numberOfComputersFoundText.getText();
        console.log("\nThe numberOfComputersFound text = " + numberOfComputersFound);
        var str = numberOfComputersFound;
        var resNumber = str.split(" ");
        //console.log("res " + resNumber[0]);
        var str1 = resNumber[0];
        var str2 = " computers found";
        var computerCountStr = str1.concat(str2);
        //console.log("computerCountStr " + computerCountStr);
        expect(numberOfComputersFound).to.contains(computerCountStr);
        global.count = Number(str1)
        //console.log("the number " + count);
        // TODO CANDIDATE FOR FUNCTION 

    });

    it('selects pagination and sort links', async () => {
        // select computerNameLink to sort
        await mainPage.computerNameLink.click();
        await browser.sleep(1000);

        // select the pagination link
        for (var i = 0; i < (global.count / 10); i++) {
            await mainPage.nextPaginationLink.click();
            await browser.sleep(500);
        }
        await browser.sleep(1000);

        // select 
        await mainPage.introducedLink.click();
        await browser.sleep(1000);

        // select the pagination link
        await mainPage.nextPaginationLink.click();
        await browser.sleep(1000);

        // select the discontinued link
        await mainPage.discontinuedLink.click();
        await browser.sleep(1000);

        // select the pagination link
        await mainPage.nextPaginationLink.click();
        await browser.sleep(1000);

        // slect the company link
        await mainPage.companyLink.click();
        await browser.sleep(1000);

        // select the pagination link
        await mainPage.nextPaginationLink.click();
        await browser.sleep(1000);

        // select computerNameLink to sort
        await mainPage.computerNameLink.click();
        await browser.sleep(1000);

        // protractor.Key.TAB does not work on this page
        // await editPage.computerNameTextBox.sendKeys("protractor.Key.TAB");
        // get text does not work on editPage
        // const computerNameOnEditPage = await editPage.computerNameTextBox.getText();
        // console.log("\nthe computerNameOnEditPage " + computerNameOnEditPage);

        await browser.sleep(3000);


    });
});