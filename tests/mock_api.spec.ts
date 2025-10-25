import { test, expect } from '@playwright/test';

test('Mock product API and verify UI update', async ({ page }) => {
  // ✅ Intercept a real API endpoint
  await page.route('https://jsonplaceholder.typicode.com/users', async route => {
    // Return mocked response
    const mockData = [
      { id: 1, name: 'Mocked User', username: 'mock_user', email: 'mock@example.com' },
    ];
    await route.fulfill({ json: mockData });
  });

  // ✅ Navigate to a site that consumes this endpoint
  await page.goto('https://jsonplaceholder.typicode.com/users');
  await page.waitForTimeout(1500);

  // ✅ Verify mock content loaded
  const content = await page.content();
  expect(content).toContain('mock_user');
});
