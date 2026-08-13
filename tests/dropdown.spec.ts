import {test, expect} from "@playwright/test"

test("Verify the title of the page",async ({page}) => {
   await page.goto('file:///C:/Users/Lenovo/Desktop/demoone.html');
   await page.locator("#country").selectOption({"value":"4"});
   await page.waitForTimeout(2000);
   await page.locator("#country").selectOption({"label":"Australia"});
   await page.waitForTimeout(2000);
   await page.locator("#country").selectOption({"index": 4});
   await page.waitForTimeout(2000);
   await page.locator("#Citizen").selectOption({"value":"4"});
   await page.waitForTimeout(2000);
   await page.locator("#Citizen").selectOption({"value":"4"});
   await page.waitForTimeout(2000);
   await page.locator("#Citizen").selectOption({"value":"4"});
   await page.waitForTimeout(2000);
   await page.locator("#Citizen").selectOption({"value":"4"});
   await page.waitForTimeout(2000);
   
});