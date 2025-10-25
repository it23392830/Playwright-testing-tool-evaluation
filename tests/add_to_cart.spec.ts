import { test, expect } from '@playwright/test';


test('Add product to cart', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(1000);


await page.fill('#user-name', 'standard_user');
await page.waitForTimeout(800);


await page.fill('#password', 'secret_sauce');
await page.waitForTimeout(800);


await page.click('#login-button');
await page.waitForTimeout(1200);


await page.click('text=Add to cart');
await page.waitForTimeout(1000);


await page.click('.shopping_cart_link');
await page.waitForTimeout(1200);


await expect(page.locator('.cart_item')).toBeVisible();
await page.waitForTimeout(1000);
});