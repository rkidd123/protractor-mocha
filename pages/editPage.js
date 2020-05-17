/**
 * Represents the add and edit pages.
 * @constructor
 */

// page is non-angular
browser.ignoreSynchronization = true;
import basePage from './basePage';

class editPage extends basePage {
    constructor() {
        super();
        this.computerNameTextBox = element(by.xpath("//input[@id='name']"));
        this.introducedTextBox = element(by.xpath("//input[@id='introduced']"));
        this.discontinuedTextBox = element(by.xpath("//input[@id='discontinued']"));
        this.compnayDropDown = element(by.xpath("//select[@id='company']"));
        this.createThisComputerButton = element(by.xpath("//input[@class='btn primary']"));
        this.ARRALink = element(by.xpath("//a[contains(text(),'ARRA')]"));
        
        this.aaaLink = element(by.linkText("AAA"));
        this.ARRALink = element(by.linkText("ARRA"));
        this.ace2Link = element(by.linkText("ace2"));
        this.ACE3Link = element(by.linkText("ACE3"));
        this.deleteThisComputerButton = element(by.xpath("//input[@class='btn danger']"));
        this.cancelButton = element(by.xpath("//a[@class='btn']"));  //BUG WHEN USING CLASSNAME

        this.addComputerText = element(by.xpath("//h1[contains(text(),'Add a computer')]"));
        this.computerNameText = element(by.xpath("//label[contains(text(),'Computer name')]"));
        this.introducedDateText = element(by.xpath("//label[contains(text(),'Introduced date')]"));
        this.discontinuedDateText = element(by.xpath("//label[contains(text(),'Discontinued date')]"));
        this.companyText = element(by.xpath("//label[contains(text(),'Company')]"));

        this.editPageText = element(by.xpath("//h1[contains(text(),'Edit computer')]"));
    }

    async selectOptions(select, optionName) {
        //await this.waitUntilClickable(select);    // NOT SUPPORTED BY NON ANGULAR APP
        await select.click();
        const option = select.element(by.cssContainingText('option', new RegExp(`^${optionName}$`)));
        //await this.waitUntilClickable(option);    // NOT SUPPORTED BY NON ANGULAR APP
        await option.click();
    }

    async selectCompany(value) {
        await this.selectOptions(this.compnayDropDown, value)
    }

    async addComputerAddOrCancel(operation, name, date1, date2, company) {
        if (name === undefined) {
            name = "";
        }
        if (date1 === undefined) {
            date1 = "";
        }
        if (date2 === undefined) {
            date2 = "";
        }

        await browser.get('http://computer-database.herokuapp.com/computers/new');
        await this.computerNameTextBox.clear();
        await this.computerNameTextBox.sendKeys(name);
        await browser.sleep(1000);
        await this.introducedTextBox.clear();
        await this.introducedTextBox.sendKeys(date1);
        await browser.sleep(1000);
        await this.discontinuedTextBox.clear();
        await this.discontinuedTextBox.sendKeys(date2);
        await browser.sleep(1000);
        if (company === undefined) {
            //console.log("no company selection")
        }
        else {
            //console.log("company selection")
            await this.selectCompany(company);
        }
        await browser.sleep(1000);
        if (operation == "add") {
            await this.createThisComputerButton.click();
        }
        else {
            await this.cancelButton.click();
        }
    }
}
export default new editPage();