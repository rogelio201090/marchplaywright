// import {test, expect} from '@playwright/test';

// test.describe("Test Suite", () => {
//     test.beforeAll(async () => {
//         console.log("Before all tests");
//     });

//     test.beforeEach(async () => {
//         console.log("Before each test");
//     });

//     test.afterEach(async () => {
//         console.log("After each test");
//     });

//     test.afterAll(async () => {
//         console.log("After all tests");
//     });

//     test("Test Case 1", async ({ page }) => {
//         console.log("Executing Test Case 1");
//         await page.goto('https://example.com');
//         await expect(page).toHaveTitle(/Example Domain/);
//     });

//     test("Test Case 2", async ({ page }) => {
//         console.log("Executing Test Case 2");
//         await page.goto('https://example.com');
//         await expect(page.locator('h1')).toHaveText('Example Domain');
//     });

//     test("Test Case 3", async ({ page }) => {
//         console.log("Executing Test Case 3");
//         await page.goto('https://example.com');
//         await expect(page.locator('p')).toContainText('This domain is for use in illustrative examples in documents.');
//     });
// });         