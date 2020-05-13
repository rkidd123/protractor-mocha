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
        this.ace2Link = element(by.xpath("//a[contains(text(),'ace2')]")); 
        this.deleteThisComputerButton = element(by.xpath("//input[@class='btn danger']")); 
        this.cancelButton = element(by.xpath("//a[@class='btn']"));  //BUG WHEN USING CLASSNAME

    }

    async selectOptions(select, optionName){
        //await this.waitUntilClickable(select);
        await select.click();
        const option = select.element(by.cssContainingText('option', new RegExp(`^${optionName}$`)));
        //await this.waitUntilClickable(option);
        await option.click();
    }

    async selectCompany(value){
        await this.selectOptions(this.compnayDropDown, value)
    }

    async addComputer(){
        await this.computerNameTextBox.clear();
        await this.computerNameTextBox.sendKeys("ace2");
        await browser.sleep(1000);
        await this.introducedTextBox.clear();
        await this.introducedTextBox.sendKeys("2020-05-11");
        await browser.sleep(1000);
        await this.discontinuedTextBox.clear();
        await this.discontinuedTextBox.sendKeys("2020-05-11");
        await browser.sleep(1000);
        await this.selectCompany("RCA");
        await browser.sleep(1000);
        await this.createThisComputerButton.click();
    }
}
export default new editPage();