import {expect, test} from "@playwright/test";

test("test user input field",async ({page})=>{

    await page.goto("http://zero.webappsecurity.com/")

    // CSS -class
    await page.click('button.signin.btn.btn-info')

    // CSS- id
    await page.check('#user_remember_me')
    
    // text
    await page.click('text=Forgot your password ?');
})