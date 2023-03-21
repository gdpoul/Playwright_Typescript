import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import MyAccountPage from "../pages/myAccount";
import myAccountPage from "../pages/myAccount";
import HomePage from "../pages/homePage";

const email = "gdp@gmail.com";
const password = "Pass123$";

test.describe("SmokeTest",async()=>{
    test("Register test_01",async({page, baseURL})=>{

        const register=new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Ganesh");
        await register.enterLastName("Poul");
        await register.enterEmail(email);
        await register.enterTelephone("123654789");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
    
        await register.clickTermsAndCondition();
        await register.clickOnContinueToRegister();
    
       const heading= await page.locator("//h1[text()=' Your Account Has Been Created!']").textContent();
       expect(heading).toEqual(" Your Account Has Been Created!");
        
    })
    
    test("Login test_02",async({page,baseURL})=>{
    
        const login=new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email,password);
        expect(await page.title()).toBe("My Account");
    })
    
})

// test("Add To Cart test_03",async({page,baseURL})=>{
//     const login=new LoginPage(page);
//     const accountPage=new MyAccountPage(page);
//     const homePage=new HomePage(page);
//     await page.goto(`${baseURL}route=account/login`);
//     await login.login(email,password);
//     accountPage.clickOnHomeMenu();
//     homePage.addFirstTopProductToCart();
//     expect(await homePage.isProductAddedtoCart()).toBeTruthy();
// })