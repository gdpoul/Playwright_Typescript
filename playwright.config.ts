import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig={
  testMatch:["D:/Playwright_Typescript/tests/OrangeHrm.test.ts"],
  // grep: [new RegExp("@smoke")]
  // testDir:"./tests",
  timeout: 60000,
  retries:0,

  globalSetup: './helper/global-setup.ts',
  globalTeardown: './helper/global-teardown.ts',
  use:   
  {
    browserName:"chromium",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace:"retain-on-failure",
    launchOptions:
    {    
      args:['--allow-running-insecure-content']
    }
  },

  reporter: 
  [
    ["list"],["json",{outputFile:"test-result.json"}],[`allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }]
  ],

  // projects: [
  //   {
  //     name: `Chromium`,
  //     use: { 
  //       browserName:'chromium' ,
  //       headless: false,
  //       screenshot:"only-on-failure",
  //       video:"retain-on-failure",
  //       trace:"retain-on-failure",
  //     }    
  //   },
  //   {
  //     name: 'Firefox',
  //     use: { 
  //       browserName:'firefox',
  //       headless: false,
  //       // screenshot:"only-on-failure",
  //       // video:"retain-on-failure",
  //       // trace:"retain-on-failure",
  //        }
  //   },
  //   {
  //     name: 'Webkit',
  //     use: { 
  //       browserName:'webkit',
  //       headless: false,
  //       screenshot:"only-on-failure",
  //       video:"retain-on-failure",
  //       trace:"retain-on-failure"
  //     }
  //   },
  //   {
  //     name: `Chrome`,
  //     use: {
  //       browserName: `chromium`,
  //       channel: `chrome`,
  //       headless: false,
  //       viewport: { width: 1500, height: 730 },
  //       ignoreHTTPSErrors: true,
  //       acceptDownloads: true,
  //       screenshot: `only-on-failure`,
  //       video: `retain-on-failure`,
  //       trace: `retain-on-failure`,
  //       launchOptions: {
  //         slowMo: 0
  //       }
  //     }
  //   },
  //   {
  //     name: `Edge`,
  //     use: {
  //       browserName: `chromium`,
  //       channel: `msedge`,
  //       headless: false,
  //       viewport: { width: 1500, height: 730 },
  //       ignoreHTTPSErrors: true,
  //       acceptDownloads: true,
  //       screenshot: `only-on-failure`,
  //       video: `retain-on-failure`,
  //       trace: `retain-on-failure`,
  //       launchOptions: {
  //         slowMo: 0
  //       }
  //     },
  //   }
  // ]
};
export default config;