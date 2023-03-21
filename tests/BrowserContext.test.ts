import{chromium, test} from "@playwright/test"

test("Launch Browser",async () => {
    
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext(); 
    const page=await context.newPage();   

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    await page.click("text=Login");
    await page.fill("input[name='email']","koushik350@gmail.com");
    await page.fill("input[name='password']","Pass123$");
    await page.click("input[value='Login']"); 
    
    await page.waitForTimeout(5000);

    const context1=await browser.newContext();
    const page2=await context1.newPage();
    page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/edit");
    await page2.waitForTimeout(5000);
})