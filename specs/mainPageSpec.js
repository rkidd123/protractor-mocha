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
        //console.log("\nThe page text = " + pageTitle);
        expect(pageTitle).to.contain("Play sample application — Computer database");

    });
    it('extracts numeric for number of computers', async () => {
        await browser.sleep(1000);
        // TODO CANDIDATE FOR FUNCTION 
        const numberOfComputersFound = await mainPage.numberOfComputersFoundText.getText();
        // console.log("\nThe numberOfComputersFound text = " + numberOfComputersFound);
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
    it('verifies pagination and next and previous links', async () => {
        // select the pagination link
        for (var i = 0; i < ((global.count / 10) - 1); i++) {
            const firstColumnValue = await mainPage.firstColumnValue.getText();
            // console.log("firstColumnValue " + firstColumnValue);
            await mainPage.nextPaginationLink.click();
            await browser.sleep(250);
            const firstColumnValueAfterPagination = await mainPage.firstColumnValue.getText();
            // console.log("firstColumnValueAfterPagination " + firstColumnValueAfterPagination);
            expect(firstColumnValue).to.not.equal(firstColumnValueAfterPagination);
        }
        for (var i = 0; i < ((global.count / 10) - 1); i++) {
            const firstColumnValue = await mainPage.firstColumnValue.getText();
            await mainPage.previousPaginationLink.click();
            await browser.sleep(250);
            const firstColumnValueAfterPagination = await mainPage.firstColumnValue.getText();
            // console.log("firstColumnValueAfterPagination " + firstColumnValueAfterPagination);
            expect(firstColumnValue).to.not.equal(firstColumnValueAfterPagination);
        }
    });
    it('verifies Computper name link', async () => {
        // select computerNameLink to sort
        await browser.sleep(1000);
        const firstColumnValue = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValue " + firstColumnValue);
        await mainPage.nextPaginationLink.click();
        await browser.sleep(1000);
        const firstColumnValueAfterPagination = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValueAfterPagination " + firstColumnValueAfterPagination);
        expect(firstColumnValue).to.not.equal(firstColumnValueAfterPagination);
        await mainPage.computerNameLink.click();
        await browser.sleep(1000);
        const firstColumnValueAfterSort = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValueAfterSort " + firstColumnValueAfterSort);
        expect(firstColumnValue).to.equal(firstColumnValueAfterSort);
    });
    it('verifies Introduced name link', async () => {
        // select computerNameLink to sort
        await browser.sleep(1000);
        const firstColumnValue = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValue " + firstColumnValue);
        await mainPage.nextPaginationLink.click();
        await browser.sleep(1000);
        const firstColumnValueAfterPagination = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValueAfterPagination " + firstColumnValueAfterPagination);
        expect(firstColumnValue).to.not.equal(firstColumnValueAfterPagination);
        await mainPage.introducedLink.click();
        await browser.sleep(1000);
        const firstColumnValueAfterSort = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValueAfterSort " + firstColumnValueAfterSort);
        expect(firstColumnValue).to.equal(firstColumnValueAfterSort);
    });
    it('verifies Discontinue name link', async () => {
        // select computerNameLink to sort
        await browser.sleep(1000);
        const firstColumnValue = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValue " + firstColumnValue);
        await mainPage.nextPaginationLink.click();
        await browser.sleep(1000);
        const firstColumnValueAfterPagination = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValueAfterPagination " + firstColumnValueAfterPagination);
        expect(firstColumnValue).to.not.equal(firstColumnValueAfterPagination);
        await mainPage.discontinuedLink.click();
        await browser.sleep(1000);
        const firstColumnValueAfterSort = await mainPage.firstColumnValue.getText();
        // console.log("firstColumnValueAfterSort " + firstColumnValueAfterSort);
        expect(firstColumnValue).to.equal(firstColumnValueAfterSort);
    });

});