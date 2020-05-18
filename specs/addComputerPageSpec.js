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


describe('Non-Angular Computer Inventor App - Add Computer Page Functionality:', () => {
     beforeEach(async () => {
          await browser.get('http://computer-database.herokuapp.com/computers');
     });
     it('verifies Canel button and computer not in DB', async () => {
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
          global.totalNumberOfComputers = 0;
          try {
               console.log("\nPROCESSING - all computers in DB ...\n");
               sleep(2000);
               for (var i = 1; i < (global.countNumberOfComputers + 11); i++) {
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
                    if (i % 10 == 0) {
                         sleep(1000);
                         if (i > 11) {
                              // await mainPage.nextPaginationLink.click();
                         }
                         try {

                         } catch (error) {

                         }
                         try {
                              for (var j = 1; j < 11; j++) {
                                   sleep(1000);
                                   var col1Row1ValueOuter = await element(by.xpath(myXpathBefore + j + myXpathAfter)).getText();
                                   var col1Row1ValueDate1 = await element(by.xpath(myXpathBefore + j + myXpathAfterDate1)).getText();
                                   var col1Row1ValueDate2 = await element(by.xpath(myXpathBefore + j + myXpathAfterDate2)).getText();
                                   var col1Row1ValueCompany = await element(by.xpath(myXpathBefore + j + myXpathAfterDateCpmpany)).getText();
                                   console.log("The information for computer # " + (global.totalNumberOfComputers +1) + ": " + col1Row1ValueOuter + " " + col1Row1ValueDate1 + " " + col1Row1ValueDate2 + " " + col1Row1ValueCompany);
                                   if (col1Row1ValueOuter == "ACE4") {
                                        console.log("delete existing ACE4 computer");
                                        sleep(3000);
                                        // select filtered computer by link
                                        sleep(1000);
                                        await editPage.ACE4Link.click();
                                        sleep(1000);

                                        // delete the computer
                                        await editPage.deleteThisComputerButton.click();
                                        await browser.sleep(1000);
                                   }
                                   global.totalNumberOfComputers++;
                                   // console.log("global.totalNumberOfComputers" + global.totalNumberOfComputers);
                                   // await browser.sleep(1000);
                              }
                         } catch (error) {
                              // console.log("The error " + error);
                              console.log("The total number of computers " + global.totalNumberOfComputers);
                         }
                         await mainPage.nextPaginationLink.click();
                    };
                    expect(cancelAction).to.not.equal(false);
               };

          } catch (error) {
               // console.log("\nthe error " + error + " acceptable error");
          }

          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("cancel", "ACE4", "2020-02-01", "2020-02-02", "RCA");
          await browser.sleep(1000);
          // /html[1]/body[1]/section[1]/table[1]/tbody[1]/tr[1]/td[1]
          for (var i = 1; i < global.countNumberOfComputers; i++) {

               var myXpathBefore = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
               var myXpathAfter = "]/td[1]";
               var cancelAction = true;
               var count = 0;
               sleep(1000);
               if (i == 1 || i % 10 == 0) {
                    //console.log("\nPROCESSING - verifying Canel button and computer not in DB ...");
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
               expect(cancelAction).to.equal(true);
          };
     });
     it('verifies total number of computer displayed in computers found text', async () => {
          expect(global.countNumberOfComputers).to.equal(global.totalNumberOfComputers);
     });
     it('verifies computer added to DB and shown in table', async (Done) => {
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "AAA", "2020-02-01", "2020-02-02", "RCA");
          await browser.sleep(1000);
          // /html[1]/body[1]/section[1]/table[1]/tbody[1]/tr[1]/td[1]
          const col1Row1Value = await element(by.xpath("/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr[1]/td[1]")).getText();
          // console.log("the col1Row1Value " + col1Row1Value);
          // NOT REQUIRED - PROMISE RESOLVED !

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

          global.addAction = false;
          // console.log("\nPROCESSING - verifying computer B and shown in table ...");
          for (var i = 1; i < global.countNumberOfComputers; i++) {
               var myXpathBefore = "/html[1]/body[1]/section[1]/table[1]/tbody[1]/tr["
               var myXpathAfter = "]/td[1]";
               var count = 0;
               sleep(1000);
               if (i == 1 || i % 10 == 0) {
                    //console.log("\nPROCESSING - verifying computer added to DB and shown in table ...");
                    if (i > 11) {
                         await mainPage.nextPaginationLink.click();
                    }
                    for (var j = 1; j < 11; j++) {
                         sleep(1000);
                         var col1Row1ValueOuter = await element(by.xpath(myXpathBefore + j + myXpathAfter)).getText();
                         // console.log("the computer name in the j loop " + col1Row1ValueOuter);
                         if (col1Row1ValueOuter == "AAA") {
                              sleep(500);
                              // console.log("Computer AAA added to DB");
                              global.addAction = true;
                              // console.log("global.addAction " + global.addAction);
                              break;
                         }
                    }
               };
          };
          //console.log("global.addAction " + global.addAction);
          expect(global.addAction).to.equal(true);

          // CLEAN UP ADDED COMPUTERS
          try {
               for (var i = 1; i < 11; i++) {
                    await mainPage.pageTitle.click();
                    await browser.sleep(1000);
                    //console.log("delete added computers");
                    await editPage.aaaLink.click();
                    await browser.sleep(1000);
                    await editPage.deleteThisComputerButton.click();
                    //console.log("delete added computers");
               }
          } catch (error) {
               //console.log("NO MORE NEWLY ADDED COMPUTERS IN DB => " + error + "expected error condition");
          }

          Done();
     });
     it('verifies computer added to database - without Introduced, Discontinued and Company fields and deleted info message', async () => {
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "ACE3");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          expect(addedComputerMessage).to.contain("Done! Computer ACE3 has been created");
     });
     it('verifies computer added to database - without Discontinued and Company fields', async () => {
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          // console.log("the addedComputerMessage " + addedComputerMessage);
          expect(addedComputerMessage).to.contain("Done!");
     });
     it('verifies computer added to database - without Company field', async () => {
          await browser.sleep(1000);
          await mainPage.addComputerButton.click();
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01", "2020-02-02");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          //console.log("the addedComputerMessage " + addedComputerMessage);
          expect(addedComputerMessage).to.contain("Done!");
     });
     it('verifies computer added to database - all fields', async () => {       // TODO REDUNDENT TEST - CAN BE REMOVED

          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add", "ACE3", "2020-02-01", "2020-02-02", "RCA");
          await browser.sleep(1000);
          var addedComputerMessage = await mainPage.warningMessageText.getText();
          // console.log("the addedComputerMessage " + addedComputerMessage);
          expect(addedComputerMessage).to.contain("Done!");
     });

     it('verifies required Name field', async () => {       // TODO REDUNDENT TEST - CAN BE REMOVED
          // TODO VERIFY REQUIRED NAME FIELD
          // CALL FUNCTION WITHOUT NAME
          await mainPage.addComputerButton.click();
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add");
          await browser.sleep(3000);
          // VERIFY ERROR MESSAGE
          const requiredText = await editPage.requiredText.getText();
          // console.log("the requiredText " + requiredText);              // BUG - DATA AND ERROR MESSAGES ARE NOT VISABLE ONCE AN ERROR MESSAGE HAS BEEN TRIGGERED
          expect(requiredText).to.contain("Required");                     // THJS MAY BE PROTRACTOR - NON ANGULAR APP ISSUE
     });
     it('verifies Introduced date format', async () => {       // TODO REDUNDENT TEST - CAN BE REMOVED
          // TODO VERIFY REQUIRED NAME FIELD
          // CALL FUNCTION WITHOUT NAME
          await mainPage.addComputerButton.click("add", "ACE3", "02-2020-01");
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add");
          await browser.sleep(3000);
          // VERIFY ERROR MESSAGE
          const introducedDateFormatText = await editPage.introducedDateFormatText.getText();
          // console.log("the introducedDateFormatText " + introducedDateFormatText);
          expect(introducedDateFormatText).to.contain("Date ('yyyy-MM-dd')");
     });
     it('verifies Discontinued date format', async () => {       // TODO REDUNDENT TEST - CAN BE REMOVED
          // TODO VERIFY REQUIRED NAME FIELD
          // CALL FUNCTION WITHOUT NAME
          await mainPage.addComputerButton.click("add", "ACE3", "2020-02-02", "02-2020-01");
          await browser.sleep(1000);
          await editPage.addComputerAddOrCancel("add");
          await browser.sleep(3000);
          // VERIFY ERROR MESSAGE
          const discontinuedDateFormatText = await editPage.discontinuedDateFormatText.getText();
          // console.log("the discontinuedDateFormatText " + discontinuedDateFormatText);
          expect(discontinuedDateFormatText).to.contain("Date ('yyyy-MM-dd')");
     });
     it('deletes computers added during testing', async () => {
          // CLEAN UP ADDED COMPUTERS
          try {
               for (var i = 1; i < 11; i++) {               // ONLY 10 ROWS PER PAGE - USE 11 FOR INDEX
                    await mainPage.pageTitle.click();
                    await browser.sleep(1000);
                    //console.log("delete added computers");
                    await editPage.ACE3Link.click();
                    await browser.sleep(1000);
                    await editPage.deleteThisComputerButton.click();
                    //console.log("delete added computers");
               }
          } catch (error) {
               // console.log("NO MORE NEWLY ADDED COMPUTERS IN DB => " + error + "expected error condition");
          }
     });

});