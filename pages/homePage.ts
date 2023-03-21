import { expect, Page } from "@playwright/test";


export default class HomePage{

    constructor(public page: Page){

    }
    async addFirstTopProductToCart(){
        await this.page.hover("(//img[@title='iMac'])[1]");
        await this.page.locator("(//i[@class='fas fa-shopping-cart'])[1]").click();
        const successMessage= await this.page.locator("//p[contains(text(),'Success: You have added')]").allTextContents(); 
    }
    async isProductAddedtoCart(){
        // click on Cart Icon
        await this.page.click("(//div[@class='cart-icon'])[1]");
        //click on 
        await this.page.click("//a[contains(.,'Edit cart')]");
        const status=await this.page.locator("//table[@class='table table-bordered']").isVisible();
        return status;          
    }

}