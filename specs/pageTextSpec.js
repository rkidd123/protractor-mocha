import basePage from '../pages/basePage';
import mainPage from "../pages/mainPage";
import editPage from "../pages/editPage";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const { expect } = chai;
browser.ignoreSynchronization = true;

describe('Non-Angular Computer Inventory App - Text and Display main page', () => {
    beforeEach(async () => {
        await browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('verifies verify Play sample application — Computer database link text', async () => {
        await browser.sleep(1000);
        const pageTitle = await mainPage.pageTitle.getText();
        // console.log("\nThe page text = " + pageTitle);
        expect(pageTitle).to.contain("Play sample application — Computer database");

    });
    it.skip('verifies verify Play sample application — Computer database link text', async () => {
        await browser.sleep(1000);
        const filterButtonText = await mainPage.filterByNameButtom.getText();
        // console.log("\nThe filterButtonText = " + filterButtonText);

        // TODO - GETTEXT NOT WORKING FOR THIS tEXT - USE JAVASCRIPT / CSS

    });
    it('verifies add new computer button text', async () => {
        await browser.sleep(1000);
        const addComputerButtonText = await mainPage.addComputerButton.getText();
        // console.log("\nThe addComputerButtonText = " + addComputerButtonText);
        expect(addComputerButtonText).to.contain("Add a new computer");
    });
    it('verifies computer name link text', async () => {
        await browser.sleep(1000);
        const computerNameLinkText = await mainPage.computerNameLink.getText();
        // console.log("\nThe computerNameLinkText = " + computerNameLinkText);
        expect(computerNameLinkText).to.contain("Computer name");
    });
    it('verifies computer name link text', async () => {
        await browser.sleep(1000);
        const introducedLinkText = await mainPage.introducedLink.getText();
        // console.log("\nThe introducedLinkText = " + introducedLinkText);
        expect(introducedLinkText).to.contain("Introduced");
    });
    it('verifies computer name link text', async () => {
        await browser.sleep(1000);
        const discontinuedLinkText = await mainPage.discontinuedLink.getText();
        // console.log("\nThe discontinuedLinkText = " + discontinuedLinkText);
        expect(discontinuedLinkText).to.contain("Discontinued");
    });
    it('verifies company link text', async () => {
        await browser.sleep(1000);
        const companyLinkText = await mainPage.companyLink.getText();
        // console.log("\nThe companyLinkText = " + companyLinkText);
        expect(companyLinkText).to.contain("Company");
    });
    it('verifies pagination Display text', async () => {
        // TODO USE FUNCTION TO GET NUMBER OF COMPUTERS AND CONCATE PAGINATION STRING
        await browser.sleep(1000);
        // TODO MOVE TO FUNCTION IN MAINPAGE CLASS ////////////////////////////////////////
        const numberOfComputersFound = await mainPage.numberOfComputersFoundText.getText();
        // console.log("\nThe numberOfComputersFound text = " + numberOfComputersFound);
        var str = numberOfComputersFound;
        var resNumber = str.split(" ");
        // console.log("res " + resNumber[0]);
        var str1 = resNumber[0];
        var str2 = "Displaying 1 to 10 of ";
        var computerCountStr = str2.concat(str1);
        // console.log("computerCountStr " + computerCountStr);
        //expect(numberOfComputersFound).to.contains(computerCountStr);
        global.count = Number(str1)
        // console.log("the number " + count);
        /// TODO MOVE TO FUNCTION IN MAINPAGE CLASS ////////////////////////////////////////
        const paginationDisplayText = await mainPage.paginationDisplay.getText();
        // console.log("\nThe paginationDisplayText = " + paginationDisplayText);
        expect(paginationDisplayText).to.contain(computerCountStr);
    });
    it('verifies pagination next text', async () => {
        await browser.sleep(1000);
        const nextPaginationLinkText = await mainPage.nextPaginationLink.getText();
        // console.log("\nThe nextPaginationLinkText = " + nextPaginationLinkText);
        expect(nextPaginationLinkText).to.contain("Next →");
    });
    it('verifies pagination previous text', async () => {
        await browser.sleep(1000);
        await mainPage.nextPaginationLink.click();
        const previousPaginationLinkText = await mainPage.previousPaginationLink.getText();
        // console.log("\nThe previousPaginationLinkText = " + previousPaginationLinkText);
        expect(previousPaginationLinkText).to.contain("← Previous");
    });

    describe('Non-Angular Computer Inventory App - - Text and Display add computer page', () => {
        beforeEach(async () => {
            await browser.get('http://computer-database.herokuapp.com/computers');
        });

        it('verifies Add a computer text', async () => {
            await browser.sleep(1000);
            await mainPage.addComputerButton.click();
            await browser.sleep(1000);
            const addComputerTextText = await editPage.addComputerText.getText();
            // console.log("\nThe addComputerTextText = " + addComputerTextText);
            expect(addComputerTextText).to.contain("Add a computer");
        });
        it('verifies Computer name text', async () => {
            await browser.sleep(1000);
            // GET TEXT FORM ELEMENT ON PAGE CAUSES APP TO RETURN TO MAIN PAGE
            // MUST SELECT ADD COMPUTER BUTTON AGAIN TO GO TO ADD COMPUTER PAGE
            await mainPage.addComputerButton.click();
            await browser.sleep(1000);
            const computerNameTextText = await editPage.computerNameText.getText();
            // console.log("\nThe computerNameTextText = " + computerNameTextText);
            expect(computerNameTextText).to.contain("Computer name");

        });
        it('verifies Introduced Date text', async () => {
            await browser.sleep(1000);
            // GET TEXT FORM ELEMENT ON PAGE CAUSES APP TO RETURN TO MAIN PAGE
            // MUST SELECT ADD COMPUTER BUTTON AGAIN TO GO TO ADD COMPUTER PAGE
            await mainPage.addComputerButton.click();
            await browser.sleep(1000);
            const introducedDateTextText = await editPage.introducedDateText.getText();
            // console.log("\nThe cointroducedDateTextText = " + introducedDateTextText);
            expect(introducedDateTextText).to.contain("Introduced date");

        });
        it('verifies Discontinued Date text', async () => {
            await browser.sleep(1000);
            // GET TEXT FORM ELEMENT ON PAGE CAUSES APP TO RETURN TO MAIN PAGE
            // MUST SELECT ADD COMPUTER BUTTON AGAIN TO GO TO ADD COMPUTER PAGE
            await mainPage.addComputerButton.click();
            await browser.sleep(1000);
            const discontinuedDateTextText = await editPage.discontinuedDateText.getText();
            // console.log("\nThe discontinuedDateTextText = " + discontinuedDateTextText);
            expect(discontinuedDateTextText).to.contain("Discontinued date");
        });
        it('verifies Company text', async () => {
            await browser.sleep(1000);
            // GET TEXT FORM ELEMENT ON PAGE CAUSES APP TO RETURN TO MAIN PAGE
            // MUST SELECT ADD COMPUTER BUTTON AGAIN TO GO TO ADD COMPUTER PAGE
            await mainPage.addComputerButton.click();
            await browser.sleep(1000);
            const companyTextText = await editPage.companyText.getText();
            // console.log("\nThe companyText = " + companyTextText);
            expect(companyTextText).to.contain("Company")
        });
        it.skip('verifies Create this computer button text', async () => {
            // TODO - GETTEXT NOT WORKING FOR THIS BUTTON - USE JAVASCRIPT / CSS
            await browser.sleep(1000);
            // GET TEXT FORM ELEMENT ON PAGE CAUSES APP TO RETURN TO MAIN PAGE
            // MUST SELECT ADD COMPUTER BUTTON AGAIN TO GO TO ADD COMPUTER PAGE
            await mainPage.addComputerButton.click();
            await browser.sleep(1000);
            const createThisComputerButtonText = await editPage.createThisComputerButton.getText();
            // console.log("\nThe createThisComputerButtonText = " + createThisComputerButtonText);
            expect(createThisComputerButtonText).to.contain("Create this computer");
        });
        it('verifies Cancel button text', async () => {
            await browser.sleep(1000);
            await mainPage.addComputerButton.click();
            await browser.sleep(1000);
            const cancelButtonText = await editPage.cancelButton.getText();
            // console.log("\nThe cancelButtonText = " + cancelButtonText);
            expect(cancelButtonText).to.contain("Cancel");
        });
        describe('Non-Angular Computer Inventory App - - Text and Display edit computer page', () => {
            beforeEach(async () => {
                await browser.get('http://computer-database.herokuapp.com/computers');
            });

            // ALL TEXT ON EDIT PAGE EXIST ON ADD PAGE EXCEPT THE "EDIT PAGE" TEXT AND THE DELETE THIS COMPUTER BUTTON
            it('verifies Edit computer text', async () => {
                await editPage.addComputerAddOrCancel("add", "AAA");
                await browser.sleep(1000);
                await editPage.ARRALink.click();
                await browser.sleep(1000);
                const editPageTextText = await editPage.editPageText.getText();
                // console.log("\nThe editPageTextText = " + editPageTextText);
                expect(editPageTextText).to.contain("Edit computer");
            });
            it.skip('verifies Delete this computer text', async () => {
                // TODO - GETTEXT NOT WORKING FOR THIS BUTTON - USE JAVASCRIPT / CSS
                await browser.sleep(3000);
                // select computer
                await mainPage.pageTitle.click();
                await browser.sleep(3000);
                await editPage.aaaLink.click();
                await browser.sleep(3000);
                const deleteThisComputerButtonText = await editPage.deleteThisComputerButton.getText();
                console.log("\nThe deleteThisComputerButtonText = " + deleteThisComputerButtonText);
                expect(deleteThisComputerButtonText).to.contain("Delete this computer");
            });
        });
    });
});
