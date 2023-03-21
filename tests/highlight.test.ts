import {test } from "@playwright/test";

test("HighLight Elements", async({page}, testInfo)=>{

    await page.goto("https://venerable-torrone-a2ee7e.netlify.app/");
    const logiBtn= page.locator("a#openLogin");
    const registerBtn= page.locator("a#openRegister");

    const screenshot=await page.screenshot({
        path:"./screenshots/scr1.png",
        mask:[logiBtn,registerBtn]
    });

    await testInfo.attach("Highlighted Screenshots",{
        body:screenshot,
        contentType:"image/png"
    });



})