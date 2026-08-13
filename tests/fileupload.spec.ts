import {test, expect} from "@playwright/test"
import path from "path";

test("File Upload", async ({page}) => {
    await page.goto("https://demoqa.com/upload-download");
    const filePath = path.join(__dirname, "../Files/TestQA.docx");
    console.log(filePath);
    await page.locator("#uploadFile").setInputFiles(filePath);
    await page.waitForTimeout(3000);

});

test("File Upload two without html tag input and type attribute file", async ({page}) => {
    await page.goto("https://demoqa.com/upload-download");
    const filePath = path.join(__dirname, "../Files/TestQA.docx");
    const filePath2 = path.join(__dirname, "../Files/TestQA.docx");
    const filechooserPromise = page.waitForEvent("filechooser");
    await page.locator("#uploadFile").click();
    const filechooserEvent = await filechooserPromise;
    await filechooserEvent.setFiles(filePath,filePath2);
    await page.waitForTimeout(3000);

});