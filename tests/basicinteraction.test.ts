import {expect, test} from "@playwright/test";

test("test user input field",async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const messgaeInput=page.locator("input#user-message");
    await messgaeInput.scrollIntoViewIfNeeded();
    expect(messgaeInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log("before Entering data : "+await messgaeInput.inputValue());
    await messgaeInput.type("Hi I'm Ganesh");
    console.log("After Entering data : "+await messgaeInput.inputValue());
})

test("sum test", async ({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

   const a=page.locator("#sum1");
   const b=page.locator("#sum2");
   const getValueBtn=page.locator("//button[text()='Get values']");
   const result= page.locator("#addmessage");

   let n1=122;
   let n2=234;
   let expextedResult=n1+n2;

   await a.fill(""+n1);
   await b.fill(""+n2);
   await getValueBtn.click();
   await page.waitForLoadState("load")
   console.log("Result is: "+await result.textContent());
   expect(result).toHaveText(""+expextedResult);
 
})

test("checkbox",async ({page}) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckBox=page.locator("id=isAgeSelected");
    expect(singleCheckBox).not.toBeChecked();
    await singleCheckBox.check();
    expect(singleCheckBox).toBeChecked();
})