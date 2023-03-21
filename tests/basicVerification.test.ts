import { expect, test } from "@playwright/test";

test("Basic UI verification", async ({ page }) => {

    // isDisabled()?
    await page.goto("https://letcode.in/edit");
    expect(await page.locator("")).toBeDisabled();
    // expect(await page.isDisabled("#noEdit")).toBe(false);

    // isEditable()?
    const edit = await page.isEditable("#dontwrite");
    console.log("is edit? " + edit);
    expect(edit).not.toBe(true);


    // isEnabled()?
    await page.goto("https://letcode.in/buttons");
    const ele = await page.$("#isDisabled");
    await expect(await page.locator("")).toBeEnabled();
    console.log(await ele?.isEnabled());

    // isHidden()?
    // isVisible()?

    // const status=await ele?.isVisible();
    // expect(await ele?.isVisible()).toBeTruthy();
    expect(await page.locator("").isVisible()).toBeTruthy();


    // checkbox/radio check/uncheck
    // checkbox/radio isChecked?

    expect(await page.locator("").isChecked()).toBeFalsy();
    await page.goto("https://letcode.in/radio");
    await page.waitForSelector("input:below(:text('Find if the checkbox is selected?'))")
    const checkBox = await page.$("input:below(:text('Find if the checkbox is selected?'))")
    if (checkBox) {
        expect(await checkBox.isChecked()).toBe(true);
        await checkBox.uncheck();
    }
    else { throw new Error("Elementnd"); }
})

test("color", async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    const btn = page.locator("#home");
    const color = await btn.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("background-color")
    });
    console.log(color);
    expect(color).toBe("rgb(250, 124, 145)");


})