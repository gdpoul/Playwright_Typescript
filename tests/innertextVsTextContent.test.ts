import {test } from "@playwright/test";

test("InnerText Vs TextContent", async({page}, testInfo)=>{

    await page.goto("https://venerable-torrone-a2ee7e.netlify.app/");
    const logiBtn= page.locator("a#openLogin");
    const registerBtn= page.locator("a#openRegister");

    console.log(await logiBtn.innerHTML());
    console.log(await logiBtn.innerText());
    console.log(await logiBtn.textContent());
    
})