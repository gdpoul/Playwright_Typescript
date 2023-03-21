import { Page } from "@playwright/test";

export default class RegisterPage{

    constructor(public page: Page){

    }
    async enterFirstName(firstname: string){
        await this.page.locator("#input-firstname")
        .type(firstname);
    }
    async enterLastName(lastname: string){
        await this.page.locator("#input-lastname")
        .type(lastname);
    }
    async enterEmail(email: string){
        await this.page.locator("#input-email")
        .type(email);
    }
    async enterTelephone(phone: string){
        await this.page.locator("#input-telephone")
        .type(phone);
    }
    async enterPassword(password: string){
        await this.page.locator("#input-password")
        .type(password);
    }
    async enterConfirmPassword(password: string){
        await this.page.locator("#input-confirm")
        .type(password);
    }

    async isSubscribeChecked(){
      return this.page.locator("#input-newsletter-no");
    }

    async clickTermsAndCondition(){
        await this.page.click("label[for='input-agree']");
    }

    async clickOnContinueToRegister(){
    
        await this.page.click("//input[@type='submit']");
    }
}
