import { test, expect } from "@playwright/test";

test("Dashboard UI should match baseline snapshot", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await page.waitForTimeout(1500); // let the page fully load

  // Take a screenshot and compare to stored snapshot
  expect(await page.screenshot()).toMatchSnapshot("dashboard.png");
});
