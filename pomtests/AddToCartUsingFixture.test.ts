import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/addTocart-test-data.json"


    // test.use({
    //     browserName: "firefox"
    // })
test.describe("SmokeTest",async()=>{

    test("Register test_01",async({page, baseURL, registerPage})=>{

        // const register=new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.fistname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone("123654789");
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
    
        await registerPage.clickTermsAndCondition();
        await registerPage.clickOnContinueToRegister();
    
       const heading= await page.locator("//h1[text()=' Your Account Has Been Created!']").textContent();
       expect(heading).toEqual(" Your Account Has Been Created!");
        
    })
    
    test("Login test_02",async({page,baseURL,loginPage})=>{
    
        // const login=new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email,data.password);
        expect(await page.title()).toBe("My Account");
    })
    
})