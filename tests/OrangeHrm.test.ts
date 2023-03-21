import {test,  expect } from "@playwright/test";


test.describe.configure({ mode: 'serial' });
test.describe("Login Page Test",()=>{

    test.beforeEach( async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/");
        await page.waitForLoadState("load",{timeout:5000});
    })

    test("TC001", async({page})=>{
        const actualTitle=await page.title();
        expect(actualTitle).toBe("OrangeHRM");
    })

    test("TC002", async({page})=>{
        const actualUrl= await page.url(); 
        const expectedUrl="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";  
        expect(actualUrl).toBe(expectedUrl);  
    })

    test("TC003", async({page}) => {
        const loginHeading= await page.locator("//h5");
        await page.waitForLoadState("domcontentloaded",{timeout:5000});
        expect(loginHeading).toContainText("Login")     
    })

    test("TC004", async({page})=>{
        await page.fill("//input[@placeholder='Username']","Admin");
        await page.fill("//input[@placeholder='Password']","admin123");
        await page.click("button[type='submit']");
        await page.waitForLoadState("load");
        expect(page.locator("//h6[text()='Dashboard']")).toContainText("Dashboard");
    })
})