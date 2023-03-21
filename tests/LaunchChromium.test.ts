import{chromium, test} from "@playwright/test"

test("Launch Browser",async () => {
    
    // launch chromium browser
    const browser=await chromium.launch({headless:false});

    // create browser context    
    const context=await browser.newContext(); 

    //  open new tab
    const page=await context.newPage();   

    //  open the url
    await page.goto("https://www.playwright.dev/");


})