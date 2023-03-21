import { chromium, test } from '@playwright/test';

test("Login", async ({page})=>{

   // const browser = await chromium.launch();
   // const context = await browser.newContext();
   // const page =await context.newPage();
    await page.goto("https://bright-churros-b09fa2.netlify.app/#/pages/login");
   await page.fill("input#mail","admin");
   await page.fill("input#pw","admin");
   await page.click("//button[text()='Get Started']");
   await page.waitForTimeout(10000);
})