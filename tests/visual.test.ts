import{expect, test} from "@playwright/test";

test("Visual Comparison",async ({page}) => {

    await page.goto("https://website-beta.nivodaapi.net/");
    expect(await page.screenshot()).toMatchSnapshot('NivodaLogin.png');
})