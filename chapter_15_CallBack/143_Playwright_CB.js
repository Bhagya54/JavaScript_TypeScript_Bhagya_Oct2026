test('Get Title', () => {
    console.log("hello")
})

//playwright people has created this function - which is hidden from us
function test(title, callme) {
    console.log("Title is: " + title)
    callme();
}



import { test, expect } from '@playwright/test';

//we are calling it by passing 2 arguments - testName, arrow Fn(acting as a callback fn).
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
