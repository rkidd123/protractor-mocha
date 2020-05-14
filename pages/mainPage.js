// page is non-angular
browser.ignoreSynchronization = true;
import basePage from './basePage';

class mainPage extends basePage {
    constructor() {
        super();
        this.pageTitle = element(by.xpath("//a[contains(text(),'Play sample application')]"));
        this.computerNameLink = element(by.xpath("//a[contains(text(),'Computer name')]"));
        this.aceComputerLink = element(by.xpath("//a[contains(text(),'ACE')]"));
        this.numberOfComputersFoundText = element(by.xpath("/html[1]/body[1]/section[1]/h1[1]"));
        this.addComputerButton = element(by.xpath("//a[@id='add']"));
        this.searchTextBox = element(by.xpath("//input[@id='searchbox']"));
        this.filterByNameButtom = element(by.xpath("//input[@id='searchsubmit']"));
        this.warningMessageText = element(by.className("alert-message warning"));
        this.introducedLink = element(by.xpath("//a[contains(text(),'Introduced')]"));
        
        this.discontinuedLink = element(by.xpath("//a[contains(text(),'Discontinued')]"));
        this.companyLink = element(by.xpath("//a[contains(text(),'Company')]"));
        this.paginationDisplay = element(by.css("section:nth-child(2) div.pagination:nth-child(4) ul:nth-child(1) li.current > a:nth-child(1)"));
        this.nextPaginationLink = element(by.xpath("//a[contains(text(),'Next')]"));
        this.previousPaginationLink = element(by.xpath("//a[contains(text(),'Previous')]"));

        // get computer's by link name
        // get computer's by position in array

    }

    // functions here
}
export default new mainPage();