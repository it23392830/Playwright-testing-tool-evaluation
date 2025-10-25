import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // 📁 Directory for test files
  testDir: './tests',

  // ⏱️ Timeout settings
  timeout: 60000, // increased global timeout to 60s for stability

  // 🧾 Enable HTML reporter
  reporter: [['html', { open: 'never' }]],

  // ⚙️ Default test behavior optimized for demo
  use: {
    headless: false,         // visible browser for presentation
    slowMo: 800,             // 👈 adds 0.8s delay between actions for clarity
    actionTimeout: 15000,    // limit for each user action
    navigationTimeout: 30000,// limit for page.goto
    screenshot: 'only-on-failure',
    video: 'on',             // always record video (great for backup demo)
  },

  // 🌐 Run only one browser during demo (Chromium)
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  // 🧰 Optional: customize retries & workers
  retries: 0,
  workers: 2,

  // 🗂 Output folders for reports & traces
  outputDir: 'test-results/',
});
