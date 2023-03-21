import{chromium, expect, test} from "@playwright/test"


test('test nivoda', async () =>{

    const browser=await chromium.launch({headless:false});    
    const context=await browser.newContext(); 

    // Loign to Admin
    const page1=await context.newPage();   
    await page1.goto("https://website-alpha.nivodaapi.net/");
    await page1.fill("input[name='email']","ubaid@nivoda.net");
    await page1.fill("input[name='password']","Nivoda123");
    await page1.click("button[type='submit']");
    const url1= page1.url();
    console.log("admin login url :"+page1.url());
    await expect(page1).toHaveURL("https://website-alpha.nivodaapi.net/admin/orders/purchase-order");
    await page1.waitForTimeout(5000);

    // Login to Customer
    const page2=await context.newPage();
    await page2.goto("https://website-alpha.nivodaapi.net/");
    await page2.fill("input[name='email']","nikolay@taylorandhart.com");
    await page2.fill("input[name='password']","Nivoda123");
    await page2.click("button[type='submit']");
    console.log("Customr login url :"+page2.url());
    await page2.waitForTimeout(6000);
    
    // // logout to customer
    // await page2.click("div[class='profile_picture_ring ']");
    // await page2.click("text=Logout");

    // Logout Admin
    // await page1.hover("div[class='sc-gLdKKF dnLxUZ']");
    await page1.click("//div[text()='Logout']");
    await page1.waitForTimeout(5000);
})