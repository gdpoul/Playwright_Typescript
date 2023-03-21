import { BrowserContext, expect, Page, test } from "@playwright/test";
import CommonFunctions from "../pom/letcodemodules/credentials/common.page";
import HeaderPage from "../pom/letcodemodules/credentials/Header.page";
import LoginPage from "../pom/letcodemodules/credentials/Login.page";

test.describe("TC001", () => {
    let header: HeaderPage;
    let login: LoginPage;
    let common: CommonFunctions;
    let page: Page;
    let context: BrowserContext;
    
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        // await context.tracing.start({
        //     screenshots: false,
        //     snapshots: true,

        // })
        page = await context.newPage();
        header = new HeaderPage(page,undefined);
        login = new LoginPage(page);
        common = new CommonFunctions(page);
    })

    test.afterAll(async () => {
    //     await context.tracing.stop({
    //         path: "trace_TC001.zip"
    //     });
    })
    test.beforeEach(async () => {
        await page.goto("https://letcode.in")
    })

    test("Login positive", async () => {
        expect(page.url()).toBe("https://letcode.in/")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName("koushik1@letcode.in");
        await login.enterUserPassword("Pass123$");
        await login.clickLoginBtn();
        const toaster = await common.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await header.clickSignOutLink();
    });
    test("Login again", async () => {
        await header.clickLoginLink();
        await login.login("koushik350@gmail.com", "Pass123$");
        await page.waitForNavigation();
        expect(page.url()).toBe("https://letcode.in/")
    })
})