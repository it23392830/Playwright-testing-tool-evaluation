import { test, expect } from '@playwright/test';


test('Login with valid user', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(1000);


await page.fill('#user-name', 'standard_user');
await page.waitForTimeout(800);


await page.fill('#password', 'secret_sauce');
await page.waitForTimeout(800);


await page.click('#login-button');
await page.waitForTimeout(1200);


await expect(page).toHaveURL(/inventory/);
await page.waitForTimeout(800);


await expect(page.locator('.inventory_list')).toBeVisible();
await page.waitForTimeout(1000);
});