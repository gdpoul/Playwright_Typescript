import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page){

    }
    async enterEmail(emailAddress: string){
        await this.page.locator("#input-email")
        .type(emailAddress);
    }
    async enterPassword(password: string){
        await this.page.locator("#input-password")
        .type(password);
    }
    async clickOnLoginBtn(){
        await this.page.click("//input[@type='submit']");
    }

    async login(email:string, password:string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickOnLoginBtn();
    
    }

}
