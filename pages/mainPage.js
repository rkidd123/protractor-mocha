// page is non-angular
browser.ignoreSynchronization = true;
import basePage from './basePage';

class mainPage extends basePage {
    constructor() {
        super();
        this.pageTitle = element(by.xpath("//a[contains(text(),'Play sample application')]"));
        this.computerNameLink = element(by.xpath("//a[contains(text(),'Computer name')]"));
        this.aceComputerLink = element(by.xpath("//a[contains(text(),'ACE')]"));

        // get computer's by link name
        // get computer's by position in array

    }

    // functions here
}
export default new mainPage();