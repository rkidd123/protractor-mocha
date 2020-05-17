import basePage from '../pages/basePage';
import mainPage from "../pages/mainPage";
import editPage from "../pages/editPage";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { element } from 'protractor';
chai.use(chaiAsPromised);
const { expect } = chai;
browser.ignoreSynchronization = true;

async function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
}


describe('Non-Angular Computer Inventor App - Add Computer Page Functionality', () => {
     beforeEach(async () => {
          await browser.get('http://computer-database.herokuapp.com/computers');
     });
     it.only('verified Canel button and computer not in DB', async () => {
           // TODO CANDIDATE FOR FUNCTION 
          const numberOfComputersFound = await mainPage.numberOfComputersFoundText.getText();
          // console.log("\nThe numberOfComputersFound text = " + numberOfComputersFound);
          var str = numberOfComputersFound;
          var resNumber = str.split(" ");
          // console.log("res " + resNumber[0]);
          var str1 = resNumber[0];
          var str2 = " computers found";
          var computerCountStr = str1.concat(str2);
          // console.log("computerCountStr " + computerCountStr);
          expect(numberOfComputersFound).to.contains(computerCountStr);
          global.countNumberOfComputers = Number(str1)
          // console.log("the number " + count);
          // TODO CANDIDATE FOR FUNCTION 
          try {
               console.log("in the try block");
               //global.numberOfACE4Computers = await element.all(mainPage.ACE4Link);
               ///////////////////////////////////////////////////////////////////////////////

               for (var i = 1; i < global.countNumberOfComputers; i++) {

                    var myXpathBefore = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
                    var myXpathAfter = "]/td[1]";
                    var myXpathBeforeDate1 = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
                    var myXpathAfterDate1 = "]/td[2]";
                    var myXpathBeforeDate2 = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
                    var myXpathAfterDate2 = "]/td[3]";
                    var myXpathBeforeDateCompany = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
                    var myXpathAfterDateCpmpany = "]/td[4]";

                    var cancelAction = "true";
                    var count = 0;
                    sleep(1000);
                    if (i == 1 || i % 10 == 0) {
                         console.log("\nPROCESSING - if ACE4 computer in DB ...\n");
                         if (i > 11) {
                              await mainPage.nextPaginationLink.click();
                         }
                         for (var j = 1; j < 11; j++) {
                              sleep(1000);
                              var col1Row1ValueOuter = await element(by.xpath(myXpathBefore + j + myXpathAfter)).getText();
                              var col1Row1ValueDate1 = await element(by.xpath(myXpathBefore + j + myXpathAfterDate1)).getText();
                              var col1Row1ValueDate2 = await element(by.xpath(myXpathBefore + j + myXpathAfterDate2)).getText();
                              var col1Row1ValueCompany = await element(by.xpath(myXpathBefore + j + myXpathAfterDateCpmpany)).getText();
                              console.log("The computer information for" + col1Row1ValueOuter + ":\n" + col1Row1ValueDate1 + " " + col1Row1ValueDate2 + " " + col1Row1ValueCompany);
                              if (col1Row1ValueOuter == "ACE4") {
                                   console.log("delete existing ACE4 computer");
                                   sleep(3000);
                                   // select filtered computer by link
                                   sleep(1000);
                                   await editPage.ACE4Link.click();
                                   sleep(1000);

                                   // delete the computer
                                   await editPage.deleteThisComputerButton.click();
                                   await browser.sleep(3000);

                              }
                         }

                    };
                    // expect(cancelAction).to.not.equal(false);
                    // console.log("The starting number of ACE4 computers in the DB " + global.numberOfACE4Computers);
               };

               ///////////////////////////////////////////////////////////////////////////////

          } catch (error) {
               console.log("\nNo computers in DB names ACE4 " + error + " acceptable error");
               global.numberOfACE4Computers = 0;
          }

          // //console.log("The starting number of ACE4 computers in the DB " + global.numberOfACE4Computers);
          // // DELETE ANY COMPUTERS IN THE DB NAMED ACE4
          // // CLEAN UP ADDED COMPUTERS
          // try {
          //      // TODO GET ELEMENTS.ALL().LENGTH FOR BETTER FOR LOOP
          //      for (var i = 1; i < numberOfACE4Computers; i++) {               // ONLY 10 ROWS PER PAGE - USE 11 FOR INDEX
          //           await mainPage.pageTitle.click();
          //           await browser.sleep(1000);
          //           console.log("delete added computers");
          //           await editPage.ACE4Link.click();
          //           await browser.sleep(1000);
          //           await editPage.deleteThisComputerButton.click();
          //           console.log("delete added computers");
          //      }
          // } catch (error) {
          //      console.log("NO COMPUTERS IN DB NAMED ACE4 => " + error);
          // }
          // await browser.sleep(1000);
         

          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("cancel", "ACE4", "2020-02-01", "2020-02-02", "RCA");
          await browser.sleep(1000);
          //html[1]/body[1]/section[1]/table[1]/tbody[1]/tr[1]/td[1]
          for (var i = 1; i < global.countNumberOfComputers; i++) {

               var myXpathBefore = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
               var myXpathAfter = "]/td[1]";
               var cancelAction = "true";
               var count = 0;
               sleep(1000);
               if (i == 1 || i % 10 == 0) {
                    // console.log("\nPROCESSING - verifying Canel button and computer not in DB ...");
                    if (i > 11) {
                         await mainPage.nextPaginationLink.click();
                    }
                    for (var j = 1; j < 11; j++) {
                         sleep(1000);
                         var col1Row1ValueOuter = await element(by.xpath(myXpathBefore + j + myXpathAfter)).getText();
                         // console.log("the computer name " + col1Row1ValueOuter);
                         if (col1Row1ValueOuter == "ACE4") {
                              cancelAction = false;
                         }
                    }

               };
               expect(cancelAction).to.not.equal(false);
          };
     });
     it('verify computer added to DB and shown in table', async (Done) => {
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "AAA", "2020-02-01", "2020-02-02", "RCA");
          await browser.sleep(1000);
          ///html[1]/body[1]/section[1]/table[1]/tbody[1]/tr[1]/td[1]
          const col1Row1Value = await element(by.xpath("/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr[1]/td[1]")).getText();
          console.log("the col1Row1Value " + col1Row1Value);
          // NOT REQUIRED - PROMISE RESOLVED !
          //console.dir(col1Row1Value);
          //console.log("the col1Row1Value " + JSON.stringify(col1Row1Value));

          // var myXpathBefore = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr[1]/td["
          // var myXpathAfter = "]";
          // for (let i = 1; i < 5; i++) {
          //      const col1Row1Value = await element(by.xpath(myXpathBefore + i + myXpathAfter)).getText();
          //      console.log("the col1Row1Value " + col1Row1Value);
          // }

          for (var i = 1; i < global.countNumberOfComputers; i++) {

               var myXpathBefore = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
               var myXpathAfter = "]/td[1]";
               var cancelAction = "true";
               var count = 0;
               sleep(1000);
               if (i == 1 || i % 10 == 0) {
                    console.log("\nPROCESSING - verifying computer added to DB and shown in table ...");
                    if (i > 11) {
                         await mainPage.nextPaginationLink.click();
                    }
                    for (var j = 1; j < 11; j++) {
                         sleep(1000);
                         var col1Row1ValueOuter = await element(by.xpath(myXpathBefore + j + myXpathAfter)).getText();
                         //console.log("the computer name " + col1Row1ValueOuter);
                         if (col1Row1ValueOuter == "ACE4") {
                              cancelAction = false;
                         }
                    }

               };
               expect(cancelAction).to.not.equal(true);
          };

          // CLEAN UP ADDED COMPUTERS
          try {
               // TODO GET ELEMENTS.ALL().LENGTH FOR BETTER FOR LOOP
               for (var i = 1; i < 11; i++) {               // TODO GET ELEMENTS.ALL().LENGTH FOR BETTER FOR LOOP
                    await mainPage.pageTitle.click();
                    await browser.sleep(1000);
                    console.log("delete added computers");
                    await editPage.aaaLink.click();
                    await browser.sleep(1000);
                    await editPage.deleteThisComputerButton.click();
                    console.log("delete added computers");
               }
          } catch (error) {
               console.log("NO MORE NEWLY ADDED COMPUTERS IN DB => " + error);
          }

          Done();
     });
     it('adds computer to database - without Introduced, Discontinued and Company fields', async () => {
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "ACE3");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          expect(addedComputerMessage).to.contain("Done!");
     });
     it('adds computer to database - without Discontinued and Company fields', async () => {
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          //console.log("the addedComputerMessage " + addedComputerMessage);
          expect(addedComputerMessage).to.contain("Done!");
     });
     it('adds computer to database - without Company field', async () => {
          await browser.sleep(1000);
          await mainPage.addComputerButton.click();
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01", "2020-02-02");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          //console.log("the addedComputerMessage " + addedComputerMessage);
          expect(addedComputerMessage).to.contain("Done!");
     });
     it('adds computer to database - all fields', async () => {       // TODO REDUNDENT TEST - CAN BE REMOVED

          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01", "2020-02-02", "RCA");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          //console.log("the addedComputerMessage " + addedComputerMessage);
          expect(addedComputerMessage).to.contain("Done!");
     });

     it('verified required name field', async () => {       // TODO REDUNDENT TEST - CAN BE REMOVED
          // TODO VERIFY REQUIRED NAME FIELD
          // CALL FUNCTION WITHOUT NAME
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add");
          await browser.sleep(3000);
          // VERIFY ERROR MESSAGE
     });
     it('deletes computers added during test', async () => {
          // CLEAN UP ADDED COMPUTERS
          try {
               // TODO GET ELEMENTS.ALL().LENGTH FOR BETTER FOR LOOP
               for (var i = 1; i < 11; i++) {               // ONLY 10 ROWS PER PAGE - USE 11 FOR INDEX
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