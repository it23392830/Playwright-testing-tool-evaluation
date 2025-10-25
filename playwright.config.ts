import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // 📁 Directory for test files
  testDir: './tests',

  // ⏱️ Timeout settings
  timeout: 60000, // increased global timeout to 60s for slow browsers like Firefox

  // 🧾 Enable HTML reporter
  reporter: [['html', { open: 'never' }]],

  // ⚙️ Default test behavior
  use: {
    headless: false, // visible browser for demo
    actionTimeout: 15000, // limit for each user action
    navigationTimeout: 30000, // limit for page.goto
    screenshot: 'only-on-failure', // capture screenshots when a test fails
    video: 'retain-on-failure', // record video on failure for debugging
  },

  // 🌐 Multi-browser projects
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],

  // 🧰 Optional: customize test retries & workers
  retries: 0,
  workers: 4,

  // 🗂 Output folders for reports & traces
  outputDir: 'test-results/',
});
