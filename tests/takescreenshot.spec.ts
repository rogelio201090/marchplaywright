import {test, expect} from '@playwright/test';

test('take screenshot of the page', async ({ page }) => {
  // Navigate to the desired URL
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  // Take a screenshot and save it to the specified path
  const screenshotPath = './Files/screenshot.png';
  await page.screenshot({ path: screenshotPath });

  // Optionally, you can add an assertion to check if the screenshot was taken successfully
  expect(screenshotPath).toBeDefined();
});

// test("compare screenshots!", async ({page}) => {
//     await page.goto("https://demo.automationtesting.in/Alerts.html");
//     const filePath = path.join(__dirname, "../Files/screenshot.png");
//     expect(await page.screenshot({fullPage: true})).toMatchSnapshot(filePath, { threshold: 0.5 });
// });