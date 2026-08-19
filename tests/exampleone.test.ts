// import {test, expect} from "@playwright/test"

// test("Verify the title of the pag", async ({page})=> {
//    await page.goto("https://www.saucedemo.com/");
//    await expect(page).toHaveTitle("Swag Labs"); 
// });

// test("Verify the title of the pag and the browser", async ({browser})=> {
//    const context = await browser.newContext();
//    const page = await context.newPage();
//     await page.goto("https://www.saucedemo.com/");
//     await expect(page).toHaveTitle("Swag Labs"); 
//     console.log("Title of the page is verified")
// });

// test("Verify the username input is visibl", async ({page})=> {
//    await page.goto("https://www.saucedemo.com/");
//    await expect(page.locator("//input[@data-test='username']")).toBeVisible();
//    // await expect(page.locator("//input[@class='input_error form_input' and @type='password']")).toBeVisible();
//    await expect(page.locator("#password")).toBeVisible();
//    await expect(page.getByRole("button",{name:"Login"})).toBeVisible();
//    await expect(page.getByText("This is heading")).toBeVisible();
//    await expect(page.getByLabel("ASWES")).toBeVisible();
//    await expect(page.getByPlaceholder("ASDyt")).toBeVisible();
//    await expect(page.getByAltText("grev")).toBeVisible();
//    await expect(page.getByTitle("title")).toBeVisible();
//    await expect(page.getByTestId("testid")).toBeVisible();
//    await expect(page).toHaveTitle("Swag Labs"); 
// });

// test("Verify the title of the pag", async ({page})=> {
//    await page.goto("https://demoqa.com/login");
//    // await page.locator("//input").nth(0).fill("Drew");
//    await page.locator("//input").first().fill("Drew");
//    // await page.locator("//input").last(0).fill("Drew");
//    await page.locator("//input").nth(1).pressSequentially("Drew");
//    await expect(page.locator("#login")).toBeVisible();
//    // await page.locator("#login").click();
//    await page.locator("#login").press("Enter");
// });

// test("Verify the title of the page",async ({page}) => {
//    await page.goto('file:///C:/Users/Lenovo/Desktop/demoone.html');
//    await page.locator("//input").nth(0).fill("Drew");
//    await page.locator("#sddas").click();
//    await page.locator("#sddas").click({force:true});
//    await expect(page.locator("#sddas")).toBeChecked();
//    await page.locator("#sddas").uncheck();
//       await expect(page.locator("#sddas")).not.toBeChecked();
//       await page.locator("#kjhgtg").click({force:true});
//    const text = await page.locator(".ewtei.hytghy").textContent();
//    console.log(text);
// });

// test("Mouse Operations",async ({page}) => {
//    await page.goto('https://vinothqaacademy.com/mouse-event/');
//    // Double-click
//    await page.locator("#doubleBtn").dblclick();
//    await page.waitForTimeout(2000);
//    // Right Button
//    await page.locator("#rightBtn").click({button: "right"});
//    await page.waitForTimeout(2000);
//    await page.locator("#rightBtn").click({button: "right"});
//    await page.waitForTimeout(2000);
//    //Drag to
//    const source = await page.locator("#dragItem");
//    const target = await page.locator("#dropZone");
//    await source.dragTo(target);
//    await page.waitForTimeout(2000);
//    //Hover
//    await page.locator("#tooltipTarget").hover();
//    await page.waitForTimeout(2000);

//    //Scroll to
//    await page.evaluate(() => {
//       window.scrollBy(0,500);
//       // window.scrollTo(0,document.body.scrollHeight);
//    });

//    //Slider
//    const tooltipText = await page.locator("#handle_max");
//    const slider = await tooltipText.boundingBox();

//    if (slider) {
//       const startx = slider.x+slider.width/2;
//       const starty = slider.y+slider.height/2;
//       await page.mouse.move(startx,starty);
//       await page.mouse.down();
//       await page.mouse.move(startx+100, starty);
//       await page.mouse.up();
//    }

// await page.waitForTimeout(2000);
// });