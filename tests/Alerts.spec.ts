import {test, expect} from "@playwright/test"

// test("alert handling",async ({page}) => {
//    await page.goto('https://demo.automationtesting.in/Alerts.html');
//    await page.locator(".btn.btn-danger").click();
//    await page.waitForTimeout(2000);
//    await page.getByText("Alert with Ok & Cancel").click();
//    await page.locator(".btn.btn-primary").click();
//    await page.waitForTimeout(2000);
//    await page.getByText("Alert with Textbox").click();
//    await page.locator(".btn.btn-info").click();
//    await page.waitForTimeout(2000);
// });

// test("alert handling",async ({page}) => {
//    await page.goto('https://demo.automationtesting.in/Alerts.html');
//    page.on("dialog",async(dialog) => {
//     console.log(dialog.message());
//     await page.waitForTimeout(2000);
//     //await dialog.accept();
//     await dialog.dismiss();
//    });
//    await page.locator(".btn.btn-danger").click();
//    await page.waitForTimeout(2000);
//    await page.getByText("Alert with Ok & Cancel").click();
//    await page.locator(".btn.btn-primary").click();
//    await page.waitForTimeout(2000);
//    await page.getByText("Alert with Textbox").click();
//    await page.locator(".btn.btn-info").click();
//    await page.waitForTimeout(2000);
// });

// test("Test Window Handling", async ({page})=>{
//    await page.goto('https://vinothqaacademy.com/multiple-windows/')
// });