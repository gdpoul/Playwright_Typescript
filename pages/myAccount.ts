import { Page } from "@playwright/test";

export default class MyAccountPage{

    constructor(public page: Page){

    }
    async clickOnHomeMenu(){
        await this.page.click("//span[normalize-space()='Home']");
    }
}