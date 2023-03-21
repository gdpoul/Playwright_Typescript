import{chromium, test} from "@playwright/test";

test("Launch Browser",async ({page}) => {
    
    // const browser=await chromium.launch({headless:false});
    // const context=await browser.newContext(); 
    // const page=await context.newPage();   

    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.fill("input[placeholder='Username']","Admin");
    await page.fill("input[placeholder='Password']","admin123");
    await page.click("text=Login");
    // await page.click("'Login'");
       
})