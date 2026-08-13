import {test, expect} from "@playwright/test"

test("Assertions",async ({page}) => {
   await page.goto('file:///C:/Users/Lenovo/Desktop/demoone.html');
   await expect(page.getByText("Username")).toBeVisible();
   await expect(page.getByText("Usernameonetre")).toBeHidden();
   await page.locator("#sddas").click();
   await expect(page.locator("#sddas")).toBeChecked();
   await page.locator("#sddas").uncheck();
   await expect(page.locator("#sddas")).not.toBeChecked();
   await expect(page.locator("#sddas")).toContainText("Open the terms");
   await expect(page.locator("#sddas")).toHaveText("Open the terms and Conditions");
   await expect(page.locator("#sddas")).toHaveValue("12");
   await expect(page.getByText("Username")).toHaveAttribute("href","file:///C:/Users/Lenovo/Desktop/demoone.html");
   await expect(page).toHaveURL("file:///C:/Users/Lenovo/Desktop/demoone.html");
   await expect(page).toHaveTitle(" ");
   await expect(page.getByText("Username")).toBeVisible();
   const e = null
   const title = await page.title();
   expect (e).toBeNull();
   expect(title).toBe("");
   expect(2+2).toBe(4);

});